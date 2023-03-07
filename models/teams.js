const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const team = sequelize.define("teams", {
  name: DataTypes.STRING,
  engineSupplier: DataTypes.STRING,
});

module.exports = team;
