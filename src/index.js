import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import MyStack from "./components/MyStack";
import Psalm25 from "./components/Psalm25";
import Website from "./components/Website";
import ToDoApp from "./components/ToDoApp";
import CatContact from "./components/CatContact";
import JokeApp from "./components/JokeApp";
import SchoolProducts from "./components/SchoolProducts";
import ClassBasedApp from "./components/ClassBasedApp";
import AppTwo from "./components/appTwo";
import StateApp from "./components/StateApp";
import CounterApp from "./components/CounterApp";
import ConditionalRendering from "./components/ConditionalRendering";
import LoggedInOut from "./components/LoggedInOut";

function MyApp() {
  return (
    <ul>
      <li> 1 </li> <li> 2 </li> <li> 3 </li> <li> 4 </li>{" "}
    </ul>
  );
}

function MyInfo() {
  return (
    <div>
      <h1> Githaka Mbui </h1> <p> A fullstack JS engineer </p>{" "}
      <ul>
        <li> Thailand </li> <li> Norway </li> <li> Germany </li>{" "}
      </ul>{" "}
    </div>
  );
}

//practising inline styling
function StyleApp() {
  // const firstName = "Githaka";
  // const lastName = "Mbui";
  const date = new Date(2019, 11, 28, 10);
  const hours = date.getHours();
  let timeOfDay;

  const styles = {
    // color:"purple",
    // backgroundColor:"Black"
  };

  if (hours < 12) {
    timeOfDay = "Morning";
    styles.color = "green";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
    styles.color = "blue";
  } else {
    timeOfDay = "night";
    styles.color = "orange";
  }

  // const styles = {
  //     color:"purple",
  //     backgroundColor:"Black"

  // }

  return (
    // <h1> Hello {firstName + "" + lastName} </h1>
    // <h1> It is currently about {date.getHours() %12 } o'clock</h1>
    <h1 style={styles}> Good {timeOfDay}! </h1>
  );
}

//ReactDOM.render(<div><p>myNewP</p><h1>Hello World</h1><p>This paragraph will display on both my Desktop Chrome and Mobile Chrome</p></div>, document.getElementById('root'));

//ReactDOM.render(<MyApp/>, document.getElementById("root"));

//ReactDOM.render(<MyStack/>, document.getElementById("root"));

//ReactDOM.render(<Psalm25 />, document.getElementById("root"));

//ReactDOM.render(<ToDoApp />, document.getElementById("root"));

// ReactDOM.render(<StyleApp/>, document.getElementById("root"));

// ReactDOM.render(<CatContact/>, document.getElementById("root"));

//ReactDOM.render(<JokeApp/>, document.getElementById("root"));

// ReactDOM.render(<SchoolProducts/>, document.getElementById("root"));

//ReactDOM.render(<AppTwo/>, document.getElementById("root"));

//</h1>ReactDOM.render( < StateApp / > , document.getElementById("root"));

//ReactDOM.render(<CounterApp />, document.getElementById("root"));

//ReactDOM.render(<ConditionalRendering />, document.getElementById("root"));

ReactDOM.render(<LoggedInOut />, document.getElementById("root"));

var myNewP = document.createElement("p");
myNewP.innerHTML = "This is my new paragraph.";
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
