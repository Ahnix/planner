const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Connected to the database Successful! luckyboy go postman...");
  })
  .catch(err => {
    console.log("Cannot connect to the database! = ( sad times!!!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Planner Server Running go to postman dude..." });
});

require("./app/routes/planner.routes")(app);

// set port, listen for requests for .env file or not
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Planner Server is running on port ${PORT}.`);
});
