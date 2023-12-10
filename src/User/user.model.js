// user/userModel.js

const mysql = require('mysql2/promise');
const dbConfig = require('../../config');

const pool = mysql.createPool(dbConfig);

async function createUser(user) {
  const { nama_lengkap, email, username, password, photo } = user;
  const [result] = await pool.execute(
    'INSERT INTO users (nama_lengkap, email, username, password, photo) VALUES (?, ?, ?, ?, ?)',
    [nama_lengkap, email, username, password, photo]
  );
  return result.insertId;
}

async function getAllUsers() {
  const [rows] = await pool.execute('SELECT * FROM users');
  return rows;
}

async function getUserById(userId) {
  const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [userId]);
  return rows[0];
}

async function updateUser(userId, updatedUser) {
  const { nama_lengkap, email, username, password, photo } = updatedUser;
  const [result] = await pool.execute(
    'UPDATE users SET nama_lengkap = ?, email = ?, username = ?, password = ?, photo = ? WHERE id = ?',
    [nama_lengkap, email, username, password, photo, userId]
  );
  return result;
}

async function deleteUser(userId) {
  const [result] = await pool.execute('DELETE FROM users WHERE id = ?', [userId]);
  return result;
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
