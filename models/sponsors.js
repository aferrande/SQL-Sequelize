const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const sponsor = sequelize.define("sponsors", {
  name: DataTypes.STRING,
});

module.exports = sponsor;
