import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <div className="text-2xl p-4">Inicio 🏠</div>;
const About = () => <div className="text-2xl p-4">Acerca de 📚</div>;

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-black text-white flex gap-4">
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
