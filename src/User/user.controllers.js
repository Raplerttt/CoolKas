const express = require("express");
const userService = require("./user.service");
const checkToken = require("../middleware/checkToken");

const router = express.Router();

// Endpoint untuk login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  userService.loginUser(username, password)
    .then(result => res.json(result))
    .catch(err => {
      console.error('Error in login endpoint:', err);
      res.status(500).json({ success: false, message: 'Internal server error' });
    });
});

// Endpoint untuk registrasi
router.post('/register', async (req, res) => {
  const { nama_lengkap, email, username, password } = req.body;
  try {
    const result = await userService.registerUser({ nama_lengkap, email, username, password });
    res.json(result);
  } catch (err) {
    console.error('Error in register endpoint:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Endpoint untuk mendapatkan informasi akun
router.get('/akun', checkToken, (req, res) => {
  const { username } = req.decoded;
  userService.getUserInfo(username)
    .then(result => res.json(result))
    .catch(err => {
      console.error('Error in akun endpoint:', err);
      res.status(500).json({ success: false, message: 'Internal server error' });
    });
});

// Endpoint untuk mengedit informasi akun
router.put('/edit-akun', checkToken, async (req, res) => {
  try {
    const { username } = req.decoded;
    const { namaLengkap, email, newPassword } = req.body;
    const result = await userService.updateUserInfo({ namaLengkap, email, newPassword, username });
    res.json(result);
  } catch (error) {
    console.error('Error in edit-akun endpoint:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
