import React from "react";
import Button from "./Button";

function ContactForm() {
  return (
    <div className="flex max-w-[1000px] mx-auto">
      <div>
        <Button></Button>
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
