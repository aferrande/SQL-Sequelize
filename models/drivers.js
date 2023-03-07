const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const driver = sequelize.define("drivers", {
  name: DataTypes.STRING,
  number: DataTypes.INTEGER,
  teamId: DataTypes.INTEGER,
});

module.exports = driver;
