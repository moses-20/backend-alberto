const Fruit = require("../models/fruit.model");
const { Router } = require("express");
const route = Router();

route.get("/fruits", async function (req, res) {
  try {
    const fruits = await Fruit.find({});
    res.status(200).json(fruits);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

route.post("/fruits", async function (req, res) {
  try {
    const newFruit = await Fruit.create(req.body);

    res.status(200).json(newFruit);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = route;
