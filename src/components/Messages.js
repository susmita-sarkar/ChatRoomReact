import React, { Component } from "react";
import Message from "./Message";

class Messages extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const list = document.getElementById("list");
    list.scrollTop = list.scrollHeight;
  }

  render() {
    const array = this.props.msg_arr.map(item => <Message oneMessage={item} />);
    return <div id="list">{array}</div>;
  }
}

export default Messages;
