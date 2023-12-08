const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./src/Routes/apiRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Use API routes
app.use('/api', apiRoutes);

// Server Listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
