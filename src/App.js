import "./App.css";
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/chatBody";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="__main">
      <Nav />
      <ChatBody />
    </div>
  );
}

export default App;
