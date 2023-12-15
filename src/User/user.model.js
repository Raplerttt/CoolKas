// user.model.js

const mysql = require("mysql2/promise");
const dbConfig = require("../../config");
const pool = mysql.createPool(dbConfig);

const userModel = {
  getUserById: async (Id) => {
    try {
      const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [Id]);
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

  getUserInfo: async (userId) => {
    try {
      const query =
        "SELECT nama_lengkap AS namaLengkap, email, username FROM users WHERE username = ?";
      const [rows] = await pool.query(query, [userId]);
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
};

module.exports = userModel;
