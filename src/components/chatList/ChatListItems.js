import React, { Component } from "react";
import Avatar from "./Avatar";

export default class ChatListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  selectChat(e) {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  }
  stateFunc(state) {
    if (state) return "online";
    else return "offline";
  }

  render() {
    return (
      <div
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        onClick={this.selectChat}
        className={`chatlist__item ${
          this.props.active ? this.props.active : ""
        } `}
      >
        <Avatar
          image={
            this.props.image ? this.props.image : "http://placehold.it/80x80"
          }
          isOnline={this.props.isOnline}
        />

        <div className="userMeta">
          <p>{this.props.name}</p>
          <span className="activeTime">
            {this.stateFunc(this.props.active)}
          </span>
        </div>
      </div>
    );
  }
}
