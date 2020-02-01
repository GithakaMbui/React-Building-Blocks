import React from "react";
import ReactDom from "react-dom";
import ToDoItem from "./ToDoItem";
import ToDosData from "../ToDosData";

//class based implemenattion

class ToDoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: ToDosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    // console.log("changed", id)
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })

  }

  render() {
    // const todoItems = ToDosData.map(item => <ToDoItem key={item.id} item={item}/>)
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />)

    return (
      <div className="todo-list">
        <h2
          style={{
            color: "violet"
          }}
        >
          {" "}
          To Do App{" "}
        </h2>

        {todoItems}

        {/* <ToDoItem />
                            <ToDoItem />
                            <ToDoItem />
                            <ToDoItem /> */}
      </div>
    );
  }
}

export default ToDoApp;
