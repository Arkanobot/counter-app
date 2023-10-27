import React from "react";
import { TEInput } from "tw-elements-react";
import CustomButton from "./CustomButton";
import { setData } from "../redux/counterDataSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { link } from "./constants";
export default function Cards({ title, value, index }) {
  const data = useSelector((state) => state.data.data);
  const name = useSelector((state) => state.name.name);
  const dispatch = useDispatch();

  //function to increment counter by 1
  function increment() {
    //done to prevent the read only error & modify the counter val
    let tempData = [...data];
    let tempObj = { ...tempData[index] };
    tempObj.currentCount++;
    tempData[index] = tempObj;
    dispatch(setData(tempData));
    //request to increment the counter
    axios.patch(`${link}/counter-mod/${name}`, {
      id: tempObj._id,
      currentCount: tempObj.currentCount,
    });
  }

  //function to decrement counter by 1
  function decrement() {
    //done to prevent the read only error & modify the counter val
    let tempData = [...data];
    let tempObj = { ...tempData[index] };
    tempObj.currentCount--;
    tempData[index] = tempObj;
    dispatch(setData(tempData));
    //request to decrement the counter
    axios.patch(`${link}/counter-mod/${name}`, {
      id: tempObj._id,
      currentCount: tempObj.currentCount,
    });
  }

  //function to delete counter
  function removeCounter() {
    //done to prevent the read only error
    let tempData = [...data];
    let tempObj = tempData.splice(index, 1);
    dispatch(setData(tempData));
    //request to delete the counter
    axios.patch(`${link}/counter-delete/${name}`, {
      id: tempObj[0]._id,
    });
  }
  return (
    <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {title}
      </h5>
      <div className="m-5">
        <TEInput
          type="text"
          id={title}
          label="counter"
          value={value}
          readOnly
        ></TEInput>
      </div>
      <div className="grid grid-cols-1 place-items-center">
        <CustomButton
          name={"Add 1"}
          onClick={() => {
            increment();
          }}
        />
        <CustomButton
          name={"Remove 1"}
          onClick={() => {
            decrement();
          }}
        />
        <CustomButton
          name={"delete counter"}
          onClick={() => {
            removeCounter();
          }}
        />
      </div>
    </div>
  );
}
