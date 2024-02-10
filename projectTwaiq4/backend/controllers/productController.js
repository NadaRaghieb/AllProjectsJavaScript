const product = require("../models/productModel")

const saveProduct = (req, res) => {
   const{ pantingName,
    description,
    typeOfArt,
    price, 
    imageProduct} = req.body;

    const newProduct = new product ({
        pantingName,
        description,
        typeOfArt,
        price,
        imageProduct
  })

    newProduct
    .save()
    .then((result) => res.json({ result: result}))
    .catch((err) => console.log(err))
}

const getAllProducts =  async (req, res) => {
    try {
      const products = await product.find();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  }

module.exports ={saveProduct,getAllProducts}