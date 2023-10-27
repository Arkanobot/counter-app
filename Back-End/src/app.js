const express = require("express");
const app = express();

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//importing all the route functions
const { redirectToDocs } = require("./controller/redirectToDocs");
const { getCounters } = require("./controller/counters");
const { counterAdd } = require("./controller/counterAdd");
const { counterDelete } = require("./controller/counterDelete");
const { counterModify } = require("./controller/counterModify");

//routs for the App.
app.get("/", redirectToDocs);
app.get("/counters/:name", getCounters);
app.post("/counter-add/:name", counterAdd);
app.patch("/counter-delete/:name", counterDelete);
app.patch("/counter-mod/:name", counterModify);

module.exports = app;
