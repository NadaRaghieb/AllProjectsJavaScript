const express = require("express");
const userRouter = express.Router();
const { addNewUser,login,getUser,getAllUser,getAllArtist, getAllCustomers,updateUserProfile } = require("../controllers/userController");

// register
userRouter.post("/register", addNewUser);

// log in
userRouter.post("/login",login);
userRouter.get("/show/:id", getUser);
userRouter.get("/show", getAllUser);
userRouter.get("/Artist",getAllArtist)
userRouter.get("/Customers", getAllCustomers)
userRouter.post("/profile", updateUserProfile)



// userRouter.get("/logout",logOut);

module.exports = { userRouter };
