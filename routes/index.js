const todosRoute = require("./todosRoute");

const mountRoutes = (app) => {
  app.use("/todos", todosRoute);
};

module.exports = mountRoutes;
