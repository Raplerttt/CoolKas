/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../../style/olahLimbah.css";

function OlahLimbah() {
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
                className="card-img-top"
                alt="Image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Malesuada at maecenas
                  imperdiet scelerisque mattis. Mauris etiam auctor blandit
                  massa vitae magnis enim non dui.
                </p>
                <p className="card-text small">April 03, 2022</p>
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
                      Lorem ipsum dolor sit amet consectetur.
                    </h5>
                    <p className="card-text second">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text small">April 03, 2022</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 m-0">
                  <img
                    src="./assets/olah-limbah2.png"
                    className="card-img object-fit-fill"
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
                      Lorem ipsum dolor sit amet consectetur.
                    </h5>
                    <p className="card-text second">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text small">April 03, 2022</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 m-0">
                  <img
                    src="./assets/olah-limbah2.png"
                    className="card-img object-fit-fill"
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
                      Lorem ipsum dolor sit amet consectetur.
                    </h5>
                    <p className="card-text second">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text small">April 03, 2022</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 m-0">
                  <img
                    src="./assets/olah-limbah2.png"
                    className="card-img object-fit-fill"
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
