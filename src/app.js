const path = require("path");
const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();

app.engine("mustache", mustacheExpress());
app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "mustache");

const routes = require("./routes/routes.js");

app.use("/", routes);

app.listen(3000, () => {
  console.log("Running...");
});
