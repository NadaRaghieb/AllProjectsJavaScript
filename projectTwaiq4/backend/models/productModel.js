const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  pantingName:{ type: String , required:true },
  
  description:{ type: String , required:true },
  typeOfArt: { type: String, required: true },
  price: { type: Number , required:true },
  imageProduct:String,
  isDeleted: { type: Boolean, default: false },
  });

const Product = mongoose.model("product", productSchema);

module.exports = Product;
