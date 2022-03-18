// code Here
import React from "react";

//props ini adalah property bisa di ubah dengan nama apa saja
const List = (props) => {
  return (
    <div>
      <ul>
        <li>{props.carName}</li>
      </ul>
    </div>
  );
};

export default List;
