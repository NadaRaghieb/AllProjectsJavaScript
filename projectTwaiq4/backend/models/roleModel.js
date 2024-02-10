const mongoose = require("mongoose");
const {User} = require("./userModel")

const roleSchema = new mongoose.Schema({
    role:String
    })

    module.exports.Role = mongoose.model("Role",roleSchema)