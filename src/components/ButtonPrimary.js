import React from "react";
import "./ButtonPrimary.css";

function ButtonPrimary({ name, type, onClick }) {
  return (
    <div type={type} onClick={onClick} className="buttonPrimary">
      {name}
    </div>
  );
}

export default ButtonPrimary;
