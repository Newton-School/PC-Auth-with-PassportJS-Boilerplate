const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');
const passport = require('passport');

//Write code for Routes below
//get request to / must render index.ejs
//get request to /login must render login.ejs
//get request to /secret must ensure login using connectEndureLogin and render secret.ejs
//get request to /logout must logout and redirect to / 
//post request to /login must redirect to /login on failed login and to /secret on successful login 


module.exports = router;
