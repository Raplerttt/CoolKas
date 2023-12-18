import React, { useEffect, useState } from "react";
import "../style/penyimpanan.css";
import { useNavigate } from "react-router-dom";
import { getBahan, deleteBahan } from "../utils/api";
import { useParams } from "react-router-dom";
const DetailPenyimpanan = () => {
  const navigate = useNavigate();
  const [listBahan, setListBahan] = useState([]);
  const { id } = useParams();
  const idJenis = parseInt(id, 10);
  const storedUserId = localStorage.getItem(`ssdi_`);
  const id_user = parseInt(storedUserId, 10);

  useEffect(() => {
    // Fungsi untuk mendapatkan data jenis bahan
    const fetchLishBahan = async () => {
      try {
        const result = await getBahan(idJenis, id_user);
        setListBahan(result);
      } catch (error) {
        console.error(error);
      }
    };

    // Panggil kedua fungsi saat komponen dimuat pertama kali
    fetchLishBahan();
  }, [id_user, idJenis]);
  const isExpired = (tanggalExpired) => {
    const expiredDate = new Date(tanggalExpired);
    const currentDate = new Date();

    return expiredDate < currentDate;
  };

  const handleKelola = (bahan) => {
    // console.log(" bahan", bahan);
    navigate(`/aktivitas`, { state: { bahan: bahan } });
    // Implement edit functionality
  };

  const handleHapus = async (e, bahanId) => {
    e.preventDefault();
    // Menampilkan konfirmasi dengan window.confirm
    const isConfirmed = window.confirm("Anda yakin ingin menghapus bahan ini?");

    if (isConfirmed) {
      try {
        await deleteBahan(bahanId);

        // Navigasi setelah penghapusan
        navigate("/penyimpanan");
      } catch (error) {
        console.error("Delete Bahan failed:", error);
      }
    }
  };
  const handleOlah = async (e, bahanId, modulJenis) => {
    e.preventDefault();
    const isConfirmed = window.confirm(
      "Anda yakin ingin menghapus dan mengolah limbah bahan ini?"
    );
    if (isConfirmed) {
      try {
        await deleteBahan(bahanId); // Ganti parameter dengan bahan.id

        navigate(`/modulOlahBahan/${modulJenis}`);
      } catch (error) {
        console.error("Delete Bahan failed:", error);
      }
    }
  };

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
  const chunkedBahan = chunkArray(listBahan, 3);

  return (
    <div className="mx-5 text-center">
      <h1 className="fw-bold color-soft-dark-brown penyimpanan-judul shadow-small penyimpanan-shadow-small my-4">
        Stok Bahan Makanan
      </h1>

      <div className="card color-soft-blue px-5 py-3 mb-5 ">
        <div className="card-body">
          {chunkedBahan.map((chunk, rowIndex) => (
            <div key={rowIndex} className="row my-4 g-4">
              {chunk.map((bahan) => (
                <div key={bahan.id} className="col">
                  <div
                    className={`card  ${
                      isExpired(bahan.tanggal_expired) ? "card-kadaluarsa" : ""
                    } mt-3 rounded-4 `}
                  >
                    <div className="card-body  text-start mt-2">
                      <h5 className="fw-bold">{bahan.nama_bahan}</h5>
                      <p className="lh-sm">
                        Jumlah : {bahan.jumlah} {bahan.satuan} <br />
                        Kadaluwarsa :{" "}
                        {new Date(bahan.tanggal_expired).toLocaleDateString()}
                        <br />
                        Lokasi Penyimpanan : {bahan.lokasi_penyimpanan}
                      </p>
                      <div className="button-container d-flex justify-content-end mt-4">
                        <button
                          className="btn btn-soft-brown btn-kelola text-light fw-bold me-2"
                          onClick={() => handleKelola(bahan)}
                        >
                          Kelola
                        </button>
                        {isExpired(bahan.tanggal_expired) ? (
                          <button
                            className="btn btn-soft-dark-brown btn-hapuss text-light fw-bold"
                            onClick={(e) =>
                              handleOlah(e, bahan.id, bahan.id_modul)
                            }
                          >
                            Olah Limbah
                          </button>
                        ) : (
                          <button
                            className="btn btn-soft-dark-brown btn-hapuss text-light fw-bold"
                            onClick={(e) => handleHapus(e, bahan.id)}
                          >
                            Hapus
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPenyimpanan;
