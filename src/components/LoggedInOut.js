import React, { Component } from "react"
// Challenge
// Given a stateless function component
// 1.Follow the steps necessary to add state to it,
// 2.Have a state keep track of whether the user is logged in or out,
// 3. Add a button that logs the user in/out
// a. extra challenge make display "log in " if they are not logged in and "log out " if they are logged in

class LoggedInOut extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: true,
            name: "Githaka"
        }
    }

    //this.onHandleChange = this.onHandleChange.bind(this)

    onHandleChange(event) {


    }

    render() {
        return (
            <div>
                <hi>Hi {this.state.name} {this.state.loggedIn ? "You are currently logged In" : "You are logged out"}</hi><br /><br />
                <button onHandleChange=""> Click to {this.state.loggedIn ? "Log out" : "Log in"}</button>
            </div>
        )
    }

}

export default LoggedInOut