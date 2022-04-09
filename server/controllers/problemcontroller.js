const Problem = require('../models/Problem');
const BigPromise = require('../middleware/bigPromise');
const customError = require('../utils/customErrors');
const cloudinary = require('cloudinary');
const cookieToken = require('../utils/cookieToken')

exports.create = BigPromise(async (req, res, next ) => {
let result ;
    if(req.files){
        let file = req.files.photo
         result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
            folder: "problemimg",
            width: 150,
            crop: "scale"
        })
    }

    const {title, address, statement } = req.body;
    if(!title || !address || !statement ) {
        return next(new customError("title address statement is required", 400))
    } 

    // creating problem
    const problem = await Problem.create({
        title, 
        address,
        statement,
        photo: {
            id: result.public_id,
            secure_url: result.secure_url,
        }
    })
    
    res.send(problem)

})
