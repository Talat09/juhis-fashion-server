require("dotenv").config();
const connectDB = require("./db/connects");
const Product = require("./models/product");
const ProductJson = require("./products.json");
const run = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};
run();
