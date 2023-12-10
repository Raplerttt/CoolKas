// user/userController.js

const express = require('express');
const userService = require('./user.service');

const router = express.Router();

// Endpoint untuk register
router.post('/register', async (req, res) => {
  try {
    const { nama_lengkap, email, username, password} = req.body;

    // Basic input validation
    if (!nama_lengkap || !email || !username || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const user = { nama_lengkap, email, username, password};
    const result = await userService.registerUser(user);

    res.status(201).json({ userId: result.userId, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint untuk login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Basic input validation
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    // Implementasi logika login sesuai kebutuhan Anda
    // Contoh sederhana: Cek apakah username dan password sesuai di database
    const user = await userService.getUserByUsername(username);

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Berhasil login
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint untuk edit (update) pengguna
router.put('/edit/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const { nama_lengkap, email, username, password, photo } = req.body;

    // Basic input validation
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Construct updated user object
    const updatedUser = {
      nama_lengkap,
      email,
      username,
      password,
      photo,
    };

    const result = await userService.updateUser(userId, updatedUser);

    if (result.success) {
      res.status(200).json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
