import React, { useEffect, useState } from "react";
import { getDetailModul } from "../utils/api";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
function DetailOlahBahan() {
  const { id } = useParams();
  const [modul, setModul] = useState([]);
  const idAsNumber = parseInt(id, 10);
  useEffect(() => {
    // Fungsi untuk mendapatkan data meals
    const fetchModul = async () => {
      try {
        const result = await getDetailModul(idAsNumber);
        setModul(result);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    // Panggil fungsi fetchModul saat komponen dimuat pertama kali
    fetchModul();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="/assets/olah-limbah.png"
            alt={modul.judul_modul}
            className="img-fluid rounded-5"
          />
        </div>
        <div className="col-md-6 mt-3">
          <h2 className="judul-modul-olah-bahan mb-4 mt-0">
            {modul.judul_modul}
          </h2>
          <p>{modul.deskripsi}</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9  mx-auto mb-3 mt-5">
            <div className="card rounded-3 cara-olah-bahan">
              <div className="card-body">
                <h3 className="card-title text-center">Cara Mengolah Bahan:</h3>
                {modul.cara_mengolah && (
                  <ol className="list-group list-group-flush">
                    {modul.cara_mengolah.split("/n").map((step, index) => (
                      <li key={index}> {step}</li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-auto mt-5">
            <div className="card rounded-4 jenis-olah-bahan">
              <div className="card-body">
                <h3 className="card-title text-center">Jenis Bahan:</h3>
                {modul.jenis_bahan && (
                  <ul className="list-group list-group-flush">
                    {modul.jenis_bahan.split("/n").map((step, index) => (
                      <li key={index}> {step}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center mb-3">
        <div className="row col-md-12 d-flex justify-content-center align-items-center">
          <h3>Video Tutorial:</h3>
          <div className="video-container">
            <ReactPlayer
              url={modul.video_tutorial}
              controls // Menampilkan tombol play dan kontrol video
              width="60%" // Mengisi lebar video 100% dari container
              style={{ margin: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailOlahBahan;
