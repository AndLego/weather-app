import React from "react";
import ReactDOM from "react-dom";
import "../styles/ModalWrongSearch.css";

const ModalWrongSearch = () => {
  return ReactDOM.createPortal(
    <div className="wrong-location">
      <span>Sorry, wrong query.</span>
    </div>,
    document.getElementById("wrong-location")
  );
};

export { ModalWrongSearch };
