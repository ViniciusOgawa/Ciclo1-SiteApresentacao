const path = require("path");
const express = require("express");
const app = express();

app.use("/assets", express.static(path.join(__dirname, "assets")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const routes = require("./routes/routes.js");

app.use("/", routes);

app.listen(3000, () => {
  console.log("Running...");
});
