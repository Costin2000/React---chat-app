import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 1,
      name: "Tim Hover",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 2,
      name: "Ayub Rossi",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 3,
      name: "Hamaad Dejesus",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg",
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 5,
      name: "Elsa Black",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6TMlVfgYTMFTuxTwz_P73T_kWqP7WgzqRHw&usqp=CAU",
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAfi_n9967kBmtkbPfHvVKDXHKX_TwfhktTw&usqp=CAU",
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];
  groups = [
    {
      image:
        "https://upb.ro/wp-content/uploads/2018/03/facultatea_automatica_2018.jpg",
      id: 11,
      name: "Facultate",
      active: true,
      isOnline: true,
    },
    {
      image: "https://docplayer.ro/docs-images/102/153507971/images/1-0.jpg",
      id: 12,
      name: "Liceu",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/CD_icon_test.svg/1200px-CD_icon_test.svg.png",
      id: 13,
      name: "Grupul clasei",
      active: false,
      isOnline: false,
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
      allGroups: this.groups,
      selectedChats: true,
    };
  }

  selectChats() {
    this.setState({
      selectedChats: true,
    });
  }

  selectGroups() {
    this.setState({
      selectedChats: false,
    });
  }

  render() {
    const listToRender = this.state.selectedChats
      ? this.state.allChats
      : this.state.allGroups;

    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <div
            onClick={() => this.selectChats()}
            className={`option ${this.state.selectedChats ? "active" : ""}`}
          >
            Chats
          </div>
          <div
            onClick={() => this.selectGroups()}
            className={`option ${this.state.selectedChats ? "" : "active"}`}
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
          {listToRender.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
