const mongoose = require("mongoose");
const Customer = require("../models/customerModel");


const saveNewCustomer = async (req, res) => {
    try {
      const { name } = req.body;
  
      const newCustomer = new Customer({
        name,
      });
  
      const savedCustomer = await newCustomer.save();
  
      res.json(savedCustomer);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
}
  
 const getAllCustomers =  async (req, res) => {
    try {
      const customers = await Customer.find();
      res.json(customers);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  }
  module.exports = {
    saveNewCustomer, 
    getAllCustomers
  }