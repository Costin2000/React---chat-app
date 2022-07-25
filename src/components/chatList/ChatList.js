import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  selectChats = () => {
    this.props.select_chats()
  }

  selectGroups = () => {
    this.props.select_groups()
  }

  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <div
            onClick= {() => this.selectChats()}
            className={`option ${this.props.selected_chats ? "active" : ""}`}
          >
            Chats
          </div>
          <div
            onClick={() => this.selectGroups()}
            className={`option ${this.props.selected_chats ? "" : "active"}`}
          >
            Groups
          </div>
        </div>
        <div className="chatList__search">
          <div className="search__wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.props.list_of_chats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
                onClick = {() => this.props.handle_click(item.id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
