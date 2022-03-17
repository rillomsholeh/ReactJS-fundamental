// code Here
import React from "react";

//props ini adalah property bisa di ubah dengan nama apa saja
const list = ({ Name, Email }) => {
  return (
    <div>
      <ul>
        <li>{Name}</li>
        <li>{Email}</li>
      </ul>
    </div>
  );
};

export default list;
