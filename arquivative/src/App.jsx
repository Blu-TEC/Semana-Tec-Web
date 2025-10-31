import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Modelos3D from "./pages/Modelos3D";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-white text-neutral-900 font-inter">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modelos3d" element={<Modelos3D />} />
        </Routes>
      </div>
    </Router>
  );
}
