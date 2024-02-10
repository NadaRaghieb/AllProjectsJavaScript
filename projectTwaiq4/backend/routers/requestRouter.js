const express = require("express")
//const {Request}= require("../models/requestModel")
const requestRouter = express.Router()

const {
    newRequest
}= require("../controllers/requestController")

requestRouter.post("/add", newRequest)

module.exports = {requestRouter}