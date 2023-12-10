import React from "react";
import "../../style/feature.css";

function Feature() {
  return (
    <div className="feature-card">
      <h1>Fitur Kami</h1>
      <div className="row row-cols-1 row-cols-md-3 g-5 ">
        <div className="card-group">
          <div id="Card" className="card text-center shadow p-4 mb-5 ">
            <img
              src="./assets/feature1.png"
              className="card-img-top"
              alt="Penyimpanan"
            />
            <div className="card-body">
              <h5 className="card-title">Penyimpanan</h5>
              <p className="card-text">
                Susun dan lihat daftar bahan makanan berdasarkan jenis bahan
                beserta kuantitasnya dengan adanya pengingat kadaluarsa.
              </p>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div className="card text-center shadow p-4 mb-5 ">
            <img
              src="./assets/feature2.png"
              className="card-img-top"
              alt="Modul Resep"
            />
            <div className="card-body">
              <h5 className="card-title">Modul Resep</h5>
              <p className="card-text">
                Jelajahi aneka resep dari berbagai kategoti dan variasi
                inspiratif untuk memenuhi selera kuliner kamu!
              </p>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div className="card text-center shadow p-4 mb-5 ">
            <img
              src="./assets/feature3.png"
              className="card-img-top"
              alt="Modul Olah Bahan"
            />
            <div className="card-body">
              <h5 className="card-title">Modul Olah Bahan</h5>
              <p className="card-text">
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
