import React, { useEffect, useState } from "react";
import Navbar from "../components/NavbarComponent";
import { getMealList } from "../utils/api";
import { Footer, AppFooter } from "../components/Footer";
import "../style/reseppage.css";
import { useNavigate } from "react-router-dom";
function ModulResepPage() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("Side");
  const [meals, setMeals] = useState([]);
  const categories = [
    "Beef",
    "Breakfast",
    "Chicken",
    "Dessert",
    "Pasta",
    "Seafood",
    "Side",
    "Starter",
    "Vegetarian",
  ];

  useEffect(() => {
    // Fungsi untuk mendapatkan data meals
    const fetchMeals = async () => {
      try {
        const result = await getMealList(category);
        setMeals(result);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    // Panggil fungsi fetchMeals saat komponen dimuat pertama kali
    fetchMeals();
  }, [category]);

  const handleCategory = (e, category) => {
    e.preventDefault();
    setCategory(category);
  };

  const handleDetail = (meal) => {
    // Menggunakan object state untuk menyertakan data meal.idMeal
    navigate(`/modulResep/detail`, { state: { mealId: meal.idMeal } });
  };

  const MealList = () => {
    if (!meals) {
      return null; // Tidak melakukan map jika meals adalah null atau undefined
    }

    return meals.map((meal, i) => {
      return (
        <div className="col" key={i}>
          <div className="card">
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
                      <p className="card-text">{category}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div id="seeMore" className="d-flex justify-content-center">
                <button
                  className="btn btn-primary"
                  onClick={() => handleDetail(meal)}
                >
                  Lihat
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-center">Modul Resep</h1>
        <table id="subjudul-dan-kategori" className="table">
          <tbody>
            <tr>
              <td>
                <p className="subjudul">Makanan {category}</p>
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
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={(e) => handleCategory(e, category)}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <!-- Card --> */}
        <div id="card" className="row row-cols-1 row-cols-md-3 g-4 ">
          <MealList />
        </div>
      </div>
      <Footer />
      <AppFooter />
    </div>
  );
}

export default ModulResepPage;
