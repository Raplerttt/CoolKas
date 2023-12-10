const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/User/user.controllers');

const app = express();
const PORT = 3001;

// middleware
app.use(bodyParser.json());
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
