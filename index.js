const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./src/Routes/apiRoutes');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());

// Gunakan rute API
app.use('/api', apiRoutes);

// Server Listening
app.listen(port, () => {
  console.log(`Server sedang berjalan di port ${port}`);
});
