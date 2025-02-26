require("dotenv/config");
require("./db");

const express = require("express");
const app = express();

require("./config")(app);

// default value for title local
const projectName = "lab-express-cinema";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
const routes = require("./config/router.config");
app.use("/", routes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
