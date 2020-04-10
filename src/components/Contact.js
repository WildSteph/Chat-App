import React from "react";
import "./styles.css";

class Contact extends React.Component  {
  constructor(props) {
    super(props);
      this.state={
        online : true
     }
    }
  render(){
    return <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt="" />
      <div onClick={event => {
            const newonline =!this.state.online;
            this.setState({ online : newonline });
            }} >
          <h4 className="name" >{this.props.name}</h4>
        <div className="status">
            <span className={this.state.online ? "status-online" : "status-offline"} />
            <p className="status-text" > {this.state.online ? "online" : "offline"} </p>
          </div>
        </div>
    </div>
    }
};

export default Contact;
