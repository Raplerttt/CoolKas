/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Navbar from "../components/navbarComponent";
import { useLocation } from "react-router-dom";
import { Footer, AppFooter } from "../components/footer";
import "../style/detailresep.css";
import { getDetailMeal } from "../utils/api";

function DetailResepPage() {
  const location = useLocation();
  const { mealId } = location.state;
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const result = await getDetailMeal(mealId);
        setMeal(result);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    // Call the fetchMeals function when the component is first loaded
    fetchMeals();
  }, [mealId]);

  // Fungsi untuk mendapatkan bahan dan ukuran yang tidak null dan tidak kosong
  const getIngredients = (meal) => {
    const ingredients = [];

    // Filter hanya properti-properti yang dimulai dengan "strIngredient" atau "strMeasure"
    const ingredientEntries = Object.entries(meal).filter(
      ([key, value]) =>
        key.startsWith("strIngredient") && value && value.trim() !== ""
    );

    // Membuat array hasil dengan menggabungkan bahan dan ukurannya
    ingredientEntries.forEach(([key, ingredient]) => {
      const measureKey = `strMeasure${key.substr(13)}`;
      const measure = meal[measureKey];
      if (measure && measure.trim() !== "") {
        ingredients.push(`${measure} ${ingredient}`);
      }
    });

    return ingredients;
  };

  return (
    <div>
      <Navbar />
      <div className="container container-resep">
        <h1 className="text-center page-title">Modul Resep</h1>
      </div>
      <div className="detail-recipe">
        <div className=" detail-recipe-brief">
          <div className="column1-detailresep">
            <img
              src={meal.strMealThumb}
              className="img-fluid mx-auto d-block"
              alt={meal.strMeal}
            />
          </div>
          <div className="column2-detailresep">
            <h1>{meal.strMeal}</h1>
            <table>
              <tr>
                <td>
                  <p>Kategori</p>
                </td>
                <td className="colon">
                  <p>:</p>
                </td>
                <td className="kategori-resep">
                  <p>{meal.strCategory}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Asal</p>
                </td>
                <td className="colon">
                  <p>:</p>
                </td>
                <td className="asal-resep">
                  <p>{meal.strArea}</p>
                </td>
              </tr>
            </table>
            <div className="categories">
              {meal.strTags &&
                meal.strTags.split(",").map((tag, index) => (
                  <div className="container-ctgry" key={index}>
                    <p className="category">{tag.trim()}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* resep & bahan */}
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mb-3 mt-5">
            <div className="card rounded-3 cara-olah-bahan">
              <div className="card-body">
                <h3 className="card-title text-center">Cara Membuat:</h3>
                {meal.strInstructions && (
                  <ol className="list-group list-group-flush">
                    {meal.strInstructions
                      .split(". ")
                      .join(".\r\n\r\n")
                      .split("\r\n\r\n")
                      .map((step, index) => (
                        <li key={index}> {step}</li>
                      ))}
                  </ol>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-4 mx-auto mt-5">
            <div className="card rounded-3 jenis-olah-bahan">
              <div className="card-body">
                <h3 className="card-title text-center">Bahan-bahan:</h3>
                <ul className="bahan">
                  {getIngredients(meal).map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center mb-5">
        <div className="row col-md-12 d-flex justify-content-center align-items-center">
          <h3>Video Tutorial:</h3>
          <div className="video-container">
            <ReactPlayer
              url={meal.strYoutube}
              controls // Menampilkan tombol play dan kontrol video
              width="60%"
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
