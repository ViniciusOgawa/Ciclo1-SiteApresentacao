const express = require("express");
const router = express.Router();

const {
  aboutController,
  technologyController,
  contentController,
} = require("../controllers/pageController");

router.get("/about", aboutController);
router.get("/technology", technologyController);
router.get("/", contentController);

module.exports = router;
