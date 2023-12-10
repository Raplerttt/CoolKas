// user/userService.js

const userModel = require('./user.model');

async function registerUser(user) {
  const userId = await userModel.createUser(user);
  return { userId };
}

async function getAllUsers() {
  return await userModel.getAllUsers();
}

async function getUserByUsername(username) {
  return await userModel.getUserByUsername(username);
}

module.exports = {
  registerUser,
  getAllUsers,
  getUserByUsername,
};
