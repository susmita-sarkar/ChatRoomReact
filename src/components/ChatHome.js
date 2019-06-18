import React, { Component } from "react";
import ChatApp from "./ChatApp";

class ChatHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      name: ""
    };
  }
  changeStatus = () => {
    this.setState({ status: true });
  };
  changeName = event => {
    this.setState({
      name: event.target.value
    });
  };
  render() {
    if (this.state.status === true)
      return (
        <div>
          <ChatApp printName={this.state.name} />
        </div>
      );
    else if (this.state.status === false) {
      return (
        <div>
          <form onSubmit={this.changeStatus}>
            username : <input type="text" onChange={this.changeName} />
            <input type="submit" />
          </form>
        </div>
      );
    }
  }
}

export default ChatHome;
