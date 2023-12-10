// user/userController.js

const express = require('express');
const userService = require('./user.service');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { nama_lengkap, email, username, password, photo } = req.body;

    // Basic input validation
    if (!nama_lengkap || !email || !username || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const user = { nama_lengkap, email, username, password, photo };
    const result = await userService.registerUser(user);

    res.status(201).json({ userId: result.userId, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/all', async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/delete/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Basic input validation
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const result = await userService.deleteUser(userId);

    if (result.success) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/update/:userId', async (req, res) => {
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

router.get('/get/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Basic input validation
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const user = await userService.getUserById(userId);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
