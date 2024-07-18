import React from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

function ContactForm() {
  return (
    <div className="flex max-w-[1000px] mx-auto">
      <div className="">
        <div className="flex gap-10">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage></MdMessage>}
          ></Button>
          <Button text="VIA CALL" icon={<IoIosCall />}></Button>
        </div>
        <button className="flex items-center justify-center min-w-[350px] border-2 border-black h-10 mt-5 rounded-md">
          VIA EMAIL <IoIosCall></IoIosCall>
        </button>
      </div>
      <div>
        <div>
          <img src="../../public/contact.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
