const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET || 'default_secret_key', (err, decoded) => {
      if (err) {
        return res.status(401).json({ success: false, message: 'Unauthorized', error: err.message });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({ success: false, message: 'Unauthorized. Token not provided' });
  }
};

module.exports = checkToken;
