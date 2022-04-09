require('dotenv').config();
const express = require('express')
const app = express();
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const fileupload = require('express-fileupload')

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// cookies and file middleware
app.use(cookieParser());
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}));

// // tempchecck
app.set("view engine", "ejs")

// morgan middleware
app.use(morgan('tiny'))

// import all the routes here
const home = require('./routes/home')
const user = require('./routes/userRoutes')
const problem = require('./routes/problemRoutes')

// router middleware
app.use('/api/v1', home )
app.use('/api/v1', user )
app.use('/api/v1', problem)

app.get('/signuptest', (req, res)=>{
    res.render('signuptest')
})
// export app
module.exports = app;