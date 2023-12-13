// user/userService.js

const modulModel = require("./modulModel");

async function getAllModuls() {
  return await modulModel.getAllModuls();
}

async function getModulById(id) {
  return await modulModel.getModulById(id);
}

module.exports = {
  getAllModuls,
  getModulById,
};
