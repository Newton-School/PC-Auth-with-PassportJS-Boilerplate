// Requiring Modules
const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const app = express();
const passport = require('passport');
const session = require('express-session');
const UserDetails = require('./userDetails');
const routes = require('./routes/router');
const LocalStrategy = require('passport-local').Strategy;
require('dotenv').config();



// Set up view engine and layout
app.use(expressLayouts);
app.set('layout', './layout/main');
app.set('view engine', 'ejs');

// Set up session - ENTER CODE 

app.use(express.urlencoded({ extended: false }));

// Set up Passport - ENTER CODE


app.use(routes);

// Set up Express server
if (!module.parent)
    app.listen(3000, () => {
        console.log(`Listening on port 3000`);
    });

// UserDetails.register({ username: 'nemo', active: false }, '123'); , this user is already present in database

module.exports = app