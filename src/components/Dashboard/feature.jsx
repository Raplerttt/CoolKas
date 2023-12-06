import React from "react";
import "../../style/feature.css";

function Feature() {
  return (
    <div class="feature-card">
      <h1>Fitur Kami</h1>
      <div class="row row-cols-1 row-cols-md-3 g-5 ">
        <div class="card-group">
          <div id="Card" class="card text-center shadow p-4 mb-5 ">
            <img
              src="./assets/feature1.png"
              class="card-img-top"
              alt="Penyimpanan"
            />
            <div class="card-body">
              <h5 class="card-title">Penyimpanan</h5>
              <p class="card-text">
                Susun dan lihat daftar bahan makanan berdasarkan jenis bahan
                beserta kuantitasnya dengan adanya pengingat kadaluarsa.
              </p>
            </div>
          </div>
        </div>
        <div class="card-group">
          <div class="card text-center shadow p-4 mb-5 ">
            <img
              src="./assets/feature2.png"
              class="card-img-top"
              alt="Modul Resep"
            />
            <div class="card-body">
              <h5 class="card-title">Modul Resep</h5>
              <p class="card-text">
                Jelajahi aneka resep dari berbagai kategoti dan variasi
                inspiratif untuk memenuhi selera kuliner kamu!
              </p>
            </div>
          </div>
        </div>
        <div class="card-group">
          <div class="card text-center shadow p-4 mb-5 ">
            <img
              src="./assets/feature3.png"
              class="card-img-top"
              alt="Modul Olah Bahan"
            />
            <div class="card-body">
              <h5 class="card-title">Modul Olah Bahan</h5>
              <p class="card-text">
                Telusuri bergagai panduan untuk mengolah limbah bahan makanan
                guna mendukung gaya hidup ramah lingkungan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
