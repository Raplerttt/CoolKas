// user/userService.js

const penyimpananModelModel = require("./penyimpananModel");

async function getJenisBahan(userId) {
  return await penyimpananModelModel.getJenisBahan(userId);
}
async function createBahan(bahan) {
  const bahanId = await penyimpananModelModel.createBahan(bahan);
  return { bahanId };
}
async function createAktivitas(aktivitas) {
  const aktivitasId = await penyimpananModelModel.createAktivitas(aktivitas);
  return { aktivitasId };
}
async function getLogAktivitas(userId) {
  return await penyimpananModelModel.getLogAktivitas(userId);
}
async function getBahan(userId, jenisId) {
  return await penyimpananModelModel.getBahan(userId, jenisId);
}
async function deleteBahan(bahanId) {
  return await penyimpananModelModel.deleteBahan(bahanId);
}
async function updateBahan(bahanId, bahan) {
  return await penyimpananModelModel.updateBahan(bahanId, bahan);
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
