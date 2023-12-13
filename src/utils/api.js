import axios from "axios";

const baseUrlMealDB = process.env.REACT_APP_BASEURL_MEALDB;
const baseUrlDB = process.env.REACT_APP_BASEURL_DB;

export const getMealListRandom = async () => {
  const list = await axios.get(`${baseUrlMealDB}/search.php?s=`);

  // console.log(list.data.meals);
  return list.data.meals;
};
export const getMealList = async (category) => {
  const list = await axios.get(`${baseUrlMealDB}/filter.php?c=${category}`);

  // console.log(list.data.meals);
  return list.data.meals;
};

export const getDetailMeal = async (id) => {
  const meal = await axios.get(`${baseUrlMealDB}/lookup.php?i=${id}`);

  console.log(meal.data.meals);
  return meal.data.meals[0];
};

export const login = async (username, password) => {
  const response = await axios.post(`${baseUrlDB}/login`, {
    username,
    password,
  });
  return response.data;
};
export const register = async (nama_lengkap, username, email, password) => {
  const response = await axios.post(`${baseUrlDB}/register`, {
    nama_lengkap,
    username,
    email,
    password,
    // Tambahkan field lainnya sesuai kebutuhan
  });
  return response.data;
};
export const getModuls = async () => {
  const moduls = await axios.get(`${baseUrlDB}/moduls`);
  // console.log(moduls);
  return moduls.data;
};
export const getDetailModul = async (id) => {
  const modul = await axios.get(`${baseUrlDB}/moduls/${id}`);
  return modul.data;
};
