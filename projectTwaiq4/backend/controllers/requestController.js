const request = require("../models/requestModel")

const newRequest = (req, res) => {

    const saveRequest = new request ({
        insertImage:req.body.insertImage,
        descImage:req.body.descImage
        
    })
     saveRequest 
     .save()
     .then((result) => res.json( { result: result}))
     .catch((err) => console.log(err))
} 

module.exports = {newRequest}