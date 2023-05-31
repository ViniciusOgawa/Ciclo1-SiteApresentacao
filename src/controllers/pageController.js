const aboutController = (req, res) => {
  res.render("about");
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
};
