import React from "react";
import { MdMessage } from "react-icons/md";

function Button() {
  return (
    <button className="px-5 py-3 bg-black text-white rounded-sm min-w-[200px] flex items-center gap-2 justify-center">
      VIA SUPPORT CHAT
      <MdMessage className="text-2xl" />
    </button>
  );
}

export default Button;
