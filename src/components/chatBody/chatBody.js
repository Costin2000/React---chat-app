import React, { Component } from "react";
import ChatContent from "../chatContent/ChatContent";
import ChatList from "../chatList/ChatList";
import UserProfile from "../userProfile/UserProfile";
import "./chatBody.css";

//let location = useLocation();
export default class chatBody extends Component {
  chatItms = [];

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
    }
  ];

  groups = [
    {
      image:
        "https://upb.ro/wp-content/uploads/2018/03/facultatea_automatica_2018.jpg",
      id: 11,
      name: "Facultate",
      active: false,
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

  newMessage(message) {

    if(this.state.isFriend) {
      const friends_conv = this.state.friends_chats
      friends_conv[this.state.current_chat_idx] = friends_conv[this.state.current_chat_idx].concat([message])
      this.setState({
        friend_chats : friends_conv
      })
    } else {
      const group_conv = this.state.group_chats
      group_conv[this.state.current_chat_idx] = group_conv[this.state.current_chat_idx].concat([message])
      this.setState({
        group_chats : group_conv
      })
    }
    /*
    const currMessages = this.state.chat;
    this.setState({
      chat: currMessages.concat([message])
    })
    */
  }

  select_chats() {
    this.setState({
      selected_chats: true
    })
  }

  select_groups() {
    this.setState({
      selected_chats: false
    })
  }

  handleClick(i) {
    if(this.state.selected_chats) {
      const friends_aux = this.state.friends;
      for(let j = 0; j < friends_aux.length; j++) {
        if(friends_aux[j].id === i)
          friends_aux[j].active = true;

        else
          friends_aux[j].active = false;
      }

      const groups_aux = this.state.groups;
      for(let j = 0; j < groups_aux.length; j++) {
          groups_aux[j].active = false;
      }

      this.setState({
        groups: groups_aux,
        friends: friends_aux,
      })
    } else {
      const groups_aux = this.state.groups;
      for(let j = 0; j < groups_aux.length; j++) {
        if(groups_aux[j].id === i)
          groups_aux[j].active = true;
        else
          groups_aux[j].active = false;
      }

      const friends_aux = this.state.friends;
      for(let j = 0; j < friends_aux.length; j++) {
          friends_aux[j].active = false;
      }

      this.setState({
        groups: groups_aux,
        friends: friends_aux,
      })
    }

    this.decideChat()
  }

  decideChat() {
    if(this.state.selected_chats) {
      const friends = this.state.friends
      for(let i = 0; i < friends.length; i++) {
        if(friends[i].active)
          this.setState({
            current_chat_idx: i,
            isFriend: true,
            current_chat: friends[i]
          })

      }

      const groups = this.state.groups
      for(let i = 0; i < groups.length; i++) {
        if(groups[i].active)
          this.setState({
            current_chat_idx: i,
            isFriend: false,
            current_chat: groups[i]
          })
      }
    }

    const groups = this.state.groups
    for(let i = 0; i < groups.length; i++) {
      if(groups[i].active)
        this.setState({
          current_chat_idx: i,
          isFriend: false,
          current_chat: groups[i]
        })
    }

    const friends = this.state.friends
    for(let i = 0; i < friends.length; i++) {
      if(friends[i].active)
        this.setState({
          current_chat_idx: i,
          isFriend: true,
          current_chat: friends[i]
        })
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      friends: this.allChatUsers,
      groups: this.groups,
      friends_chats: [[], [{
        key: 2,
        image:
          "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
        type: "other",
        msg: "Hi. How are you?",
      }], []],
      group_chats: Array(3).fill([]),
      selected_chats: true,
      current_chat: this.allChatUsers[0],
      current_chat_idx: 0,
      isFriend: true,
    }
  }

  render() {
    return (
      <div className="main__chatBody">
        <ChatList
          list_of_chats = {this.state.selected_chats? this.state.friends : this.state.groups}
          select_chats = {() => this.select_chats()}
          select_groups = {() => this.select_groups()}
          selected_chats = {this.state.selected_chats}
          handle_click = {(i) => this.handleClick(i)}
        />
        <ChatContent
          chat={this.state.isFriend? this.state.friends_chats[this.state.current_chat_idx] : this.state.group_chats[this.state.current_chat_idx]}
          newMessage = {(mssg) => this.newMessage(mssg)}
          currentChat = {this.state.current_chat}
        />
        <UserProfile
        currentChat = {this.state.current_chat}/>
      </div>
    );
  }
}
