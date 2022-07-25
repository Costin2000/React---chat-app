import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
function App() {
  return (
    <LOGIN/>
  );
};

export default App;
