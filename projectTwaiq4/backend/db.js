const mongoose = require("mongoose");
require("dotenv").config();
const DB_URI = process.env.DB_URI;
mongoose
  .connect(process.env.DB_URI,{ useUnifiedTopology: true,useNewUrlParser: true, useCreateIndex:true })
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Database not connected"));

  //call method to save role here

 
