import { useState, useEffect } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import "../../style/recipe.css";
import { useNavigate } from "react-router-dom";
import { getMealListRandom } from "../../utils/api";
function CarouselRecipe() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Fungsi untuk mendapatkan data meals
    const fetchMeals = async () => {
      try {
        const result = await getMealListRandom();
        setMeals(result);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    // Panggil fungsi fetchMeals saat komponen dimuat pertama kali
    fetchMeals();
  }, []);

  return (
    <div className="carousel-container-recipedash">
      <ReactSimplyCarousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none",
          },
        }}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "#c19875",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "#c19875",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 1280,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {meals.map((meal, index) => (
          <div className="gap-card" key={index}>
            <div className="card carousel-hover">
              <img
                src={meal.strMealThumb}
                className="card-img-top"
                alt="food_image"
              />
              <div id="card-content" className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p className="card-text">Kategori</p>
                      </td>
                      <td>
                        <p className="card-text">:</p>
                      </td>
                      <td>
                        <p className="card-text">{meal.strCategory}</p>
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
                        <p className="card-text">{meal.strArea}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div id="seeMore" className="d-flex justify-content-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/modulResep/${meal.idMeal}`)}
                  >
                    Lihat
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default CarouselRecipe;
