const express = require('express');
const router = express.Router();
const {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
} = require('../Controllers/userControllers');

router.post('/users', createUser);
router.get('/users', readUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
