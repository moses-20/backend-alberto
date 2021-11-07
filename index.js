require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// routes paths
const fruitRoute = require("./src/routes/fruit.route");

// variables
const dbURL = process.env.DBURL;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const corsOptions = {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 204,
};

// database connection
mongoose.connect(dbURL, options, () => {
  console.log("DATABASE SERVER IS CONNECTED");
});

// middlewares
app.use(express.json());
app.use(cors(corsOptions));

// routes
app.use(fruitRoute);
app.get("/", (request, response) => {
  response.status(200).send("<h1> YOUR SERVER IS WORKING </h1>");
});

app.listen(8000, () => {
  console.log("SERVER IS STARTED");
});
