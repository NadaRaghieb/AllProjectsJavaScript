const express = require("express");
const {Role} =require("../models/roleModel")
const {User} =require("../models/userModel")


const roleRouter = express.Router();

const {
    saveRole,
    getRole,
    getAllRole,
    getAllArtist,
    getAllCustomers
} = require("../controllers/roleController")


roleRouter.post("/add",saveRole )
roleRouter.get("/get/:id",getRole )
roleRouter.get("/get", getAllRole)

module.exports = {roleRouter};