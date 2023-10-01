const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  const { company, name, featured } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (featured) {
    queryObject.featured = featured;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  console.log(queryObject);
  const productsData = await Product.find(queryObject);
  res.status(200).json({ productsData });
};
const getAllProductsTesting = async (req, res) => {
  const productsData = await Product.find({});

  res.status(200).json({ productsData });
};
module.exports = { getAllProducts, getAllProductsTesting };
