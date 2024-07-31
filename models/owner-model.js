const mongoose = require('mongoose');


const ownerSchema = mongoose.Schema({
    fullname: {
    type: String,
    minLength:3,
    trim:true
    },
    product:{
        type:Array,
        default:[]
    },
    email: String,
    password: String,
    picture: String,
    gstin:String
})

module.exports = mongoose.model("owner", ownerSchema);