const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('./user.model');

const userService = {
  loginUser: async (username, password) => {
    try {
      const result = await userModel.getUserByUsername(username);

      if (result.length > 0) {
        const user = result[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
          const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET || 'default_secret_key', {
            expiresIn: '1h',
          });

          return { success: true, message: 'Login successful', token };
        } else {
          return { success: false, message: 'Authentication failed. Password incorrect.' };
        }
      } else {
        return { success: false, message: 'Authentication failed. User not found.' };
      }
    } catch (error) {
      throw error;
    }
  },

  registerUser: async (userData) => {
    const { nama_lengkap, email, username, password } = userData;

    try {
      const usernameResult = await userModel.checkUsername(username);

      if (usernameResult.length > 0) {
        return { success: false, message: 'Registration failed. Username is already taken.' };
      }

      const emailResult = await userModel.checkEmail(email);

      if (emailResult.length > 0) {
        return { success: false, message: 'Registration failed. Email is already taken.' };
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const addUserResult = await userModel.addUser({ nama_lengkap, email, username, password: hashedPassword });

      if (addUserResult.affectedRows > 0) {
        return { success: true, message: 'Registration successful' };
      } else {
        return { success: false, message: 'Registration failed' };
      }
    } catch (error) {
      throw error;
    }
  },

  getUserInfo: async (username) => {
    try {
      const result = await userModel.getUserInfo(username);
      return result.length > 0 ? result[0] : null;
    } catch (error) {
      throw error;
    }
  },

  updateUserInfo: async (userData) => {
    const { namaLengkap, email, newPassword, username } = userData;
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    try {
      const updateResult = await userModel.updateUserInfo({ namaLengkap, email, newPassword: hashedNewPassword, username });

      if (updateResult.affectedRows > 0) {
        return { success: true, message: 'User information updated successfully' };
      } else {
        return { success: false, message: 'Failed to update user information' };
      }
    } catch (error) {
      throw error;
    }
  },
};

module.exports = userService;
