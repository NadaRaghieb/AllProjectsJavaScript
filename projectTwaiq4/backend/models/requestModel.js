const mongoose = require("mongoose");



const requestSchema = new mongoose.Schema({
  insertImage:{ type: String, required:true },
  descImage:{ type: String, required:true },
  isDeleted: { type: Boolean, default: false },
  });

const Request = mongoose.model("request", requestSchema);

module.exports = Request;
