const router = require("express").Router();
const employeeController = require("./controllers/employeeController");

router.use("/employee", employeeController);

module.exports = router;
