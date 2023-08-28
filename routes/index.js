const userRoute = require("./userRoute");
const companyRoute = require("./companyRoute");
const mountRoutes = (app) => {
  app.use("/user", userRoute);
  app.use("/company", companyRoute);
};

module.exports = mountRoutes;
