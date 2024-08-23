// routes/shoesRoutes.js

const { Router } = require("express");
const { getShoesByCriteria } = require("../controllers/shoesController");

const router = Router();

// Define the route
router.get("/shoes", getShoesByCriteria); // Route to search for shoes by brand and criteria

module.exports = router;
