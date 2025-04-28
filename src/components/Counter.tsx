import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  // Use custom hook for cleaner and more organized code
  const { counter, handlePlusCounter, handleMinusCounter, handleResetCounter } = useCounter();

  // [state, function to update state] = state value using useState Hook
  const [name, setName] = useState<string>("Evan"); // another example state
  // Function to toggle the [State] name between "Evan" and "Yan Evan"
  const handleChangeName = () => {
    if (name === "Evan") {
      setName("Yan Evan");
    } else {
      setName("Evan");
    }
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
