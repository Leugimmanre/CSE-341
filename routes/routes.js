const express = require('express');
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


const app = express();

app.use('/doc-swagger', swaggerUi.serve);

// VERBS HTTP
app.get("/", home);

app.get("/students", students);

app.get("/student/:id", singleStudent);

app.post("/new-student", createStudent);

app.put("/update-student/:id", updateStudent);

app.delete("/delete-student/:id", deleteStudent);

//API Documentation
app.get('/doc-swagger', swaggerUi.setup(swaggerDocument));


module.exports = app;



