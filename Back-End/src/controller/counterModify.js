const { Counters } = require("../model/counters");

exports.counterModify = async (request, response) => {
  try {
    //get the name of the user and the id of the counter from the request
    const name = request.params.name;
    const id = request.body.id;

    //find the counter on the DB matching name and if a counterArray exists with the ID
    const counter = await Counters.find(
      { name: name, counterArray: { $elemMatch: { _id: id } } },
      "-__v"
    );
    if (counter[0]) {
      const currentCount = request.body.currentCount;
      //find the counter object in the counterArray and update the currentCount
      counter[0].counterArray.find(
        (counter) => String(counter._id) === id
      ).currentCount = currentCount;
      //saving the counter
      counter[0].save();
      //send response
      response.status(200).header("Access-Control-Allow-Origin", "*").send({
        message: "Success",
      });
    } else {
      //if the counter was not found
      response.status(404).header("Access-Control-Allow-Origin", "*").send({
        message: "Counter not found",
      });
    }
  } catch (err) {
    //if error
    response
      .status(500)
      .header("Access-Control-Allow-Origin", "*")
      .send({ message: "server error", data: err });
  }
};
