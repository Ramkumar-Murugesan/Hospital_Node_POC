var express = require('express');
var router = express.Router();
var usersRouter = require("./user/user.router");
var patientRouter = require("./patient/patient.router");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// other routes
router.use("/users", usersRouter);
router.use("/patient", patientRouter);

module.exports = router;
