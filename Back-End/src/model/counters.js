const mongoose = require("mongoose");

const counterElementSchema = new mongoose.Schema({
  counterName: {
    type: String,
    required: true,
  },
  currentCount: {
    type: Number,
    required: true,
  },
});

//defining the schema for the counters collection
const counterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  counterArray: {
    type: [counterElementSchema],
    required: true,
  },
});

// defining the model for mongoose interaction
const Counters = mongoose.model("counter", counterSchema, "counters");
exports.Counters = Counters;
