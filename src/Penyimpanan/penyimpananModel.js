// user/userModel.js

const mysql = require("mysql2/promise");
const dbConfig = require("../../config");

const pool = mysql.createPool(dbConfig);

async function getJenisBahan(userId) {
  const [rows] = await pool.execute(
    "SELECT j.id, j.nama_jenis_bahan, COUNT(b.id) AS jumlah_bahan, SUM(CASE WHEN b.tanggal_expired <= CURRENT_DATE THEN 1 ELSE 0 END) AS jumlah_kadaluwarsa FROM jns_bahan_makanan j LEFT JOIN bahan_makanan b ON j.id = b.id_jenis_bahan AND b.id_user = ? GROUP BY j.id, j.nama_jenis_bahan",
    [userId]
  );
  return rows;
}
async function createBahan(bahan) {
  const {
    id_jenis_bahan,
    id_user,
    jumlah,
    tanggal_expired,
    satuan,
    lokasi_penyimpanan,
    nama_bahan,
  } = bahan;
  const [result] = await pool.execute(
    "INSERT INTO bahan_makanan ( id_jenis_bahan, id_user, jumlah, tanggal_expired,satuan,lokasi_penyimpanan,nama_bahan) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      id_jenis_bahan,
      id_user,
      jumlah,
      tanggal_expired,
      satuan,
      lokasi_penyimpanan,
      nama_bahan,
    ]
  );
  return result.insertId;
}
async function createAktivitas(aktivitas) {
  const {
    keterangan_aktivitas,
    jumlah_bahan,
    tanggal_aktivitas,
    id_user,
    id_bahan,
  } = aktivitas;
  const [result] = await pool.execute(
    "INSERT INTO aktivitas ( keterangan_aktivitas, jumlah_bahan, tanggal_aktivitas, id_user, id_bahan) VALUES (?, ?, ?, ?, ?)",
    [keterangan_aktivitas, jumlah_bahan, tanggal_aktivitas, id_user, id_bahan]
  );
  return result.insertId;
}

async function getLogAktivitas(userId) {
  const [rows] = await pool.execute(
    "SELECT a.*, jm.nama_jenis_bahan, b.nama_bahan, b.satuan FROM aktivitas a JOIN bahan_makanan b ON a.id_bahan = b.id JOIN jns_bahan_makanan jm ON b.id_jenis_bahan = jm.id WHERE a.id_user = ? ORDER BY a.tanggal_aktivitas DESC",
    [userId]
  );
  return rows;
}

async function getBahan(userId, jenisId) {
  const [rows] = await pool.execute(
    "SELECT a.*,b.id_modul FROM bahan_makanan a JOIN jns_bahan_makanan b ON b.id = a.id_jenis_bahan WHERE id_user = ? and id_jenis_bahan = ?",
    [userId, jenisId]
  );
  return rows;
}

async function deleteBahan(bahanId) {
  try {
    const result = await pool.execute("DELETE FROM bahan_makanan WHERE id=?", [
      bahanId,
    ]);
    const affectedRows = result[0] && result[0].affectedRows;
    if (affectedRows > 0) {
      return { success: true };
    } else {
      return { success: false, notFound: true };
    }
  } catch (error) {
    console.error(error);
    throw error; // lemparkan kesalahan untuk penanganan di tingkat yang lebih tinggi
  }
}

async function updateBahan(bahanId, bahan) {
  try {
    const {
      id_jenis_bahan,
      id_user,
      jumlah,
      tanggal_expired,
      satuan,
      lokasi_penyimpanan,
      nama_bahan,
    } = bahan;
    const result = await pool.execute(
      "UPDATE bahan_makanan SET id_jenis_bahan=?, id_user=?, jumlah=?, tanggal_expired=?, satuan=?, lokasi_penyimpanan=?, nama_bahan=? WHERE id=?",
      [
        id_jenis_bahan,
        id_user,
        jumlah,
        tanggal_expired,
        satuan,
        lokasi_penyimpanan,
        nama_bahan,
        bahanId,
      ]
    );
    const affectedRows = result[0] && result[0].affectedRows;
    if (affectedRows > 0) {
      return { success: true };
    } else {
      return { success: false, notFound: true };
    }
  } catch (error) {
    console.error(error);
    throw error; // lemparkan kesalahan untuk penanganan di tingkat yang lebih tinggi
  }
}

module.exports = {
  getJenisBahan,
  createBahan,
  createAktivitas,
  getLogAktivitas,
  getBahan,
  deleteBahan,
  updateBahan,
};
