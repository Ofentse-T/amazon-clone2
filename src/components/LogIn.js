import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

const LogIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <h1>Sign in</h1>
      <p>This is our login page</p>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen &&
        ReactDOM.createPortal(
          <Modal setIsOpen={setIsOpen} />,
          document.getElementById(modal - root - div)
        )}
    </React.Fragment>
  );
};

export default LogIn;
