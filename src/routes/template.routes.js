const { Router } = require("express");

const templateRouter = Router();

const {
  aboutController,
  technologyController,
  contentController,
  aboutMeController,
} = require("../controllers/pageController");

templateRouter.get("/about", aboutController);
templateRouter.get("/about-me", aboutMeController);
templateRouter.get("/technology", technologyController);
templateRouter.get("/", contentController);

module.exports = templateRouter;