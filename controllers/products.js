const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  const productsData = await Product.find(req.query);
  res.status(200).json({ productsData });
};
const getAllProductsTesting = async (req, res) => {
  const productsData = await Product.find({});

  res.status(200).json({ productsData });
};
module.exports = { getAllProducts, getAllProductsTesting };
