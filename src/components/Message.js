import React, { Component } from "react";

require("../styles/ChatApp.css");
require("../styles/App.css");
class Message extends Component {
  render() {
    console.log(this.props.oneMessage.fromMe);
    const fromMe = this.props.oneMessage.fromMe ? "from-me" : "";
    return (
      <div className={`message ${fromMe} `}>
        <div className="username">{this.props.oneMessage.username}</div>
        <div className="message-body">{this.props.oneMessage.message}</div>
      </div>
    );
  }
}

export default Message;
