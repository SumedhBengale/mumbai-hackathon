const mongoose = require('mongoose')


const zoneSchema = new mongoose.Schema({ 
    name:{
        type: String,
        required:[true, 'please enter a name'],
        maxlength: [40, 'name should be less than 40 characters'],  
    },
    address:{
        type: String,
        required: [true, 'please provide an address'],
    },
    mla:{
        type: String,
        required: [true, 'please provide an mla details'],
    },
    problems:{
        type: Array,
        default:[]
    },
    modifiedProblems:{
        type: Array,
        default:[]
    },
    users:{
        type: Array,
        default:[]
    },
});

module.exports = mongoose.model('Zone', zoneSchema)
