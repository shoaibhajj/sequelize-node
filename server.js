const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dbConnection = require("./config/database");
const dbSync = require("./databaseSync");
const { Company, User } = require("./models/index");
dotenv.config({ path: "config.env" });
app.use(morgan("dev"));
app.use(bodyParser.json());

// Run the database synchronization
dbSync(User);
dbSync(Company);
//Routes
const mountRoutes = require("./routes");

// Mount Routes
mountRoutes(app);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is Running on : ${port}`);
});
