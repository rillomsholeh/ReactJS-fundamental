import React from "react";

function Event() {
  //Create function here
  function Greeting() {
    return alert("hello batch 30");
  }

  //Create Const Variable
  const lastName = "Muhamamd";

  return (
    // Code Inside div
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nobis ipsa minus natus dolores veniam maxime eius quisquam libero placeat.</p>

      <button onClick={() => alert("hallo fullstackbatch30")}>click Me</button>
      <br />
      <button onClick={() => alert(lastName)}>LastName</button>
      <br />
      <button onClick={() => Greeting()}>Greeting</button>
      <br />
      <button onClick={() => alert("hallo muhammad sholeh")}>My Name</button>
    </div>
  );
}

export default Event;
