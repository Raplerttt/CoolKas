import React from "react";
import "../style/footer.css";
const Footer = () => {
  return (
    <div className="blue-box">
      <div className="blue-box-content">
        <img src="./assets/logo2.png" alt="Coolkas Image" />
        <div className="text">
          <p>Coolkas</p>
          <ul>
            <li>Home</li>
            <li>Hubungi Kami</li>
            <li>Tentang Kami</li>
          </ul>
        </div>
        <div className="additional-text">
          <p>Fitur</p>
          <ul>
            <li>Penyimpanan</li>
            <li>Modul Resep</li>
            <li>Modul Olah Bahan</li>
          </ul>
        </div>
        <div className="additional-text lane">
          <p>Lainnya</p>
          <ul>
            <li>Syarat & Ketentuan</li>
            <li>Kebijakan Privasi</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="sosmed-box">
          <p>Media Sosial Kami</p>
          <ul className="sosmed-icons">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="./assets/facebook.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="./assets/instagram.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="./assets/twitter.png" alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="get-simplicity">Get Your Simplicity!</p>
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
