/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { getData } from "../utils/data";
import ReactPlayer from "react-player/youtube";
import Navbar from "../components/navbarComponent";
import { useParams } from "react-router-dom";
import { Footer, AppFooter } from "../components/footer";
import '../style/detailresep.css';

function DetailResepPage() {
  const { id } = useParams();
  const moduls = getData();
  const idAsNumber = parseInt(id, 10);
  const data = moduls.find((modul) => modul.id === idAsNumber);

  return (
    <div>
      <Navbar />
      <div className="container container-resep">
        <h1 className="text-center page-title">Modul Resep</h1>
      </div>
      <div class="detail-recipe">
        <div class="detail-recipe-brief">
          <div class="column">
            <img
              src="../assets/corba-api.jpg"
              class="img-fluid mx-auto d-block"
              alt="Food Image"
            />
          </div>
          <div class="column2-detailresep">
            <h1>Corba</h1>
            <table>
              <tr>
                <td>
                  <p>Kategori</p>
                </td>
                <td class="colon">
                  <p>:</p>
                </td>
                <td class="kategori-resep">
                  <p>Side</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Asal</p>
                </td>
                <td class="colon">
                  <p>:</p>
                </td>
                <td class="asal-resep">
                  <p>Turkish</p>
                </td>
              </tr>
            </table>
            <div class="categories">
              <div class="container-ctgry">
                <p class="category">Side</p>
              </div>
              <div class="container-ctgry">
                <p class="category">Food</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* resep & bahan */}
      <div className="container">
        <div className="row">
          <div className="col-md-8  mx-auto mb-3 mt-5">
            <div className="card rounded-3 cara-olah-bahan">
              <div className="card-body">
                <h3 className="card-title text-center">Cara Membuat:</h3>
                <p className="card-text">{data.cara}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mx-auto mt-5">
            <div className="card rounded-3 jenis-olah-bahan">
              <div className="card-body">
                <h3 className="card-title text-center">Bahan-bahan:</h3>
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
      <Footer />
      <AppFooter />
    </div>
  );
}

export default DetailResepPage;
