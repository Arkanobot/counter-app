import Header from "./components/Header";
import Body from "./components/Body";
import Modal from "./components/Modal";
import { useSelector } from "react-redux/es/hooks/useSelector";

function App() {
  //getting the required data from redux store
  const name = useSelector((state) => state.name.name);

  return (
    <div>
      <Header title={"Simple Counter App"} name={name} />
      <div className="flex justify-center">
        {name === undefined ? (
          <Modal
            autoTrigger={true}
            title="Enter Name"
            text="Enter Your Name"
            placeholder="Enter Your Name"
          />
        ) : (
          <Body />
        )}
      </div>
    </div>
  );
}

export default App;
