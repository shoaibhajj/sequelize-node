const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

dotenv.config({ path: "config.env" });
app.use(morgan("dev"));
app.use(bodyParser.json());

//Routes
const mountRoutes = require("./routes");

// Mount Routes
mountRoutes(app);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is Running on : ${port}`);
});
