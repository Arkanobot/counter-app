import { useDispatch } from "react-redux";
import { TEInput } from "tw-elements-react";
import { setInput } from "../redux/inputSlice";

function InputBar({
  title,
  placeholder = "Enter a title for the Counter",
  isDisabled = false,
  value = undefined,
}) {
  const dispatch = useDispatch();
  return (
    <TEInput
      type="text"
      id="exampleFormControlInputCounter"
      label={title}
      placeholder={placeholder}
      counter
      minLength={3}
      maxLength={15}
      onChange={(e) => dispatch(setInput(e.target.value))}
      readOnly={isDisabled}
      value={value}
    ></TEInput>
  );
}

export default InputBar;
