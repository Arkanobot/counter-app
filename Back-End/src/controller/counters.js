const { Counters } = require("../model/counters");

exports.getCounters = async (request, response) => {
  try {
    const name = request.params.name;
    //get every counter for the user in the counter collection in DB
    const counters = await Counters.find({ name: name }, "-__v");
    //if data exists in DB - send the array of objects
    if (counters[0] !== undefined) {
      response
        .status(200)
        .header("Access-Control-Allow-Origin", "*")
        .send(counters[0].counterArray);
    } // if data does not exist in DB - send error
    else {
      response
        .status(200)
        .header("Access-Control-Allow-Origin", "*")
        .send({ message: "No data found" });
    }
  } catch (err) {
    console.log(err);
    response
      .status(500)
      .header("Access-Control-Allow-Origin", "*")
      .send({ message: "server error", data: err });
  }
};
