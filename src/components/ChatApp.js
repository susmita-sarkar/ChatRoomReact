import React, { Component } from "react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import io from "socket.io-client";
class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], typingstatus: "" }; //online: []
    this.socket = io("localhost:4001", {
      query: "username = $props.username"
    });

    this.socket.on("server:message", message => {
      this.addMessage(message);
    });

    this.socket.on("server:typingstatus", username => {
      this.setState({ typingstatus: `${username} is typing...` });
      setTimeout(() => {
        this.setState({ typingstatus: "" });
      }, 1000);
    });

    // this.socket.on("server:online", username => {
    //  this.setState({ online: `${username} is online...` });
    // });
  }
  addMessage = MsgObj => {
    const { messages } = this.state;
    let messages1 = messages.concat([MsgObj]);
    this.setState({ messages: messages1 });
  };
  onSend = message => {
    const messageObject = {
      username: this.props.printName,
      message: message,
      fromMe: true
    };

    this.socket.emit("client:message", messageObject);
    this.addMessage(messageObject);
  };

  sendTypingStatus = () => {
    this.socket.emit("client:typingStatus", this.props.printName);
  };

  render() {
    console.log(this.state.messages);
    return (
      <div>
        <p>{this.state.typingstatus}</p>
        <h2>Hi {this.props.printName}</h2>
        <Messages msg_arr={this.state.messages} />
        <ChatInput
          onSend={this.onSend}
          sendTypingStatus={this.sendTypingStatus}
        />
      </div>
    );
  }
}

export default ChatApp;
