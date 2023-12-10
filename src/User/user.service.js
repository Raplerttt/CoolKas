// user/userService.js

const userModel = require('./user.model');

async function registerUser(user) {
  const userId = await userModel.createUser(user);
  return { userId };
}

async function getAllUsers() {
  return await userModel.getAllUsers();
}

async function getUserById(userId) {
  return await userModel.getUserById(userId);
}

async function updateUser(userId, updatedUser) {
  const result = await userModel.updateUser(userId, updatedUser);
  return { success: result.affectedRows > 0 };
}

async function deleteUser(userId) {
  const result = await userModel.deleteUser(userId);
  return { success: result.affectedRows > 0 };
}

module.exports = {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};