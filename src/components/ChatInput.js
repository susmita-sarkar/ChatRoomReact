import React, { Component } from "react";
class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
  sendMessage = event => {
    event.preventDefault();
    this.props.onSend(this.state.input);
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
    this.props.sendTypingStatus();
  };

  render() {
    return (
      <form onSubmit={this.sendMessage}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
          placeholder="Enter your text"
        />
      </form>
    );
  }
}

export default ChatInput;
