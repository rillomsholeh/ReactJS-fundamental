import React from "react";
import { data } from "./components/dataDummy";

//Import Components
import List from "./components/list";

function Props() {
  return (
    // Code Inside div
    <div>
      <List carName="mobil Lamborgini" />
      <List carName="Mobil Bmw" />
      <List carName="mobil Toyota" />
    </div>
  );
}

export default Props;
