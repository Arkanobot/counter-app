const { Counters } = require("../model/counters");

exports.counterAdd = async (request, response) => {
  try {
    //get the name and body from the request
    const name = request.params.name;
    const counter = request.body;

    //find the specific user in the DB
    const counters = await Counters.find({ name: name }, "-__v");
    //if user found
    if (counters[0] !== undefined) {
      //check if the body is complete
      if (
        counter === undefined ||
        (counter.counterName !== undefined &&
          counter.currentCount !== undefined)
      ) {
        //add the new counter to the counterArray
        counters[0].counterArray = [...counters[0].counterArray, counter];
        counters[0].save();
        response
          .status(200)
          .header("Access-Control-Allow-Origin", "*")
          .send({ message: "Success" });
      } else {
        //if the request body is not complete
        response
          .status(400)
          .header("Access-Control-Allow-Origin", "*")
          .send({ message: "Incomplete data" });
      }
    } else {
      //if the user not found in the DB, Create a new user and add the counter to the user's counter array
      const newUserCounter = new Counters({
        name: name,
        counterArray: [counter],
      });
      await newUserCounter.save();
      response
        .status(200)
        .header("Access-Control-Allow-Origin", "*")
        .send({ message: "Success" });
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
