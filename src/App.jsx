// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import DJing from "./pages/DJing"
import Websites from "./pages/Websites"
import Software from "./pages/Software"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dj" element={<DJing />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/software" element={<Software />} />
      </Routes>
    </BrowserRouter>
  )
}
