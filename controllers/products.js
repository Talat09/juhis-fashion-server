const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
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
    let sortFix = sort.split(",").join(" ");
    result = result.sort(sortFix);
  }
  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    result = result.select(selectFix);
  }
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;
  let skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  console.log(queryObject);
  const productsData = await result;
  res.status(200).json({ productsData });
};
const getAllProductsTesting = async (req, res) => {
  const productsData = await Product.find(req.query).sort("-name price");

  res.status(200).json({ productsData });
};
module.exports = { getAllProducts, getAllProductsTesting };
