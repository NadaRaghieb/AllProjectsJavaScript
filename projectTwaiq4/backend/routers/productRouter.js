const express = require("express")
const productRouter = express.Router()

const {
    saveProduct, getAllProducts
   
} = require("../controllers/productController")

// const { authenticateToken } = require("../middleware/auth")

productRouter.post("/save", saveProduct)
productRouter.get("/show", getAllProducts)


module.exports = {productRouter};