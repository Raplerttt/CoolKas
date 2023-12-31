/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from "react";
import "../style/navbar.css";

function Navbar() {
  // Fungsi untuk menghandle logout
  const handleLogout = () => {
    // Menghapus token dari session storage
    localStorage.removeItem(`ssdi_`);
    localStorage.removeItem(`username`);
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
  // to close hamburger outside the icon
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (navbarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [navbarOpen]);

  return (
    <header ref={ref} className="app-bar">
      <div className="app-bar__brand">
        <a href="/Dashboard">
          <img src="/assets/logo.png" className="logo" alt="Logo" />
        </a>
      </div>
      <nav>
        <button
          id="hamburgerButton"
          className="toggle"
          onClick={() => setNavbarOpen((prev) => !prev)}
        >
          {navbarOpen ? "☰" : "☰"}
        </button>
        <ul className={`menu-nav${navbarOpen ? " show-menu" : ""}`}>
          <li className="main-nav">
            <a href="/Dashboard">Home</a>
          </li>
          <li className="main-nav">
            <a href="/penyimpanan">Penyimpanan </a>
          </li>
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Modul
            </div>
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
            <div
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </div>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="/akun">
                  Informasi Akun
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/login "
                  onClick={handleLogout}
                >
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
