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
    await Fruit.create(req.body);
    let allFruits = await Fruit.find({});

    res.status(200).json(allFruits);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

route.put("/fruits", async function (req, res) {
  try {
    const { _id, title, para, img } = req.body;
    await Fruit.findByIdAndUpdate(_id, { title, para, img });

    let result = await Fruit.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

route.delete("/fruits", async function (req, res) {
  try {
    const { id } = req.body;
    await Fruit.findByIdAndDelete(id);

    let result = await Fruit.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = route;
