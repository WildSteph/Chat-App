import React from "react";
import "./styles.css";

const Contact = function(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt="" />
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <span className={props.online ? "status-online" : "status-offline"} />
          <p className="status-text"> {props.online ? "online" : "offline"} </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
