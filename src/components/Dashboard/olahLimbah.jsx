/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../../style/olahLimbah.css";

function OlahLimbah(moduls) {
  return (
    <div className="olah-limbah">
      <div className="container">
        <div className="title-container" tabIndex="0">
          <h1>Modul Olah Bahan</h1>
          <p>Jelajahi dan pelajari cara mengolah limbah makananmu!</p>
        </div>
        <div className="container-card">
          <div className="column-card1" tabIndex="0">
            <div className="card">
              <img
                src="./assets/olah-limbah.png"
                className="card-img-top img-fluid"
                alt="Image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Mengolah Limbah Organik Menjadi Pupuk Berkualitas
                </h5>
                <p className="card-text line-clamp-3 deskripsi-card-olahbahan">
                  Kacang-kacangan memiliki kandungan serat, vitamin, mineral,
                  dan protein yang tinggi, menjadikannya pilihan makanan sehat.
                  Limbah kacang-kacangan dapat diolah menjadi pupuk organik atau
                  kompos, memberikan manfaat bagi tanah dan lingkungan. Limbah
                  ini terutama berasal dari kacang-kacangan yang sudah busuk
                  atau tidak layak konsumsi. Proses pengomposan limbah
                  kacang-kacangan dapat membantu mengurangi limbah organik dan
                  menghasilkan pupuk alami yang berguna untuk pertanian.
                </p>
                <p className="card-text small">Desember 10, 2023</p>
              </div>
            </div>
          </div>
          <div className="column-card2">
            {/* card verti 1 */}
            <div className="card mb-3" tabIndex="0">
              <div className="row g-0">
                <div className="col-6 col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      Telur Bermetamorfosis Jadi Pupuk
                    </h5>
                    <p className="card-text second line-clamp-3 deskripsi-card-olahbahan2">
                      Telur adalah sumber protein berkualitas tinggi dan
                      mengandung banyak nutrisi penting seperti vitamin B12,
                      vitamin D, dan selenium. Bahan harian meliputi berbagai
                      komponen makanan yang biasanya digunakan secara rutin
                      dalam kehidupan sehari-hari. Limbah dari telur yang sudah
                      busuk atau bahan harian yang telah membusuk dapat diolah
                      menjadi pupuk kompos, memberikan manfaat bagi tanah dan
                      mengurangi jumlah limbah yang masuk ke tempat pembuangan
                      akhir. Proses ini membantu menghasilkan pupuk organik yang
                      dapat digunakan kembali untuk meningkatkan kesuburan
                      tanah.
                    </p>
                    <p className="card-text small">Desember 02, 2023</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 m-0">
                  <img
                    src="./assets/olah-limbah3.jpg"
                    className="verti-card-pic card-img-top img-fluid object-fit-fill"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
            {/* card verti 2 */}
            <div className="card mb-3" tabIndex="0">
              <div className="row g-0">
                <div className="col-6 col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      Sihir Pupuk Kompos Di Tanganmu!
                    </h5>
                    <p className="card-text second line-clamp-3 deskripsi-card-olahbahan2">
                      Buah-buahan merupakan sumber nutrisi yang kaya akan
                      vitamin, mineral, serat, dan antioksidan. Limbah dari
                      buah-buahan yang sudah busuk atau terlalu matang dapat
                      diolah menjadi pupuk kompos, mengurangi limbah organik
                      yang masuk ke tempat pembuangan akhir, dan memberikan
                      manfaat positif bagi tanah. Proses pengomposan ini tidak
                      hanya membantu mengelola limbah tetapi juga menciptakan
                      pupuk organik yang berguna untuk tanaman.
                    </p>
                    <p className="card-text small">November 28, 2023</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 m-0">
                  <img
                    src="./assets/olah-limbah4.jpg"
                    className="verti-card-pic card-img-top img-fluid object-fit-cover"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
            {/* <!-- card verti 3 --> */}
            <div className="card mb-3" tabIndex="0">
              <div className="row g-0">
                <div className="col-6 col-md-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      Sayuran Terlalu Matang? Jadikan Pupuk Organik!
                    </h5>
                    <p className="card-text second line-clamp-3 deskripsi-card-olahbahan2">
                      Sayur-sayuran kaya akan serat, vitamin, mineral, dan
                      antioksidan. Limbah dari sayur-sayuran yang sudah busuk
                      atau terlalu matang dapat diolah menjadi pupuk kompos,
                      mengurangi jumlah limbah organik yang masuk ke tempat
                      pembuangan akhir, dan memberikan manfaat bagi tanah.
                      Proses pengomposan ini tidak hanya membantu mengelola
                      limbah tetapi juga menciptakan pupuk organik yang berguna
                      untuk tanaman.
                    </p>
                    <p className="card-text small">November 20, 2023</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 m-0">
                  <img
                    src="./assets/olah-limbah2.png"
                    className="verti-card-pic card-img-top img-fluid object-fit-cover"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="seeOlah" className="text-center">
          <a
            className="btn btn-primary btn-lg"
            href="/modulOlahBahan"
            role="button"
          >
            Lihat
          </a>
        </div>
      </div>
    </div>
  );
}

export default OlahLimbah;
