const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  const { company, name, featured, sort } = req.query;
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
  let result = Product.find(queryObject);
  if (sort) {
    let sortFix = sort.replace(",", " ");
    result = result.sort(sortFix);
  }
  console.log(queryObject);
  const productsData = await result;
  res.status(200).json({ productsData });
};
const getAllProductsTesting = async (req, res) => {
  const productsData = await Product.find(req.query).sort("-name price");

  res.status(200).json({ productsData });
};
module.exports = { getAllProducts, getAllProductsTesting };
