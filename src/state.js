import React, { useState } from "react";

function State() {
  //init State

  const [counter, setCounter] = useState(0);

  //Create Function Add
  function add() {
    setCounter(counter + 1);
  }

  //Create Function Less
  function Less() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    // Code Inside div
    <div>
      {/* <button onClick={() => setCounter(counter + 1)}>onClick</button>
      {counter} */}

      <h4>{counter}</h4>
      <button onClick={add}>Add</button>
      <button onClick={Less}>Less</button>
    </div>
  );
}

export default State;
