import "../style/navbar.css";

function Navbar() {
  return (
    <div class="app-bar">
      <div class="app-bar__brand">
        <a href="index.html">
          <img src="/assets/logo.png" class="logo" alt="Logo"/>
        </a>
      </div>
      <div class="app-bar__menu">
        <button id="hamburgerButton">☰</button>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
          <li class="main-nav"><a href="#/">Home</a></li>
          <li class="main-nav"><a href="#/">Penyimpanan </a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Modul
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Modul Resep</a></li>
              <li><a class="dropdown-item" href="#">Modul Olah Bahan</a></li>
            </ul>
          </li>
          <li class="main-nav"><a href="#/">Contact Us</a></li>
          <li class="main-nav"><a href="#/">About Us</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Account
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Informasi Akun</a></li>
              <li><a class="dropdown-item" href="#">Log Out</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
