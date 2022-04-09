const mongoose = require('mongoose')

const problemSchema = new mongoose.Schema({ 
    title:{
        type: String,
        required:[true, 'please provide an problem title']
    },
    address:{
        type: String,
        required: [true, 'please provide an problem address'],
    },
    statement:{
        type: String,
        required: [true, 'please provide an problem address'],
    },
    userId:{
        type: String,
        default: []
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
                required: true
            },
            secure_url:{
                type: String,
                required: true
            },        
        },
    },
    modimg:{
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
    // road sanitation general corruption 
    category:{
        type: Number,
        enum: [1, 2, 3, 4]
    },
 },
 
 {timestamps: true}

 );

module.exports = mongoose.model('Problem', problemSchema)
