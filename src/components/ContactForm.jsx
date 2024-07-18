import React from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

function ContactForm() {
  return (
    <div className="flex max-w-[1000px] mx-auto">
      <div>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage></MdMessage>}></Button>
        <Button text="VIA CALL" icon={<IoIosCall />}></Button>
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
