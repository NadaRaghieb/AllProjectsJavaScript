const router = require("express").Router();
const Customer = require("../models/customerModel");
const auth = require("../middleware/auth");
const customerController = require('../controllers/customerController');


router.post("/save", auth, customerController.saveNewCustomer);

router.get("/show", auth, customerController.getAllCustomers);

module.exports = {router};
