const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { mongoose } = require("mongoose");
const app = require("./app.js");
const { swaggerSetup } = require("./view/swagger/swaggerOptions.js");

//reading from the Env file
dotenv.config();
app.use(express.json());
app.use(cors());

//establishing mongo db connection
const uri = process.env.MONGODB_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// Mongoose connection events
mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from database");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to database", err);
});

//setting up swagger docs
swaggerSetup(app);

// start the server
const server = app.listen(process.env.PORT, () =>
  console.log("Server listening on port " + process.env.PORT)
);

module.exports = server;
