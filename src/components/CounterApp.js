import React from "react";
import ReactDom from "react-dom";

// function CounterApp() {
//   return (
//     <div>
//       <img src="../images/Githaka.jpg" />
//       <br />
//       <br />
//       <button onClick = {function() {console.log("I have been clicked!")}}> Click Me!</button>
//       <h1></h1>
//       <h1></h1>
//     </div>
//   );
// }

class CounterApp extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>

      </div>
    )
  }


}

export default CounterApp;
