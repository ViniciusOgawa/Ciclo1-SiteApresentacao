const path = require("path");
const express = require("express");
require("express-async-errors");
const app = express();
const userRoutes = require("./routes/user.routes");
const contactsRoutes = require("./routes/contacts.routes");
const loginRoutes = require("./routes/login.routes");
const templateRoutes = require("./routes/template.routes");
const addressRoutes = require("./routes/address.routes");
const { handleErrors } = require("./errors");

app.use(express.json());

app.use("/assets", express.static(path.join(__dirname, "assets")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

require("./database");

app.use("/address", addressRoutes);
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);
app.use("/template", templateRoutes);

app.use(handleErrors);

app.listen(3000, () => {
  console.log("Running...");
});
