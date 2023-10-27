import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import { useEffect } from "react";
import axios from "axios";
import { setData } from "../redux/counterDataSlice";
import Modal from "./Modal";
import { link } from "./constants";
function Body() {
  //getting required data from redux store
  const name = useSelector((state) => state.name.name);
  const data = useSelector((state) => state.data.data);
  const inputVal = useSelector((state) => state.input.input);
  const dispatch = useDispatch();

  //function to create a new counter
  function createCounter() {
    axios.post(`${link}/counter-add/${name}`, {
      counterName: inputVal,
      currentCount: 0,
    });
  }
  //useEffect to fetch the data from the server when component loads
  useEffect(() => {
    try {
      axios.get(`${link}/counters/${name}`).then((res) => {
        if (res.data.message !== "No data found") {
          dispatch(setData(res.data));
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, name]);

  //useEffect to fetch data from server every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      try {
        axios.get(`${link}/counters/${name}`).then((res) => {
          if (res.data.message !== "No data found") {
            dispatch(setData(res.data));
          }
        });
      } catch (err) {
        console.log(err);
      }
    }, 5000);
    //clear interval on component unmount
    return () => clearInterval(interval);
  }, [dispatch, name]);

  return (
    <div className="m-5">
      <div className="flex flex-wrap gap-3">
        {data?.map((counter, i) => (
          <div key={i}>
            <Cards
              title={counter.counterName}
              value={counter.currentCount}
              index={i}
            />
          </div>
        ))}
      </div>
      {/**display a button to add more counters below */}
      <div className="m-5 flex justify-center">
        <Modal onClickFunc={createCounter} />
      </div>
    </div>
  );
}

export default Body;
