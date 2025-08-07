const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const env = require("./config/env");
const apiRoutes = require("./api/routes");
const { requestLogStream } = require("./lib/logger");
const app = express();

app.disable("x-powered-by");

app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("short", { stream: requestLogStream }));


app.use(env.api.root, apiRoutes);

app.listen(env.api.port, () => {
  console.log(`Server running on port ${env.api.port}`);
});

module.exports = app;
