const express = require("express");
const router = express.Router();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const validation = require('../middleware/joiValidation.js')
const registerSchema = require('../models/registerStudents.js');
// Init lesson 7
const passport = require('passport');
const { isAuthenticated } = require("../middleware/authenticate");
// End lesson 7

const {
  getStudents,
  GetSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  sessionGitHub,
  passportGitHub
} = require("../controllers/studentController.js");

router.use("/doc-swagger", swaggerUi.serve);

// HTTP methods
router
    // Init lesson 7 Outh
    .get('/', sessionGitHub)
    .get('/github/callback', passport.authenticate('github', {failureRedirect: '/api-docs', session: false}), passportGitHub)
    // Init lesson 7 Outh
    .get("/students", isAuthenticated, getStudents)
    .get("/student/:id", isAuthenticated, GetSingleStudent)
    .post("/new-student", isAuthenticated, validation(registerSchema), createStudent)
    .put("/update-student/:id", isAuthenticated, validation(registerSchema), updateStudent)
    .delete("/delete-student/:id", isAuthenticated, deleteStudent)
    //API Documentation
    .get("/doc-swagger", swaggerUi.setup(swaggerDocument))

    // Init lesson 7 Outh
    .get('/login', passport.authenticate('github'), (request, response) => {})

    .get('/logout', function(request, response, next) {
      // console.log(request)
      request.session.destroy();
        // request.logout(function(err) {
        //   if (err) { return next(err); }
        //   response.redirect('/');
        // });
        response.redirect('/')
      });

module.exports = router;