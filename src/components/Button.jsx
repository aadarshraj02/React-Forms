import React from "react";

function Button(props) {
  const { icon, text, ...rest } = props;
  return (
    <button
      {...rest}
      className="px-5 py-3 bg-black text-white rounded-lg flex items-center gap-2 justify-center"
    >
      {text}
      {icon}
    </button>
  );
}

export default Button;
