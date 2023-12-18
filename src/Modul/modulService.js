const mysql = require("mysql2/promise");
const dbConfig = require("../../config");
const pool = mysql.createPool(dbConfig);

async function getAllModuls() {
  const [rows] = await pool.execute("SELECT * FROM modul_olah_bahan");
  return rows;
}

async function getModulById(id) {
  const [rows] = await pool.execute(
    "SELECT * FROM modul_olah_bahan WHERE id = ?",
    [id]
  );
  return rows.length > 0 ? rows[0] : null;
}

module.exports = {
  getAllModuls,
  getModulById,
};
