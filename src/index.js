import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Application from "./components/aplication/aplication";
import LoginPage from "./components/loginPage/LoginPage"
import RegisterPage from "./components/registerPage/RegisterPage";
import ForgottenPassPage from "./components/forgotPassword/ForgottenPass";
const LOGIN = () => {
  return (
    <LoginPage/>
  )
};

const REGISTER = () => {
  return (
    <RegisterPage/>
  )
};

const FORGOTPASS = () => {
  return (
    <ForgottenPassPage/>
  )
};

const APP = () => {
  return (
    <Application/>
  )
}

ReactDOM.render(

  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
  <Router>
    <Routes>
      <Route path='/' element = {<LOGIN/>}></Route>
      <Route path='/register' element = {<REGISTER/>} ></Route>
      <Route path='/login' element = {<LOGIN/>} ></Route>
      <Route path='/forgotpass' element = {<ForgottenPassPage/>} ></Route>
      <Route path='/chat' element = {<APP/>}></Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
