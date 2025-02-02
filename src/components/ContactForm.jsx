import React, { useState } from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

function ContactForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <div className="flex max-w-[1000px] mx-auto justify-between">
      <div className="flex flex-col gap-5">
        <div className="flex gap-10">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage></MdMessage>}
          ></Button>
          <Button text="VIA CALL" icon={<IoIosCall />}></Button>
        </div>
        <button className="flex items-center justify-center w-full border-2 border-black h-10 rounded-md gap-5">
          VIA EMAIL <IoIosMail></IoIosMail>
        </button>
        <div className="w-full flex flex-col">
          <form action="" className="flex flex-col gap-2" onSubmit={onSubmit}>
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
            <Button text="Submit"></Button>
          </form>
          <div>{name + "" + email + "" + text + ""}</div>
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
