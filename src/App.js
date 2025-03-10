import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styles from "./styles/App.module.css";
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { About } from "./pages/About";
import logo from "./assets/Logocommunion.png";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className={styles.app}>
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="CommunionHub Logo" className={styles.logo} />
          </div>
          <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
