/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../../style/olahLimbah.css";

function OlahLimbah() {
  return (
    <div class="olah-limbah">
      <div class="container">
        <div class="title-container" tabindex="0">
          <h1>Modul Olah Limbah</h1>
          <p>Jelajahi dan pelajari cara mengolah limbah makananmu!</p>
        </div>
        <div class="container-card">
          <div class="column-card1" tabindex="0">
            <div class="card">
              <img
                src="./assets/olah-limbah.png"
                class="card-img-top"
                alt="Image"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Lorem ipsum dolor sit amet consectetur.
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur. Malesuada at maecenas
                  imperdiet scelerisque mattis. Mauris etiam auctor blandit
                  massa vitae magnis enim non dui.
                </p>
                <p class="card-text small">April 03, 2022</p>
              </div>
            </div>
          </div>
          <div class="column-card2">
            {/* card verti 1 */}
            <div class="card mb-3" tabindex="0">
              <div class="row g-0">
                <div class="col-6 col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">
                      Lorem ipsum dolor sit amet consectetur.
                    </h5>
                    <p class="card-text second">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text small">April 03, 2022</p>
                  </div>
                </div>
                <div class="col-6 col-md-5 m-0">
                  <img
                    src="./assets/olah-limbah2.png"
                    class="card-img object-fit-fill"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
            {/* card verti 2 */}
            <div class="card mb-3" tabindex="0">
              <div class="row g-0">
                <div class="col-6 col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">
                      Lorem ipsum dolor sit amet consectetur.
                    </h5>
                    <p class="card-text second">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text small">April 03, 2022</p>
                  </div>
                </div>
                <div class="col-6 col-md-5 m-0">
                  <img
                    src="./assets/olah-limbah2.png"
                    class="card-img object-fit-fill"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
            {/* <!-- card verti 3 --> */}
            <div class="card mb-3" tabindex="0">
              <div class="row g-0">
                <div class="col-6 col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">
                      Lorem ipsum dolor sit amet consectetur.
                    </h5>
                    <p class="card-text second">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text small">April 03, 2022</p>
                  </div>
                </div>
                <div class="col-6 col-md-5 m-0">
                  <img
                    src="./assets/olah-limbah2.png"
                    class="card-img object-fit-fill"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="seeOlah" class="text-center">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Lihat
          </a>
        </div>
      </div>
    </div>
  );
}

export default OlahLimbah;
