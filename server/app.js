const express = require('express')
const app = express();
const home = require('./routes/home')
var morgan = require('morgan')

// // morgan middleware
app.use(morgan('tiny'))

// // regular middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// // cookies and file middleware
const cookieParser = require('cookie-parser')
const fileupload = require('express-fileupload')
app.use(cookieParser());
app.use(fileupload());

// importing all the routes
app.use('/api/v1', home)



module.exports = app;