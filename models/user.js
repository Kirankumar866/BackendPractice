const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required: true
    },
    sub :{
        type : Boolean,
        default: false,

    },
    password: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("User", userSchema);