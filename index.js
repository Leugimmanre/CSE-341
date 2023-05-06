const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require("./config/db.js");
const studentsRoutes = require('./routes/studentsRoutes.js');

dotenv.config();
connectDB();

const PORT = process.env.PORT || 4000;
const app = express();

app
  .use(express.json())
  .use(cors())
  .use("/api", studentsRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
