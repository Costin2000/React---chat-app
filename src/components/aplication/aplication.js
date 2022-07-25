import "./aplication.css";
import Nav from "../nav/Nav";
import ChatBody from "../chatBody/chatBody";
import React, { Component } from "react";


export default class Application extends Component {
  render(){
    return (
      <div className="__main">
        <Nav />
        <ChatBody />
      </div>
    );
  }
}