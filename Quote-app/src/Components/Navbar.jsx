import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
const Darkmode = () => {


  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <Link className="navbar-brand" to="/">
          Mutiple Apps Junction
        </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/qrcode">
                Qr Generator
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quote">
                Quote Generator
              </Link>
            </li>
          </ul>
        </div>
        <label className="switch">
          <input className="toogl" type="checkbox" onClick={()=>toggleTheme()} />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
};

export default Darkmode;
