import React from "react";
import "../../style/about.css";

function About() {
  return (
    <div className="about d-flex align-items-center">
      <div className="about-brief">
        <div className="column">
          <img
            src="./assets/coolkas.png"
            className="img-fluid mx-auto d-block"
            alt="Logo Coolkas"
          />
        </div>
        <div className="column2">
          <h1>Tentang CoolKas</h1>
          <p>
            Aplikasi web inovatif yang dirancang untuk memberikan solusi yang
            efektif terhadap masalah umum yang dihadapi oleh banyak individu dan
            keluarga, yaitu pengelolaan persediaan makanan di rumah.{" "}
          </p>
        </div>
      </div>
      <div id="seeAbout" className="text-center mx-auto">
        <a className="btn btn-primary btn-lg" href="/aboutUs" role="button">
          Lihat
        </a>
      </div>
    </div>
  );
}

export default About;
