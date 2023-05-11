const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require("./config/db.js");
const studentsRoutes = require('./routes/studentsRoutes.js');
// Init lesson 7 Outh
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
// End lesson 7 Outh


const PORT = process.env.PORT || 4000;
const app = express();
dotenv.config();
connectDB();

app
  .use(session({
    secret: "secret",
    resave: false ,
    saveUninitialized: true
  }))
  .use(express.json())
  .use(cors())
  .use("/", studentsRoutes)
  // Init lesson 7 Outh
  // .use(bodyParser.json())
  // This is the basic express session({..}) initialization.
  .use(passport.initialize())
  // init passport on every route call.
  .use(passport.session())
  // allow passport to use "express-session".
  .use((require, response, next) => {
    response.setHeader("Access-Controll-Allow-Origin", "*");
    response.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Z-Key, Authorization"
    );
    response.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PUT, PATCH, OPTIONS, DELETE"
    );
    next();
  })
  .use(cors({ methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']}))
  .use(cors({ origin: '*'}))
  .use("/", require("./routes/studentsRoutes.js"));

  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret:  process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
    //User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(null, profile);
    //});
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

  // End lesson 7 Outh
  app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});