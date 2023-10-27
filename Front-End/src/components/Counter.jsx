import Button from "./Button";
import Header from "./Header";
import InputBar from "./InputBar";
function Counter({ title, count }) {
  //component for counter
  return (
    <div>
      <Header title={title} />
      <InputBar title={count} isDisabled={true} />
      <div>
        <Button title="Increment" onClick={() => count++} />
        <Button title="Decrement" onClick={() => count--} />
        <Button
          title="Delete Counter"
          onClick={() => console.log("delete the counter")}
        />
      </div>
    </div>
  );
}

export default Counter;
