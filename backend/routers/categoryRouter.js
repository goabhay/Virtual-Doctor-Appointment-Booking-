const express = require("express");
const {
  getCategories,
  categoryDoctor,
} = require("../controllers/categoryController");

const router = express.Router();

// Define route for fetching categories
router.get("/", getCategories);
router.get("/doctors", categoryDoctor);

module.exports = router;
