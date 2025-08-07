const fs = require("node:fs/promises");
const path = require("path");
const uuidv4 = require("uuid").v4;

class EmployeeService {
  async handleGetAllEmployees(req, res) {
    try {
      const fileData = await fs.readFile(
        path.join(process.cwd(), "data.json"),
        "utf-8"
      );

      const { employees } = JSON.parse(fileData);

      res.status(200).json(employees);
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ error: "Internal Server Error", message: error.message });
    }
  }

  async handleCreateEmployee(req, res) {
    try {
      const body = req.body;

      // TODO: Validate
      const newEmployee = body;
      newEmployee.id = uuidv4();

      if (!body) {
        return res.status(400).json({ error: "Bad Request" });
      }

      const fileData = await fs.readFile(
        path.join(process.cwd(), "data.json"),
        "utf-8"
      );

      const employeeFileData = JSON.parse(fileData);

      employeeFileData.employees.push(newEmployee);

      await fs.writeFile(path.join(process.cwd(), "data.json"), JSON.stringify(employeeFileData, null, 4));

      return res.status(201).json(newEmployee);
    } catch (error) {
      console.log(error.message);
      return res
        .status(500)
        .json({ error: "Internal Server Error", message: error.message });
    }
  }

  async hanleGetEmployeeById(req, res) {
    return res.status(501).json({ error: "Not Implemented" });
  }
  handleUpdateEmployeeById(req, res) {
    return res.status(501).json({ error: "Not Implemented" });
  }

  async handleDeleteEmployeeById(req, res) {
    return res.status(501).json({ error: "Not Implemented" });
  }
}

const employeeService = new EmployeeService();
module.exports = employeeService;
