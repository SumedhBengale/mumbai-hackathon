const mongoose = require('mongoose')

const problemSchema = new mongoose.Schema({ 
    userId:{
        type:String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true,
    },
    statement:{
        type: String,
        required: true,
    },
    upvotes:{
        type: Array,
        default: []
    },
    downvotes:{
        type: Array,
        default: []
    },
    img:{
        photo: {
            id:{
                type: String,
                // required: true
            },
            secure_url:{
                type: String,
                // required: true
            },        
        },
    },
    // road sanitation general corruption
    category:{
        type: Number,
        enum: [1, 2, 3, 4]
    },
 },
 
 {timestamps: true}

 );

module.exports = mongoose.model('Problem', problemSchema)
