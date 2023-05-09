const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require("./config/db.js");
const studentsRoutes = require('./routes/studentsRoutes.js');

const app = express();
dotenv.config();
connectDB();

app
  .use(express.json())
  .use(cors())
  .use("/api", studentsRoutes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});