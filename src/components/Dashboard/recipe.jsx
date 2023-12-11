import React from "react";
import CarouselRecipe from "./recipeCarousel";
import "../../style/recipe.css";

function Recipe() {
  return (
    <div className="recipe" tabIndex="0">
      <h1>Resep</h1>
      <p>Temukan ragam resep makanan lezat dan inspiratif di sini!</p>

      <div className="carousel-container-recipedash">
        <CarouselRecipe />
      </div>

      <div id="seeCategory" className="text-center">
        <a className="btn btn-primary btn-lg" href="/modulResep" role="button">
          Lihat Semua Kategori
        </a>
      </div>
    </div>
  );
}

export default Recipe;
