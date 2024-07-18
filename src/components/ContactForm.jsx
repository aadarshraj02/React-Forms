import React from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

function ContactForm() {
  return (
    <div className="flex max-w-[1000px] mx-auto">
      <div className="flex flex-col gap-5">
        <div className="flex gap-10">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage></MdMessage>}
          ></Button>
          <Button text="VIA CALL" icon={<IoIosCall />}></Button>
        </div>
        <button className="flex items-center justify-center w-full border-2 border-black h-10 rounded-md">
          VIA EMAIL <IoIosCall></IoIosCall>
        </button>
        <div className="w-full flex flex-col">
          <form action="" className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              className="h-[40px] px-2 w-full border-2 relative rounded-md
              border-black"
              type="text"
              name="name"
            />
            <label htmlFor="email">E-mail</label>
            <input
              className="h-[40px] px-2 w-full border-2 relative rounded-md
              border-black"
              type="email"
              name="email"
            />
            <label htmlFor="text">Text</label>
            <textarea
              className=" px-2 w-full border-2 relative rounded-md
              border-black"
              type="text"
              name="text"
            />
          </form>
        </div>
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
