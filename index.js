const express = require("express");
const cors = require("cors");
require('dotenv').config()
const bodyParser = require("body-parser");
const userRoutes = require("./src/User/user.controllers");
const modulRoutes = require("./src/Modul/modulControllers");
const penyimpananRoutes = require("./src/Penyimpanan/penyimpananControllers");

const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'https://mycoolkas.my.id',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
// middleware
app.use(bodyParser.json());
app.use("/", userRoutes);
app.use("/modul", modulRoutes);
app.use("/penyimpanan", penyimpananRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
