import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: "yes",
      age: 9,
      isLoggedIn: false
    };
  }

  render() {
    let wordDisplay;
    if (this.state.isLoggedIn === true) {
      wordDisplay = "in";
    } else {
      wordDisplay = "out";
    }

    return (
      <div>
        <h1> Is state important ? {this.state.answer} </h1>
        <h1>Is Githaka of above {this.state.age} years</h1>
        <h1>You are currently logged {wordDisplay} </h1>
      </div>
    );
  }
}

export default App;
