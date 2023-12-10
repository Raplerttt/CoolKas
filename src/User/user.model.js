// user/userModel.js

const mysql = require('mysql2/promise');
const dbConfig = require('../../config');

const pool = mysql.createPool(dbConfig);

async function createUser(user) {
  const { nama_lengkap, email, username, password, } = user;
  const [result] = await pool.execute(
    'INSERT INTO users (nama_lengkap, email, username, password) VALUES (?, ?, ?, ?)',
    [nama_lengkap, email, username, password]
  );
  return result.insertId;
}

async function getUserByUsername(username) {
  const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
  return rows.length > 0 ? rows[0] : null;
}

async function updateUser(userId, updatedUser) {
  const { nama_lengkap, email, username, password, photo } = updatedUser;
  const [result] = await pool.execute(
    'UPDATE users SET nama_lengkap=?, email=?, username=?, password=?, photo=? WHERE id=?',
    [nama_lengkap, email, username, password, photo, userId]
  );
  return result.affectedRows > 0;
}

module.exports = {
  createUser,
  getUserByUsername,
  updateUser,
};
