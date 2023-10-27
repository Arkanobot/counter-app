import React, { useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

import InputBar from "./InputBar";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../redux/nameSlice";
import { setData } from "../redux/counterDataSlice";
import CustomButton from "./CustomButton";

export default function Modal({
  autoTrigger = false,
  text = "New Counter",
  title = "Enter title",
  placeholder = "Enter a Title for Counter",
  onClickFunc,
}) {
  const [showModal, setShowModal] = useState(autoTrigger);
  const data = useSelector((state) => state.data.data);
  const { input } = useSelector((state) => state.input);
  const dispatch = useDispatch();

  //onClick Function for modal
  function onClickFunction() {
    onClickFunc();
    dispatch(setData([...data, { counterName: input, currentCount: 0 }]));
    setShowModal(false);
  }

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      {autoTrigger ? null : (
        <CustomButton name="Add Counter" onClick={() => setShowModal(true)} />
      )}

      {/* <!-- Modal --> */}
      <TEModal show={showModal} setShow={setShowModal} staticBackdrop>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                {text}
              </h5>
              {/* <!--Close button--> */}
              {autoTrigger ? null : (
                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>
              <div>Add {text}</div>
              <div>
                <InputBar
                  title={title}
                  nameInput={autoTrigger}
                  placeholder={placeholder}
                />
              </div>
            </TEModalBody>
            <TEModalFooter>
              {autoTrigger ? null : (
                <TERipple rippleColor="light">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </TERipple>
              )}
              <CustomButton
                name="Set Name"
                onClick={
                  autoTrigger
                    ? () => {
                        dispatch(setName(input));
                      }
                    : () => onClickFunction()
                }
              />
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
}
