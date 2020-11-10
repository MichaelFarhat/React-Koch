import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./Message.css";

function Message() {
  const [{ showMessage }, dispatch] = useDataLayerValue();
  return (
    <div className={`message ${showMessage ? "active" : ""}`}>
      <div className="message__close close">
        <i className="fas fa-window-close close"></i>
      </div>
      <h2></h2>
    </div>
  );
}

export default Message;
