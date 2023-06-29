const { Router } = require("express");

const templateRouter = Router();

const {
  aboutController,
  technologyController,
  contentController,
  aboutMeController,
  sendEmailController,
} = require("../controllers/template.controller");

templateRouter.get("/about", aboutController);
templateRouter.get("/about-me", aboutMeController);
templateRouter.get("/technology", technologyController);
templateRouter.get("/", contentController);
templateRouter.post("/sendEmail", sendEmailController);

module.exports = templateRouter;
