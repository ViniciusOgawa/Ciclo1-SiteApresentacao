const aboutController = (req, res) => {
  res.render("about");
};

const aboutMeController = (req, res) => {
  res.render("about-me");
};

const technologyController = (req, res) => {
  res.render("technology");
};

const contentController = (req, res) => {
  res.render("content");
};

module.exports = {
  aboutController,
  technologyController,
  contentController,
  aboutMeController,
};
