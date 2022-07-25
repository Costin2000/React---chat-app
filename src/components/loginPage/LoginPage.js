import './loginPage.css';
import profile from "../../images/profile_img.png";
import React from "react";
import { useNavigate } from "react-router-dom";



function LoginPage() {
  let login_in = React.createRef();
  let password_in = React.createRef();
  let navigate = useNavigate();

  let users = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 1,
      userName: "BrebuCostin",
      password: "iLoveIp",
      name: "Costin Brebu",
      friends:
      [
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
      ],
      groups:
      [
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
        }
      ],
      friend_chats: [
        [
          {
            key: 1,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
            type: "",
            msg: "Hey, how are you?",
          },
          {
            key: 2,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "I am preparing to go out. ",
          },
          {
            key: 3,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "Would you like to join me?",
          },
          {
            key: 4,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
            type: "",
            msg: "Yeaaahhh, lets gooo!",
          },
        ],
        []
      ],
      group_chats: [[],[]]
    }
  ]

  const routeChange = () =>{

    let login_field = login_in.current.value;
    let register_field = password_in.current.value;
    console.log(login_field);
    console.log(register_field);
    let path = `/chat`;
    navigate(path, {state: users[0]});
  }

    return (
      <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile"/>
            </div>
          </div>

          <div>
            <h1>Login Page</h1>
            <div>
              <input type="text" ref={login_in} placeholder="user name" className="name"/>
            </div>
            <div className="second-input">
              <input type="password" ref={password_in} placeholder="password" className="name"/>
            </div>
            <div className="login-button">
              <button className="bttn_login" onClick={routeChange}>Login</button>
            </div>

              <p className="link">
                <a href="/forgotpass" className='link_login'>Forgot password?</a> Or <a className='link_login' href="/register">Sign Up</a>
              </p>


          </div>
        </div>
      </div>
      </div>
    );
}

export default LoginPage;
