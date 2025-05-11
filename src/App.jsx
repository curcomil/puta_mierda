import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Pages
import Home from "./pages/Home";

//Layout
import Navbar from "./layouts/Navbar";

export default function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col p-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
