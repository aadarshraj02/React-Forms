import React from "react";
import Navigation from "./components/Navigation";
import ContactHeader from "./components/ContactHeader";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <ContactHeader></ContactHeader>
      <ContactForm></ContactForm>
    </div>
  );
}

export default App;
