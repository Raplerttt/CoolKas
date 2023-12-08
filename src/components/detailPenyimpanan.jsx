import React from "react";
import "../style/penyimpanan.css";
import { useNavigate } from "react-router-dom";
const DetailPenyimpanan = () => {
  const navigate = useNavigate();
  const handleKelola = () => {
    navigate("/aktivitas");
    // Implement edit functionality
    console.log("Edit Akun");
  };

  return (
    <div className="mx-5 text-center">
      <h1 className="fw-bold color-soft-dark-brown penyimpanan-judul shadow-small penyimpanan-shadow-small my-4">
        Nama Bahan Makanan
      </h1>

      <div className="card color-soft-blue px-5 py-3 mb-5 ">
        <div className="card-body">
          <div className="row ">
            <div className="col ">
              <div className="card mt-3 card-kadaluarsa rounded-4">
                <div className="card-body text-start mt-2">
                  <h5 className="fw-bold">Nama Bahan Makanan</h5>
                  <p className="lh-sm">
                    Jumlah : 0 pcs <br />
                    Kadaluarsa : 0 Hari <br />
                    Lokasi Penyimpanan : Kulkas
                  </p>
                  <div className=" button-container d-flex justify-content-end mt-4">
                    <button
                      className="btn btn-soft-brown btn-kelola text-light fw-bold me-2"
                      onClick={handleKelola}
                    >
                      Kelola
                    </button>
                    <button className="btn btn-soft-dark-brown btn-hapuss text-light fw-bold">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <div className="card-body text-start mt-2">
                  <h5 className="fw-bold">Nama Bahan Makanan</h5>
                  <p className="lh-sm">
                    Jumlah : 0 pcs <br />
                    Kadaluarsa : 0 Hari <br />
                    Lokasi Penyimpanan : Kulkas
                  </p>
                  <div className="button-container d-flex justify-content-end mt-4">
                    <button
                      className="btn btn-soft-brown btn-kelola text-light fw-bold me-2"
                      onClick={handleKelola}
                    >
                      Kelola
                    </button>
                    <button className="btn btn-soft-dark-brown btn-hapuss text-light fw-bold">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <div className="card-body text-start mt-2">
                  <h5 className="fw-bold">Nama Bahan Makanan</h5>
                  <p className="lh-sm">
                    Jumlah : 0 pcs <br />
                    Kadaluarsa : 0 Hari <br />
                    Lokasi Penyimpanan : Kulkas
                  </p>
                  <div className="button-container d-flex justify-content-end mt-4">
                    <button
                      className="btn btn-soft-brown btn-kelola text-light fw-bold me-2"
                      onClick={handleKelola}
                    >
                      Kelola
                    </button>
                    <button className="btn btn-soft-dark-brown btn-hapuss text-light fw-bold">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <div className="card-body text-start mt-2">
                  <h5 className="fw-bold">Nama Bahan Makanan</h5>
                  <p className="lh-sm">
                    Jumlah : 0 pcs <br />
                    Kadaluarsa : 0 Hari <br />
                    Lokasi Penyimpanan : Kulkas
                  </p>
                  <div className="button-container d-flex justify-content-end mt-4">
                    <button
                      className="btn btn-soft-brown btn-kelola text-light fw-bold me-2"
                      onClick={handleKelola}
                    >
                      Kelola
                    </button>
                    <button className="btn btn-soft-dark-brown btn-hapuss text-light fw-bold">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <div className="card-body text-start mt-2">
                  <h5 className="fw-bold">Nama Bahan Makanan</h5>
                  <p className="lh-sm">
                    Jumlah : 0 pcs <br />
                    Kadaluarsa : 0 Hari <br />
                    Lokasi Penyimpanan : Kulkas
                  </p>
                  <div className="button-container d-flex justify-content-end mt-4">
                    <button
                      className="btn btn-soft-brown btn-kelola text-light fw-bold me-2"
                      onClick={handleKelola}
                    >
                      Kelola
                    </button>
                    <button className="btn btn-soft-dark-brown btn-hapuss text-light fw-bold">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <div className="card-body text-start mt-2">
                  <h5 className="fw-bold">Nama Bahan Makanan</h5>
                  <p className="lh-sm">
                    Jumlah : 0 pcs <br />
                    Kadaluarsa : 0 Hari <br />
                    Lokasi Penyimpanan : Kulkas
                  </p>
                  <div className="button-container d-flex justify-content-end mt-4">
                    <button
                      className="btn btn-soft-brown btn-kelola text-light fw-bold me-2"
                      onClick={handleKelola}
                    >
                      Kelola
                    </button>
                    <button className="btn btn-soft-dark-brown btn-hapuss text-light fw-bold">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <div className="card-body text-start mt-2">
                  <h5 className="fw-bold">Nama Bahan Makanan</h5>
                  <p className="lh-sm">
                    Jumlah : 0 pcs <br />
                    Kadaluarsa : 0 Hari <br />
                    Lokasi Penyimpanan : Kulkas
                  </p>
                  <div className="button-container d-flex justify-content-end mt-4">
                    <button
                      className="btn btn-soft-brown btn-kelola text-light fw-bold me-2"
                      onClick={handleKelola}
                    >
                      Kelola
                    </button>
                    <button className="btn btn-soft-dark-brown btn-hapuss text-light fw-bold">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <div className="card-body text-start mt-2">
                  <h5 className="fw-bold">Nama Bahan Makanan</h5>
                  <p className="lh-sm">
                    Jumlah : 0 pcs <br />
                    Kadaluarsa : 0 Hari <br />
                    Lokasi Penyimpanan : Kulkas
                  </p>
                  <div className="button-container d-flex justify-content-end mt-4">
                    <button
                      className="btn btn-soft-brown btn-kelola text-light fw-bold me-2"
                      onClick={handleKelola}
                    >
                      Kelola
                    </button>
                    <button className="btn btn-soft-dark-brown btn-hapuss text-light fw-bold">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="card penyimpanan-card mt-3 rounded-4">
                <div className="card-body text-start mt-2">
                  <h5 className="fw-bold">Nama Bahan Makanan</h5>
                  <p className="lh-sm">
                    Jumlah : 0 pcs <br />
                    Kadaluarsa : 0 Hari <br />
                    Lokasi Penyimpanan : Kulkas
                  </p>
                  <div className="button-container d-flex justify-content-end mt-4">
                    <button
                      className="btn btn-soft-brown btn-kelola text-light fw-bold me-2"
                      onClick={handleKelola}
                    >
                      Kelola
                    </button>
                    <button className="btn btn-soft-dark-brown btn-hapuss text-light fw-bold">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPenyimpanan;
