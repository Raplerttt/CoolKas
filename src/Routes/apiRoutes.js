const express = require('express');
const router = express.Router();
const {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
} = require('../Controllers/userControllers');
const { getUsersFromDatabase } = require('../Models/userModels');

router.post('/users', createUser);
router.get('/users', async (req, res) => {
  try {
    const users = await getUsersFromDatabase();
    res.json(users);
  } catch (error) {
    res.status(500).send('Terjadi kesalahan saat mengambil data pengguna dari database');
  }
});

router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
