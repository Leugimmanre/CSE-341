const express = require('express');
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('../swagger.json');

const {
    home,
    students,
    singleStudent,
    createStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/controllers.js");

router.use('/doc-swagger', swaggerUi.serve);

// HTTP methods
router.get("/", home);
router.get("/students", students);
router.get("/student/:id", singleStudent);
router.post("/new-student", createStudent);
router.put("/update-student/:id", updateStudent);
router.delete("/delete-student/:id", deleteStudent);
//API Documentation
router.get('/doc-swagger', swaggerUi.setup(swaggerDocument));

module.exports = router;