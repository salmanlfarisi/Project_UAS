// import Student Controller
const EmployeeController = require("../controllers/EmployeeController");

// import express
const express = require("express");

// make an object router
const router = express.Router();

// make home routing
router.get("/", (req, res) => {
    res.send("Hello Salman");
});

// Routing for Students
router.get("/employees", EmployeeController.index);
router.post("/employees", EmployeeController.store);
router.put("/employees/:id", EmployeeController.update);
router.delete("/employees/:id", EmployeeController.destroy);
router.get("/employees/:id", EmployeeController.show);

// export routing
module.exports = router;