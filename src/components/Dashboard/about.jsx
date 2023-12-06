import React from "react";
import "../../style/about.css";

function About() {
  return (
    <div class="about">
      <div class="about-brief">
        <div class="column">
          <img
            src="./assets/logo2.png"
            class="img-fluid mx-auto d-block"
            alt="Logo Coolkas"
          />
        </div>
        <div class="column2">
          <h1>Tentang CoolKas</h1>
          <p>
            Aplikasi web inovatif yang dirancang untuk memberikan solusi yang
            efektif terhadap masalah umum yang dihadapi oleh banyak individu dan
            keluarga, yaitu pengelolaan persediaan makanan di rumah.{" "}
          </p>
        </div>
      </div>
      <div id="seeAbout" class="text-center">
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Lihat
        </a>
      </div>
    </div>
  );
}

export default About;
