import React from "react"
import ReactDom from "react-dom"

function ToDoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textdecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)}></input>
            {/* <p style={{ color: "green" }}>{props.item.text}</p> */}
            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>

    )
}

export default ToDoItem;