import React from "react";
const ISOnline = true;
const Contact = () => (
  <div className="Contact">
    <img
      className="avatar"
      src="https://cdn.discordapp.com/attachments/221721609436790784/694198643791495208/EOSwdDtU4AA8-sc.jpg"
      alt=""
    />
    <div>
      <h1 className="name">Stephaine PANTIEZ</h1>
      <p className="status">
        {ISOnline ? (
          <p>
            <span className="status-online" />online
          </p>
        ) : (
          <p className="status-offline">
            <span className="status-online" />offline
          </p>
        )}
      </p>
    </div>
  </div>
);

export default Contact;
