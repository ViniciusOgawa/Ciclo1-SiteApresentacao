const Sequelize = require("sequelize");
const configDB = require("../config/database");

const sequelize = new Sequelize(configDB);

const User = require("../models/User")(sequelize, Sequelize);
const Contact = require("../models/Contact")(sequelize, Sequelize);
const Address = require("../models/Address")(sequelize, Sequelize);

module.exports = { User, Contact, Address };
