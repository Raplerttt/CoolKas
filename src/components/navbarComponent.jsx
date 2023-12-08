import "../style/navbar.css";

function Navbar() {
  return (
    <header className="app-bar">
      <div className="app-bar__brand">
        <a href="index.html">
          <img src="/assets/logo.png" className="logo" alt="Logo" />
        </a>
      </div>
      <div className="app-bar__menu">
        <button id="hamburgerButton">☰</button>
      </div>
      <nav id="navigationDrawer" className="app-bar__navigation">
        <ul>
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
