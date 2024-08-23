// controllers/shoesController.js

const Nike = require("../models/nikeModels");
const Yeezy = require("../models/yeezyModels");
const Nb = require("../models/nbModels");

const models = {
  nike: Nike,
  yeezy: Yeezy,
  nb: Nb,
};

exports.getShoesByCriteria = async (req, res) => {
  try {
    const { brand } = req.query; // Extract the brand from query parameters
    const filters = req.query;
    const query = {};

    // Remove 'brand' from filters so it doesn't interfere with the query
    delete filters.brand;

    // Build the query object based on provided filters
    for (const key in filters) {
      if (filters[key]) {
        query[key] = { $regex: new RegExp(filters[key], "i") }; // Case-insensitive regex search
      }
    }

    console.log("Query:", query); // Log the query for debugging

    // Select the correct model based on the brand
    const model = models[brand.toLowerCase()];

    if (!model) {
      return res.status(400).json({ message: "Invalid brand specified" });
    }

    const shoes = await model.find(query);

    if (shoes.length === 0) {
      return res.status(404).json({ message: "No shoes found" });
    }

    res.status(200).json({
      status: "success",
      count: shoes.length,
      data: shoes,
    });
  } catch (error) {
    console.error("Error fetching shoes:", error); // Log the error
    res.status(500).json({ message: error.message });
  }
};
