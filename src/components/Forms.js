import React, { Component } from "react"

class Forms extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input type="text" name="firstName" placeholder="FirstName" onChange={this.handleChange} />
                <br />
                <input type="text" name="lastName" placeholder="lastName" onChange={this.handleChange} />
                <h1>
                    {this.state.firstName}
                    {this.state.lastName}

                </h1>
            </form>
        )
    }
}

export default Forms