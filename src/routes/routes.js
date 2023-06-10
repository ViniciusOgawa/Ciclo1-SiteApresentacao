const express = require("express");
const router = express.Router();

const {
  aboutController,
  technologyController,
  contentController,
  aboutMeController,
} = require("../controllers/pageController");

router.get("/about", aboutController);
router.get("/about-me", aboutMeController);
router.get("/technology", technologyController);
router.get("/", contentController);

module.exports = router;
