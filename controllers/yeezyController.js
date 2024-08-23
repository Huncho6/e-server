const Yeezy = require("../models/yeezyModels"); //importing schema
const mongoose = require("mongoose"); //importing mongoose
const ObjectId = mongoose.Types.ObjectId;

//post function
exports.createYeezy = async (req, res) => {
  try {
    const newYeezy = new Yeezy(req.body); 
    await newYeezy.save();
    res.status(201).send({
      status: "success",
      message: "Ye product created successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getYeezy = async (req, res) => {
  try {
    const yeezyProducts = await Yeezy.find(); // Renaming from Nike to nikeProducts
    res.status(201).send({
      status: "success",
      count: yeezyProducts.length,
      data: yeezyProducts,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete function
exports.deleteYeezy = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await Yeezy.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "YE product not found" });
    }

    res.status(200).json({ message: "YE product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
