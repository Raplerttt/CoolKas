const mysql = require("mysql2/promise");
const dbConfig = require("../../config");
const pool = mysql.createPool(dbConfig);

const userModel = {
  getUserByUsername: async (username) => {
    try {
      const [rows] = await pool.query(
        "SELECT * FROM users WHERE username = ?",
        [username]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  addUser: async (userData) => {
    const { nama_lengkap, email, username, password } = userData;
    try {
      const query =
        "INSERT INTO users (nama_lengkap, email, username, password) VALUES (?, ?, ?, ?)";
      const [result] = await pool.query(query, [
        nama_lengkap,
        email,
        username,
        password,
      ]);
      return result;
    } catch (error) {
      throw error;
    }
  },

  checkUsername: async (username) => {
    try {
      const [rows] = await pool.query(
        "SELECT * FROM users WHERE username = ?",
        [username]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  checkEmail: async (email) => {
    try {
      const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
        email,
      ]);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getUserInfo: async (username) => {
    try {
      const query =
        "SELECT id, nama_lengkap AS namaLengkap, email, username FROM users WHERE username = ?";
      const [rows] = await pool.query(query, [username]);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  updateUserInfo: async (userData) => {
    const { namaLengkap, email, newPassword, username } = userData;
    try {
      const query =
        "UPDATE users SET nama_lengkap = ?, email = ?, password = ? WHERE username = ?";
      const [result] = await pool.query(query, [
        namaLengkap,
        email,
        newPassword,
        username,
      ]);
      return result;
    } catch (error) {
      throw error;
    }
  },

  checkDatabaseConnection: async () => {
    try {
      // Coba melakukan query sederhana ke database untuk mengonfirmasi koneksi
      const [rows] = await pool.query('SELECT 1');
      return rows;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = userModel;
