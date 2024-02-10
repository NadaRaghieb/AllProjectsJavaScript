const mongoose = require("mongoose");
const {Role} = require("../models/roleModel");
const {User} = require("../models/userModel")

// const addNewRole =  (req, res) => {
//         const {role} = req.body;
//         const addedRole = new Role({
//              role
//           });
//           addedRole.save().then(result =>{
//             console.log("Role is add : "+ result);
//             res.status(201).send(result);
//           }
        
          
//           ).catch(error =>{
//             console.log(error.message)
//             res.json(error)
//           })  
// }

const saveRole = (req, res) => {
    const newRole = new Role({
        role: req.body.role,
    });
    newRole
      .save()
      .then((result) => res.json({ result: result }))
      .catch((err) => console.log(err));
  };
// const roleId = (req, res) => {
//     course.findByIdAndUpdate(
//       { _id: req.params.id },
      
//       (err, role) => {
//         res.json(role);
//       }
//     );
//   };

const getRole=(req,res)=>{
  Role.findOne({ _id: req.params.id,
     }, (err, result) => {
    res.json(result);
  });
}
const getAllRole = (req, res) => {
  Role.find({}, (err, Roles) => {
    res.json(Roles);
  });
};

const getAllArtist = (req, res) => {
  User.find({ role: "Artist" }, (err, Artist) => {
    res.json(Artist);
  });
};

const getAllCustomers = (req, res) => {
  User.find({ role: "Customer" }, (err, Customers) => {
    res.json(Customers);
  });
};
module.exports = {
  saveRole,
  getRole ,
  getAllRole,
  getAllArtist,
  getAllCustomers
}