const { Sequelize } = require("sequelize");
const dbConnection = () => {
  const sequelize = new Sequelize("dev", "postgres", "pass", {
    host: "localhost",
    dialect: "postgres",
  });
  try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = dbConnection;
