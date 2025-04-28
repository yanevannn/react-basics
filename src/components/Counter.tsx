import { useState } from "react";

const Counter = () => {
  // [state, function to update state] = state value using useState Hook
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Evan"); // another example state

  // Function to toggle the [State] name between "Evan" and "Yan Evan"
  const handleChangeName = () => {
    if (name === "Evan") {
      setName("Yan Evan");
    } else {
      setName("Evan");
    }
  };

  // Function to increment the counter value
  const handlePlusCounter = () => {
    setCounter(counter + 1);
  };

  // Function to dencrement the counter value
  const handleMinusCounter = () => {
    setCounter(counter - 1);
  };

  // Function to reset the counter value to 0
  const handleResetCounter = () => {
    setCounter(0);
  };

  // Return component for rendering UI
  return (
    <>
      <div className="flex justify-center items-center">
        <button
          onClick={handlePlusCounter}
          className="mx-5 p-3 rounded-md font-bold bg-green-500 hover:bg-green-600"
        >
          +
        </button>
        <p className="text-3xl font-bold">{counter}</p>
        <button
          onClick={handleMinusCounter}
          className="mx-5 p-3 rounded-md font-bold bg-red-500 hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={handleResetCounter}
          className="mx p-3 rounded-md font-bold bg-cyan-500 hover:bg-cyan-600"
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p
          onClick={handleChangeName}
          className="my-5 p-3 rounded-xl font-bold text-xl bg-gray-600 shadow-lg shadow-gray-600/50"
        >
          {name}
        </p>
        <p className="text-sm">Click name 👆🏻</p>
      </div>
    </>
  );
};

export default Counter;
