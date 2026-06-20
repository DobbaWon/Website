// scripts/prerender.js
//
// Runs after both the client build (`vite build`) and the SSR build
// (`vite build --ssr src/entry-server.jsx --outDir dist-server`).
//
// For each route:
//   1. Renders it to an HTML string via the SSR bundle.
//   2. Pulls the <title>/<meta>/<link>/<script> tags our <Seo> component
//      rendered (renderToString has no live DOM to hoist them into, so
//      they come out inline in the markup — we move them into <head>
//      ourselves).
//   3. Writes a real, fully-formed HTML file for that route, so crawlers
//      and social-preview bots get correct content with zero JS execution.
//
// Output layout matches what static hosts (Netlify, Vercel, GitHub Pages,
// S3, etc.) serve by default — "/dj" becomes dist/dj/index.html — so this
// also fixes direct-navigation 404s on client-side routes without any
// host-side rewrite rules.
//
// Also (re)generates dist/sitemap.xml and dist/robots.txt from the same
// ROUTES / SITE_URL constants the app itself uses, so they can't drift.

import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, SITE_URL } from "../src/seo/siteConfig.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distDir = join(root, "dist");

const TAG_PATTERNS = [
  /<title>[\s\S]*?<\/title>/g,
  /<meta[^>]*\/>/g,
  /<link rel="canonical"[^>]*\/>/g,
  /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
];

function extractHeadTags(html) {
  let headTags = "";
  let bodyHtml = html;

  for (const pattern of TAG_PATTERNS) {
    const matches = bodyHtml.match(pattern) || [];
    headTags += matches.join("");
    bodyHtml = bodyHtml.replace(pattern, "");
  }

  return { headTags, bodyHtml };
}

function injectIntoTemplate(template, headTags, bodyHtml) {
  // Strip the static template's own default <title>/<meta name="description">
  // so we don't end up with two of each — the per-route tags replace them.
  // Both can span multiple lines in the source template, hence [\s\S]*?.
  let result = template
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, "")
    .replace(/\n\s*\n/g, "\n");

  result = result.replace("</head>", `${headTags}</head>`);
  result = result.replace(
    '<div id="root"></div>',
    `<div id="root">${bodyHtml}</div>`
  );

  return result;
}

function outputPathFor(routePath) {
  if (routePath === "/") return join(distDir, "index.html");
  return join(distDir, routePath, "index.html");
}

async function main() {
  const { render } = await import("../dist-server/entry-server.js");
  const template = readFileSync(join(distDir, "index.html"), "utf-8");

  for (const { path } of ROUTES) {
    const rawHtml = render(path);
    const { headTags, bodyHtml } = extractHeadTags(rawHtml);
    const finalHtml = injectIntoTemplate(template, headTags, bodyHtml);

    const outPath = outputPathFor(path);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, finalHtml);
    console.log(`Prerendered ${path} -> ${outPath.replace(root + "/", "")}`);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${SITE_URL}${r.path === "/" ? "" : r.path}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
).join("\n")}
</urlset>
`;
  writeFileSync(join(distDir, "sitemap.xml"), sitemap);
  console.log("Wrote dist/sitemap.xml");

  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  writeFileSync(join(distDir, "robots.txt"), robots);
  console.log("Wrote dist/robots.txt");

  rmSync(join(root, "dist-server"), { recursive: true, force: true });
}

main();
