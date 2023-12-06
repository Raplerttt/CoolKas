/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../../style/recipe.css";

function Recipe() {
  return (
    <div class="recipe" tabindex="0">
      <h1>Resep</h1>
      <p>Temukan ragam resep makanan lezat dan inspiratif di sini!</p>
      <div id="carouselExampleControls" class="carousel slide">
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <div class="carousel-inner">
          <div class="carousel-item active" tabindex="0">
            <div class="card">
              <div class="image-wrapper">
                <img
                  src="./assets/sushi-api.jpg"
                  class="card-img-top img-fluid"
                  alt="Image"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Resep Nusantara</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="text-center">
                  <a href="#" class="btn btn-primary">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" tabindex="0">
            <div class="card">
              <img
                src="./assets/sushi-api.jpg"
                class="card-img-top img-fluid"
                alt="Image"
              />
              <div class="card-body">
                <h5 class="card-title">Resep Italia</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="text-center">
                  <a href="#" class="btn btn-primary">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" tabindex="0">
            <div class="card">
              <img
                src="./assets/sushi-api.jpg"
                class="card-img-top img-fluid"
                alt="Image"
              />
              <div class="card-body">
                <h5 class="card-title">Resep Western</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="text-center">
                  <a href="#" class="btn btn-primary">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <img
                src="./assets/sushi-api.jpg"
                class="card-img-top img-fluid"
                alt="Image"
              />
              <div class="card-body">
                <h5 class="card-title">Resep Asian</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="text-center">
                  <a href="#" class="btn btn-primary">
                    Lihat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="seeCategory" class="text-center">
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Lihat Kategori
        </a>
      </div>
    </div>
  );
}

export default Recipe;
