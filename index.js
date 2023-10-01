const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./db/connects");
const port = process.env.PORT || 5000;

const products_routes = require("./routes/products");
app.get("/", (req, res) => {
  res.send("Hi I am from Juhis Fashion");
});
//set middleware or set router
app.use("/api/products", products_routes);
const run = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`Juhis Fashion is connected on port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
run().catch(console.dir);
