module.exports = app => {
  const planners = require("../controllers/planner.controller.js");

  var router = require("express").Router();

  // Create a new Planner
  router.post("/", planners.create);

  // Retrieve all Planners
  router.get("/", planners.findAll);

  // Retrieve all published Planners
  router.get("/status", planners.findAllStatus);

  // Retrieve a single Planner with id
  router.get("/:id", planners.findOne);

  // Update a Planner with id
  router.put("/:id", planners.update);

  // Delete a Planner with id
  router.delete("/:id", planners.delete);

  // Create a new Planner
  router.delete("/", planners.deleteAll);

  app.use("/api/planners", router);
};
