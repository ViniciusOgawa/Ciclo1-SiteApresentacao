const path = require("path");
const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
const contactsRoutes = require("./routes/contacts.routes");
const adressRoutes = require("./routes/adress.routes");
const loginRoutes = require("./routes/login.routes");
const templateRoutes = require("./routes/template.routes");

app.use("/assets", express.static(path.join(__dirname, "assets")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

require("./database");

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);
app.use("/adress", adressRoutes);
app.use("/template", templateRoutes);

app.use(express.json());

app.listen(3000, () => {
  console.log("Running...");
});
