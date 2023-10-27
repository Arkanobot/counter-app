const { Counters } = require("../model/counters");

exports.counterDelete = async (request, response) => {
  try {
    //get the name and body from the request
    const name = request.params.name;
    const counter = request.body;

    //find the specific user in the DB
    const counters = await Counters.find({ name: name }, "-__v");
    //if user found
    if (counters[0] !== undefined) {
      //check if the request body is complete
      if (counter.id !== undefined) {
        //find the specific counter object in the counterArray and remove it from the array in database
        const specifcCounter = counters[0].counterArray.find(
          (count) => counter.id === String(count._id)
        );
        counters[0].counterArray.splice(
          counters[0].counterArray.indexOf(specifcCounter),
          1
        );
        counters[0].save();
        response
          .status(200)
          .header("Access-Control-Allow-Origin", "*")
          .send({ message: "Success" });
      } else {
        response
          .status(400)
          .header("Access-Control-Allow-Origin", "*")
          .send({ message: "Incomplete data" });
      }
    } else {
      //if the user not found - send no data found
      response
        .status(400)
        .header("Access-Control-Allow-Origin", "*")
        .send({ message: "No data found" });
    }
  } catch (err) {
    //if error - throw error
    console.log(err);
    response
      .status(500)
      .header("Access-Control-Allow-Origin", "*")
      .send({ message: "server error", data: err });
  }
};
