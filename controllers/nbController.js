const Nb = require("../models/nbModels"); //importing schema
const mongoose = require("mongoose"); //importing mongoose
const ObjectId = mongoose.Types.ObjectId;

//post function
exports.createNb = async (req, res) => {
  try {
    const newNb = new Nb(req.body); // Renaming from Nike to newNike
    await newNb.save();
    res.status(201).send({
      status: "success",
      message: "New balance product created successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getNb = async (req, res) => {
  try {
    const nbProducts = await Nb.find(); // Renaming from Nike to nikeProducts
    res.status(201).send({
      status: "success",
      count: nbProducts.length,
      data: nbProducts,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete function
exports.deleteNb = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await Nb.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "New Balance product not found" });
    }

    res.status(200).json({ message: "New balance product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
