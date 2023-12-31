import axios from "axios";

const baseUrlMealDB = "https://www.themealdb.com/api/json/v1/1";
const baseUrlDB = "https://api.mycoolkas.my.id";

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

  // console.log(meal.data.meals);
  return meal.data.meals[0];
};

export const login = async (username, password) => {
  const response = await axios.post(`${baseUrlDB}/login`, {
    username,
    password,
  });
  return response;
};

export const register = async (nama_lengkap, username, email, password) => {
  const response = await axios.post(`${baseUrlDB}/register`, {
    nama_lengkap,
    username,
    email,
    password,
    // Tambahkan field lainnya sesuai kebutuhan
  });
  return response;
};

export const getModuls = async () => {
  const moduls = await axios.get(`${baseUrlDB}/modul/moduls`);
  // console.log(moduls.data);
  return moduls.data;
};
export const getDetailModul = async (id) => {
  const modul = await axios.get(`${baseUrlDB}/modul/moduls/${id}`);
  return modul.data;
};

export const getJenisBahan = async (userId) => {
  const listJenis = await axios.get(
    `${baseUrlDB}/penyimpanan/jenisBahan/${userId}`
  );
  // console.log(listJenis.data);
  return listJenis.data;
};

export const belanja = async (
  id_jenis_bahan,
  id_user,
  jumlah,
  jumlah_bahan,
  tanggal_expired,
  satuan,
  lokasi_penyimpanan,
  nama_bahan,
  keterangan_aktivitas,
  tanggal_aktivitas
) => {
  const response = await axios.post(`${baseUrlDB}/penyimpanan/belanja`, {
    id_jenis_bahan,
    id_user,
    jumlah,
    jumlah_bahan,
    tanggal_expired,
    satuan,
    lokasi_penyimpanan,
    nama_bahan,
    keterangan_aktivitas,
    tanggal_aktivitas,
  });
  return response.data;
};

export const getLogAktivitas = async (userId) => {
  const aktivitas = await axios.get(
    `${baseUrlDB}/penyimpanan/logAktivitas/${userId}`
  );
  // console.log(aktivitas.data);
  return aktivitas.data;
};
export const getBahan = async (jenisId, userId) => {
  const bahan = await axios.get(
    `${baseUrlDB}/penyimpanan/listBahan/${jenisId}/${userId}`
  );
  // console.log(bahan.data);
  return bahan.data;
};

export const deleteBahan = async (bahanId) => {
  const response = await axios.delete(
    `${baseUrlDB}/penyimpanan/deleteBahan/${bahanId}`
  );
  // console.log(aktivitas.data);
  return response.data;
};

export const kelola = async (
  bahanId,
  id_jenis_bahan,
  id_user,
  jumlah,
  jumlah_bahan,
  tanggal_expired,
  satuan,
  lokasi_penyimpanan,
  nama_bahan,
  keterangan_aktivitas,
  tanggal_aktivitas
) => {
  const response = await axios.put(
    `${baseUrlDB}/penyimpanan/kelola/${bahanId}`,
    {
      id_jenis_bahan,
      id_user,
      jumlah,
      jumlah_bahan,
      tanggal_expired,
      satuan,
      lokasi_penyimpanan,
      nama_bahan,
      keterangan_aktivitas,
      tanggal_aktivitas,
    }
  );
  return response.data;
};
