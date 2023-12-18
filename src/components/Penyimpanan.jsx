import React, { useEffect, useState } from "react";
import "../style/penyimpanan.css";
import { useNavigate } from "react-router-dom";
import { getJenisBahan, getLogAktivitas } from "../utils/api";
const Penyimpanan = () => {
  const navigate = useNavigate();
  const [listJenis, setListJenis] = useState([]);
  const [logAktivitas, setLogAktivitas] = useState([]);

  const storedUserId = localStorage.getItem(`ssdi_`);
  const id_user = parseInt(storedUserId, 10);

  useEffect(() => {
    // Fungsi untuk mendapatkan data jenis bahan
    const fetchData = async () => {
      try {
        const result = await getJenisBahan(id_user);
        setListJenis(result);
        const aktivitas = await getLogAktivitas(id_user);
        setLogAktivitas(aktivitas);
      } catch (error) {
        console.error("Error fetching jenis bahan:", error);
      }
    };

    // Panggil kedua fungsi saat komponen dimuat pertama kali
    fetchData();
    // console.log(logAktivitas);
  }, [id_user]);

  // Pemanggilan chunkArray dipindahkan ke dalam fungsi komponen
  function chunkArray(arr, size) {
    return arr.reduce((chunks, el, i) => {
      if (i % size === 0) {
        chunks.push([el]);
      } else {
        chunks[chunks.length - 1].push(el);
      }
      return chunks;
    }, []);
  }

  // Pemanggilan chunkArray dihitung di sini
  const chunkedJenis = chunkArray(listJenis, 3);
  return (
    <div className="mx-5 text-center">
      <h1 className="fw-bold color-soft-dark-brown penyimpanan-judul shadow-small my-4 mt-5">
        Jenis Stok Makanan
      </h1>

      <div className="card penyimpanan-card color-soft-blue p-2 mb-5">
        <div className="card-body">
          {chunkedJenis.map((chunk, rowIndex) => (
            <div key={rowIndex} className="row my-4">
              {chunk.map((jenis) => (
                <div key={jenis.id} className="col">
                  <div
                    className={`card  ${
                      jenis.jumlah_kadaluwarsa > 0 ? "card-kadaluarsa" : ""
                    } penyimpanan-card mt-3 rounded-4 `}
                  >
                    <img
                      src={`assets/penyimpanan_${jenis.id}.jpg`}
                      className="card-img-top img-fluid object-fit-cover rounded-start-4 rounded-end-0"
                      alt={jenis.nama_jenis_bahan}
                    />
                    <div className="card-body text-start">
                      <h5 className="fw-bold">{jenis.nama_jenis_bahan}</h5>
                      <p className="lh-sm text-small-penyimpanan">
                        Kamu mempunyai <b>{jenis.jumlah_bahan}</b> macam makanan
                        di jenis makanan ini. <br />
                        {jenis.jumlah_kadaluwarsa > 0
                          ? `Terdapat ${jenis.jumlah_kadaluwarsa} bahan kadaluwarsa`
                          : ""}
                      </p>

                      {jenis.jumlah_bahan > 0 && (
                        <div className="d-flex justify-content-center">
                          <a
                            href={`/detailPenyimpanan/${jenis.id}`}
                            className="btn btn-soft-brown btn-kelola text-light fw-bold px-4"
                          >
                            Lihat Stok
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container-log">
        <div className="log-tittle">
          <h1>Riwayat Penyimpanan</h1>
        </div>

        {logAktivitas.length === 0 ? (
          <p className="nothing-log">
            Anda belum mempunyai riwayat penyimpanan
          </p>
        ) : (
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
                {logAktivitas.map((aktivitas, index) => (
                  <tr key={aktivitas.id}>
                    <td>{index + 1}</td>
                    <td>
                      {new Date(
                        aktivitas.tanggal_aktivitas
                      ).toLocaleDateString()}
                    </td>
                    <td>{aktivitas.keterangan_aktivitas}</td>
                    <td>{aktivitas.nama_bahan}</td>
                    <td>{aktivitas.nama_jenis_bahan}</td>
                    <td>{`${aktivitas.jumlah_bahan} ${aktivitas.satuan}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <button className="add-button" onClick={() => navigate(`/belanja`)}>
        +
      </button>
    </div>
  );
};

export default Penyimpanan;
