import React, { useState, useRef, useEffect } from 'react';
import "../style/navbar.css";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // to close hamburger outside the icon
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (
        navbarOpen &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [navbarOpen]);

  return (
    <header ref={ref} className="app-bar">
      <div className="app-bar__brand">
        <a href="index.html">
          <img src="/assets/logo.png" className="logo" alt="Logo" />
        </a>
      </div>
      <nav>
        <button id="hamburgerButton" className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>{navbarOpen ? '☰' : '☰'}</button>
        <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
          <li className="main-nav">
            <a href="/">Home</a>
          </li>
          <li className="main-nav">
            <a href="/penyimpanan">Penyimpanan </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Modul
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="/modulResep">
                  Modul Resep
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/modulOlahBahan">
                  Modul Olah Bahan
                </a>
              </li>
            </ul>
          </li>
          <li className="main-nav">
            <a href="/contactUs">Contact Us</a>
          </li>
          <li className="main-nav">
            <a href="/aboutUs">About Us</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="/akun">
                  Informasi Akun
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Log Out
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
