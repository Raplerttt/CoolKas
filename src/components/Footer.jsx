import React from "react";
import "../style/footer.css";
const Footer = () => {
  return (
    <div className="blue-box">
      <div className="blue-box-content">
        <div className="logo-tagline">
          <img src="../assets/logo2.png" alt="Coolkas Logo" />
          <p className="get-simplicity">Get Your Simplicity!</p>
        </div>
        <div className="text">
          <p>Coolkas</p>
          <ul>
            <li><a href="/Dashboard">Home</a></li>
            <li><a href="/contactUs">Hubungi Kami</a></li>
            <li><a href="/aboutUs">Tentang Kami</a></li>
          </ul>
        </div>
        <div className="additional-text">
          <p>Fitur</p>
          <ul>
            <li><a href="/penyimpanan">Penyimpanan</a></li>
            <li><a href="/modulResep">Modul Resep</a></li>
            <li><a href="/modulOlahBahan">Modul Olah Bahan</a></li>
          </ul>
        </div>
        <div className="lane">
          <p>Lainnya</p>
          <ul>
            <li><a href="/akun">Informasi Akun</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/Dashboard">FAQ</a></li>
          </ul>
        </div>
        <div className="sosmed-box">
          <p>Media Sosial Kami</p>
          <ul className="sosmed-icons">
            <li>
              <a href="/Dashboard" target="_blank" rel="noopener noreferrer">
                <img src="../assets/facebook.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="/Dashboard" target="_blank" rel="noopener noreferrer">
                <img src="../assets/instagram.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="/Dashboard" target="_blank" rel="noopener noreferrer">
                <img src="../assets/twitter.png" alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

const AppFooter = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 CoolKas</p>
    </footer>
  );
};

export { Footer, AppFooter };
