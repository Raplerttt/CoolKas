import axios from "axios";

const baseUrlMealDB = process.env.REACT_APP_BASEURL_MEALDB;

export const getMealList = async (category) => {
  const list = await axios.get(`${baseUrlMealDB}/filter.php?c=${category}`);

  console.log(list.data.meals);
  return list.data.meals;
};

export const getDetailMeal = async (id) => {
  const meal = await axios.get(`${baseUrlMealDB}/lookup.php?i=${id}`);

  console.log(meal.data.meals);
  return meal.data.meals[0];
};
