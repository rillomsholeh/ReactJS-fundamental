// code Here
import React from "react";

//props ini adalah property bisa di ubah dengan nama apa saja
const list = (Props) => {
  return (
    <div>
      <ul>
        <li>{Props.carName}</li>
      </ul>
    </div>
  );
};

export default list;
