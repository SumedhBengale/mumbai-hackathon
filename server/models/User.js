const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'please enter a name'],
        maxlength: [40, 'name should be less than 40 characters'],  
    },
    email:{
        type: String,
        required:[true, 'please provide an email'],
        validate:[validator.isEmail, 'please provide valid email-Id'],
    },
    password:{
        type: String,
        required: [true,'please provide an password'],
        minlength: [6, "password atlease have 6 characters"],
        select: false
    },
    profilePhoto:{
        photo: {
            id:{
                type: String,
                required: true
            },
            secure_url:{
                type: String,
                required: true
            },        
        },
    },
    role:{
        type: String,
        default: "user",
    },
    posts:{
        type: Array,
        default: []
    },
    forgotpasswordtoken:{
        type: String,
    },
    forgotpasswordexpiry:{
        type: Date
    },
    zone:{
        type: Number,
        enum: [1, 2, 3]
    },
    problems:{
        type: Array,
        default:[]
    }
},

{timestamps: true}

);


//encrypt password before save
userSchema.pre('save', async function (next) {
    if(!this.isModified("password")){
        return next() ;
    }
    this.password = await bcrypt.hash(this.password, 10)
});

//validating password
userSchema.methods.isValidatedPassword = async function(userSentPassword){
    return await bcrypt.compare(userSentPassword, this.password)
}

//creating and return jwt token
userSchema.methods.getJwtToken = function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET),{
        expiresIn: process.env.JWT_EXPIRY 
    }
}

//generating forgot password token (STRING)
userSchema.methods.getForgotPasswordToken = function () {
    //generating forgot password token 
    const forgotToken = crypto.randomBytes(20).toString("hex");

    //getting a hash - make sure you are getting hash to backend
    this.forgotPasswordToken = crypto.createHash("sh256").update(forgotToken).digest("hex");

    // time of token 
    this.forgotPasswordExpiry = Date.now() + 20 *60 * 1000;

    return forgotToken;
}




module.exports = mongoose.model('User', userSchema)
