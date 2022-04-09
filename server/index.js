const app = require('./app')
require('dotenv').config();
const connectwithdb = require('./config/db')
const cloudinary = require('cloudinary')

// connect with database
connectwithdb()

// cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// creating basic server 
app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port:${process.env.PORT}`);
})