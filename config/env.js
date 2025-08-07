require("process");
require("dotenv").config();

const env = {
    api: {
        port: parseInt(process.env.PORT) || 8080,
        root: process.env.API_ROOT || "/api/v1",
        nodeEnv: process.env.NODE_ENV || "development"
    }
};

module.exports = env;