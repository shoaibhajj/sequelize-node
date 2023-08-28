const { DataTypes } = require("sequelize");
const dbConnection = require("../config/database");
const sequelize = dbConnection();

const Company = sequelize.define("Company", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Company;
