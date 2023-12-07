import React from "react";
import { getData } from "../utils/data";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";

function DetailOlahBahan({ id }) {
  const moduls = getData();
  const idAsNumber = parseInt(id, 10);
  const data = moduls.find((modul) => modul.id === idAsNumber);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={data.image}
            alt={data.judul}
            className="img-fluid rounded-5"
          />
        </div>
        <div className="col-md-6">
          <h2>{data.judul}</h2>
          <p>{data.deskripsi}</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9  mx-auto mb-3 mt-5">
            <div className="card rounded-3 cara-olah-bahan">
              <div className="card-body">
                <h3 className="card-title text-center">Cara Mengolah Bahan:</h3>
                <p className="card-text">{data.cara}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mx-auto mt-5">
            <div className="card rounded-4 jenis-olah-bahan">
              <div className="card-body">
                <h3 className="card-title text-center">Jenis Bahan:</h3>
                <ul className="card-text">
                  {data.jenis.map((jenis, index) => (
                    <li key={index}>{jenis}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <div className="row col-md-12 d-flex justify-content-center align-items-center">
          <h3>Video Tutorial:</h3>
          <div className="video-container">
            <ReactPlayer
              url={data.link}
              controls // Menampilkan tombol play dan kontrol video
              width="70%" // Mengisi lebar video 100% dari container
              style={{ margin: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailOlahBahan;
