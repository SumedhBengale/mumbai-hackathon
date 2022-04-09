const User = require('../models/User');
const BigPromise = require('../middleware/bigPromise');
const customError = require('../utils/customErrors');
const cloudinary = require('cloudinary');
const cookieToken = require('../utils/cookieToken')

exports.signup = BigPromise(async (req, res, next ) => {
let result ;
    if(req.files){
        let file = req.files.photo
         result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
            folder: "users",
            width: 150,
            crop: "scale"
        })
    }

    const {name, email, password } = req.body;
    if(!email || !name || !password ) {
        return next(new customError("name, email and password are required", 400))
    } 

    // creating user
    const user = await User.create({
        name, 
        email,
        password,
        photo: {
            id: result.public_id,
            secure_url: result.secure_url,
        }
    })
    
    res.send(user)

})

// sign in
exports.login = BigPromise(async (req, res, next) => {
    const {email , password } = req.body

    // check for email and password
    if(!email || !password){
        return next(new customError('please provide email and password', 400))
    }

    const user = await User.findOne({email}).select("+password")

    if(!user){
        return next(new customError('email or password does not exit', 400))
    }

    const isPasswordCorrect = await user.isValidatedPassword(password)

    if(!isPasswordCorrect){
        return next(new customError('email and password dores not match', 400))
    }

    cookieToken(user, res)

})

// update
exports.update = BigPromise( async( req, res, next) => {
    const newData ={
        name: req.body.name,
        email: req.body.email
    }
   const user = await User.findByIdAndUpdate( req.user.id, newData, {
       new: true,
       runValidators: true.valueOf,
       useFindAndModify: false
   })

   res.status(200).json(user)

})

// delete
exports.remove = BigPromise( async( req, res, next) => {
   
})
