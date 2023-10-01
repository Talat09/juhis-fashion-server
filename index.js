const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hi I am from Juhis Fashion");
});
const run = async () => {
  try {
    app.listen(port, () => {
      console.log(`Juhis Fashion is connected on port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
run().catch(console.dir);
