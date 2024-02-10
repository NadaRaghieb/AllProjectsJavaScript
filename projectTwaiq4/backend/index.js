const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./db");
dotenv.config();
const { userRouter } = require("./routers/userRouter");
const { roleRouter } = require("./routers/roleRouter");
const { productRouter } = require("./routers/productRouter");
const { requestRouter } = require("./routers/requestRouter");

const app = express();

app.use(express.json());
app.use(cors());

// set up routes

app.use("/auth", userRouter);
app.use("/role", roleRouter);
app.use("/product", productRouter);
app.use("/add", requestRouter);
// set up server
const PORT = process.env.PORT || 5060;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
