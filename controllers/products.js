const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  const { company } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
    console.log(queryObject);
  }
  const productsData = await Product.find(queryObject);
  res.status(200).json({ productsData });
};
const getAllProductsTesting = async (req, res) => {
  const productsData = await Product.find({});

  res.status(200).json({ productsData });
};
module.exports = { getAllProducts, getAllProductsTesting };
