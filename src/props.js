import React from "react";

//Import Components
import List from "./components/list";

function Props() {
  return (
    // Code Inside div
    <div>
      {/* <List Name="robby" Email="robby@mail.com" type="number" /> */}

      <List carName="BMW" />
      <List carName="Lamborgini" />
      <List carName="Perari" />
    </div>
  );
}

export default Props;
