const Nike = require("../models/nikeModels"); //importing schema
const mongoose = require("mongoose"); //importing mongoose
const ObjectId = mongoose.Types.ObjectId;

//post function
exports.createNike = async (req, res) => {
  try {
    const newNike = new Nike(req.body); // Renaming from Nike to newNike
    await newNike.save();
    res.status(201).send({
      status: "success",
      message: "Nike product created successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getNike = async (req, res) => {
  try {
    const nikeProducts = await Nike.find(); // Renaming from Nike to nikeProducts
    res.status(201).send({
      status: "success",
      count: nikeProducts.length,
      data: nikeProducts,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete function
exports.deleteNike = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await Nike.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Nike product not found" });
    }

    res.status(200).json({ message: "Nike product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
