const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const {
  getHome,
  getStudents,
  GetSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController.js");

router.use("/doc-swagger", swaggerUi.serve);

// HTTP methods
router
    .get("/", getHome)
    .get("/students", getStudents)
    .get("/student/:id", GetSingleStudent)
    .post("/new-student", createStudent)
    .put("/update-student/:id", updateStudent)
    .delete("/delete-student/:id", deleteStudent)
    //API Documentation
    .get("/doc-swagger", swaggerUi.setup(swaggerDocument));

module.exports = router;
