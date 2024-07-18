import React from "react";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

function Button(props) {
  return (
    <button className="px-5 py-3 bg-black text-white rounded-lg flex items-center gap-2 justify-center">
      {props.text}
      {props.icon}
    </button>
  );
}

export default Button;
