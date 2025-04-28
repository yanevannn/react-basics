import { useState } from "react";

export const useCounter = () => {
  // [state, function to update state] = state value using useState Hook
  const [counter, setCounter] = useState(0);

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

  return {
    counter,
    handlePlusCounter,
    handleMinusCounter,
    handleResetCounter,
  };
};