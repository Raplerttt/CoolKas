/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "../components/navbarComponent";
import "../style/reseppage.css";
import { Footer, AppFooter } from "../components/footer";
function ModulResepPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center">Modul Resep</h1>
        <table id="subjudul-dan-kategori" className="table">
          <tr>
            <td>
              <p className="subjudul">Makanan Side</p>
            </td>
            <td>
              <div id="DropdownCategory" className="dropdown">
                <p className="kategori">Kategori:</p>
                <button
                  id="dropdown-btn"
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pilih
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      Turkish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Indonesia
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Western
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </table>

        {/* <!-- Card --> */}
        <div id="card" className="row row-cols-1 row-cols-md-3 g-4 ">
          <div className="col">
            <div className="card ">
              <img
                src="../assets/sushi-api.jpg"
                className="card-img-top"
                alt="food_image"
              />
              <div id="card-content" className="card-body">
                <h5 className="card-title">Corba</h5>
                <table>
                  <tr>
                    <td>
                      <p className="card-text">Kategori</p>
                    </td>
                    <td>
                      <p className="card-text">:</p>
                    </td>
                    <td>
                      <p className="card-text">Side</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="card-text">Asal</p>
                    </td>
                    <td>
                      <p className="card-text">:</p>
                    </td>
                    <td>
                      <p className="card-text">Turkish</p>
                    </td>
                  </tr>
                </table>
                <div id="seeMore" className="d-flex justify-content-center">
                  <a
                    className="btn btn-primary"
                    href="/modulResep/1"
                    role="button"
                  >
                    Lihat
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../assets/sushi-api.jpg"
                className="card-img-top"
                alt="food_image"
              />
              <div id="card-content" className="card-body">
                <h5 className="card-title">Corba</h5>
                <table>
                  <tr>
                    <td>
                      <p className="card-text">Kategori</p>
                    </td>
                    <td>
                      <p className="card-text">:</p>
                    </td>
                    <td>
                      <p className="card-text">Side</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="card-text">Asal</p>
                    </td>
                    <td>
                      <p className="card-text">:</p>
                    </td>
                    <td>
                      <p className="card-text">Turkish</p>
                    </td>
                  </tr>
                </table>
                <div id="seeMore" className="d-flex justify-content-center">
                  <a
                    className="btn btn-primary"
                    href="/modulResep/1"
                    role="button"
                  >
                    Lihat
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../assets/sushi-api.jpg"
                className="card-img-top"
                alt="food_image"
              />
              <div id="card-content" className="card-body">
                <h5 className="card-title">Corba</h5>
                <table>
                  <tr>
                    <td>
                      <p className="card-text">Kategori</p>
                    </td>
                    <td>
                      <p className="card-text">:</p>
                    </td>
                    <td>
                      <p className="card-text">Side</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="card-text">Asal</p>
                    </td>
                    <td>
                      <p className="card-text">:</p>
                    </td>
                    <td>
                      <p className="card-text">Turkish</p>
                    </td>
                  </tr>
                </table>
                <div id="seeMore" className="d-flex justify-content-center">
                  <a
                    className="btn btn-primary"
                    href="/modulResep/1"
                    role="button"
                  >
                    Lihat
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../assets/sushi-api.jpg"
                className="card-img-top"
                alt="food_image"
              />
              <div id="card-content" className="card-body">
                <h5 className="card-title">Corba</h5>
                <table>
                  <tr>
                    <td>
                      <p className="card-text">Kategori</p>
                    </td>
                    <td>
                      <p className="card-text">:</p>
                    </td>
                    <td>
                      <p className="card-text">Side</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="card-text">Asal</p>
                    </td>
                    <td>
                      <p className="card-text">:</p>
                    </td>
                    <td>
                      <p className="card-text">Turkish</p>
                    </td>
                  </tr>
                </table>
                <div id="seeMore" className="d-flex justify-content-center">
                  <a
                    className="btn btn-primary"
                    href="/modulResep/1"
                    role="button"
                  >
                    Lihat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <AppFooter />
    </div>
  );
}

export default ModulResepPage;
