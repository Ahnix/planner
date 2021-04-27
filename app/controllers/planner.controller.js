const db = require("../models");
const Planner = db.planners;

// Create and Save a new Planner
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Planner
  const planner = new Planner({
    name: req.body.name,
    focus: req.body.focus,
    videos: req.body.videos,
    idVideos: req.body.idVideos,
    idExercices: req.body.idExercices,
    idArchives:req.body.idArchives,
    IDModelVestibular:req.body.IDModelVestibular,
    content: req.body.content,
    exercises: req.body.exercises,
    archives: req.body.archives,
    datein: req.body.datein,
    dateout: req.body.dateout,
    hours: req.body.hours,
    hoursVideos: req.body.hoursVideos,
    hoursExercices: req.body.hoursExercices,
    hoursArchives: req.body.hoursArchives,
    days: req.body.days,
    color: req.body.color,
    cover: req.body.cover,
    thumb: req.body.thumb,
    status: req.body.status ? req.body.status : true
  });

  // Save Planner in the database
  planner
    .save(planner)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Planner."
      });
    });
};

// Retrieve all Planners from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Planner.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving planners."
      });
    });
};

// Find a single Planner with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Planner.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Planner with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Planner with id=" + id });
    });
};

// Update a Planner by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Planner.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Planner with id=${id}. Maybe Planner was not found!`
        });
      } else res.send({ message: "Planner was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Planner with id=" + id
      });
    });
};

// Delete a Planner with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Planner.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Planner with id=${id}. Maybe Planner was not found!`
        });
      } else {
        res.send({
          message: "Planner was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Planner with id=" + id
      });
    });
};

// Delete all Planners from the database.
exports.deleteAll = (req, res) => {
  Planner.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Planners were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all planners."
      });
    });
};

// Find all status Planners
exports.findAllStatus = (req, res) => {
  Planner.find({ status: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving planners."
      });
    });
};