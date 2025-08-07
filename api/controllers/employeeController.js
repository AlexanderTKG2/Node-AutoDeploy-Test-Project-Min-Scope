const employeeService = require("../services/employeeService");
const router = require("express").Router();

router.get("/", (req, res) => employeeService.handleGetAllEmployees(req, res));

router.post("/", (req, res) => employeeService.handleCreateEmployee(req, res));

router.get("/:id", (req, res) => employeeService.hanleGetEmployeeById(req, res));

router.patch("/:id", (req, res) => employeeService.handleUpdateEmployeeById(req, res));

router.delete("/:id", (req, res) => employeeService.handleDeleteEmployeeById(req, res));

module.exports = router;