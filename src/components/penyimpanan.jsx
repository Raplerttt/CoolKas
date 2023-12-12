import React from "react";
import "../style/penyimpanan.css";
import { useNavigate } from "react-router-dom";
const Penyimpanan = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-5 text-center">
      <h1 className="fw-bold color-soft-dark-brown penyimpanan-judul shadow-small my-4 mt-5">
        Jenis Stok Makanan
      </h1>

      <div className="card penyimpanan-card color-soft-blue p-2 mb-5">
        <div className="card-body">
          <div className="row ">
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <img
                  src="assets/penyimpanan_kacang.jpg"
                  className="card-img-top img-fluid object-fit-cover rounded-start-4 rounded-end-0"
                  alt="Kacang-kacangan"
                />
                <div className="card-body text-start">
                  <h5 className="fw-bold">Kacang-Kacangan</h5>
                  <p className="lh-sm text-small-penyimpanan">
                    Kamu mempunyai <b>0</b> macam makanan di jenis makanan ini.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="/detailPenyimpanan/1"
                      className="btn btn-soft-brown btn-kelola text-light fw-bold px-4"
                    >
                      Lihat Bahan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <img
                  src="assets/penyimpanan_telur.jpg"
                  className="card-img-top img-fluid object-fit-cover rounded-start-4 rounded-end-0"
                  alt="Telur & Bahan Harian"
                />
                <div className="card-body text-start">
                  <h5 className="fw-bold">Telur & Bahan Harian</h5>
                  <p className="lh-sm text-small-penyimpanan">
                    Kamu mempunyai <b>0</b> macam makanan di jenis makanan ini.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="/detailPenyimpanan/1"
                      className="btn btn-soft-brown btn-kelola text-light fw-bold px-4"
                    >
                      Lihat Bahan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <img
                  src="assets/penyimpanan_buah.jpg"
                  className="card-img-top img-fluid object-fit-cover rounded-start-4 rounded-end-0"
                  alt="Buah-Buahan"
                />
                <div className="card-body text-start">
                  <h5 className="fw-bold">Buah-Buahan</h5>
                  <p className="lh-sm text-small-penyimpanan">
                    Kamu mempunyai <b>0</b> macam makanan di jenis makanan ini.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="/detailPenyimpanan/1"
                      className="btn btn-soft-brown btn-kelola text-light fw-bold px-4"
                    >
                      Lihat Bahan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <img
                  src="assets/penyimpanan_sayur.jpg"
                  className="card-img-top img-fluid object-fit-cover rounded-start-4 rounded-end-0"
                  alt="Sayur-Sayuran"
                />
                <div className="card-body text-start">
                  <h5 className="fw-bold">Sayur-Sayuran</h5>
                  <p className="lh-sm text-small-penyimpanan">
                    Kamu mempunyai <b>0</b> macam makanan di jenis makanan ini.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="/detailPenyimpanan/3"
                      className="btn btn-soft-brown btn-kelola text-light fw-bold px-4"
                    >
                      Lihat Bahan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <img
                  src="assets/penyimpanan_daging_unggas.jpg"
                  className="card-img-top img-fluid object-fit-cover rounded-start-4 rounded-end-0"
                  alt="Daging & Unggas"
                />
                <div className="card-body text-start">
                  <h5 className="fw-bold">Daging & Unggas</h5>
                  <p className="lh-sm text-small-penyimpanan">
                    Kamu mempunyai <b>0</b> macam makanan di jenis makanan ini.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="/detailPenyimpanan/4"
                      className="btn btn-soft-brown btn-kelola text-light fw-bold px-4"
                    >
                      Lihat Bahan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <img
                  src="assets/penyimpanan_bumbu_dapur.jpg"
                  className="card-img-top img-fluid object-fit-cover rounded-start-4 rounded-end-0"
                  alt="Bumbu Dapur"
                />
                <div className="card-body text-start">
                  <h5 className="fw-bold">Bumbu Dapur</h5>
                  <p className="lh-sm text-small-penyimpanan">
                    Kamu mempunyai <b>0</b> macam makanan di jenis makanan ini.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="/detailPenyimpanan/5"
                      className="btn btn-soft-brown btn-kelola text-light fw-bold px-4"
                    >
                      Lihat Bahan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <img
                  src="assets/penyimpanan_tepung.jpg"
                  className="card-img-top img-fluid object-fit-cover rounded-start-4 rounded-end-0"
                  alt="Tepung & Olahannya"
                />
                <div className="card-body text-start">
                  <h5 className="fw-bold">Tepung & Olahannya</h5>
                  <p className="lh-sm text-small-penyimpanan">
                    Kamu mempunyai <b>0</b> macam makanan di jenis makanan ini.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="/detailPenyimpanan/6"
                      className="btn btn-soft-brown btn-kelola text-light fw-bold px-4"
                    >
                      Lihat Bahan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <img
                  src="assets/penyimpanan_saos.jpg"
                  className="card-img-top img-fluid object-fit-cover rounded-start-4 rounded-end-0"
                  alt="Saos & Kecap"
                />
                <div className="card-body text-start">
                  <h5 className="fw-bold">Saos & Kecap</h5>
                  <p className="lh-sm text-small-penyimpanan">
                    Kamu mempunyai <b>0</b> macam makanan di jenis makanan ini.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="/detailPenyimpanan/7"
                      className="btn btn-soft-brown btn-kelola text-light fw-bold px-4"
                    >
                      Lihat Bahan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <img
                  src="assets/penyimpanan_kaleng.jpg"
                  className="card-img-top img-fluid object-fit-cover rounded-start-4 rounded-end-0"
                  alt="Makanan Kaleng"
                />
                <div className="card-body text-start">
                  <h5 className="fw-bold">Makanan Kaleng</h5>
                  <p className="lh-sm text-small-penyimpanan">
                    Kamu mempunyai <b>0</b> macam makanan di jenis makanan ini.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a
                      href="/detailPenyimpanan/8"
                      className="btn btn-soft-brown btn-kelola text-light fw-bold px-4"
                    >
                      Lihat Bahan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-log">
        <div className="log-tittle">
          <h1>Riwayat Penyimpanan</h1>
        </div>
        <div className="table-responsive">
          <table className="table log-aktivitas">
            <thead>
              <tr>
                <th>No.</th>
                <th>Tanggal Aktivitas</th>
                <th>Keterangan Aktivitas</th>
                <th>Nama Bahan</th>
                <th>Jenis Bahan</th>
                <th>Jumlah</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>01/01/2024</td>
                <td>masak</td>
                <td>Telur</td>
                <td>Telur & Bahan Harian</td>
                <td>2 kg</td>
              </tr>

              <tr>
                <td>2</td>
                <td>01/01/2024</td>
                <td>masak</td>
                <td>Telur</td>
                <td>Telur & Bahan Harian</td>
                <td>2 kg</td>
              </tr>

              <tr>
                <td>3</td>
                <td>01/01/2024</td>
                <td>masak</td>
                <td>Telur</td>
                <td>Telur & Bahan Harian</td>
                <td>2 kg</td>
              </tr>

              <tr>
                <td>4</td>
                <td>01/01/2024</td>
                <td>masak</td>
                <td>Telur</td>
                <td>Telur & Bahan Harian</td>
                <td>2 kg</td>
              </tr>

              <tr>
                <td>5</td>
                <td>01/01/2024</td>
                <td>masak</td>
                <td>Telur</td>
                <td>Telur & Bahan Harian</td>
                <td>2 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button className="add-button" onClick={() => navigate(`/belanja`)}>
        +
      </button>
    </div>
  );
};

export default Penyimpanan;
