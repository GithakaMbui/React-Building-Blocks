import React, { Component } from "react"

class Forms extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                {/* input type/element of a form */}
                <input type="text" value={this.state.firstName} name="firstName" placeholder="FirstName" onChange={this.handleChange} />
                <br />
                <input type="text" value={this.state.lastName} name="lastName" placeholder="lastName" onChange={this.handleChange} />
                <h1>
                    {this.state.firstName}
                    {this.state.lastName}

                </h1>
                {/* text area element  of a form*/}
                <textarea value={"some default value"} onChange={this.handleChange}>

                </textarea>
                <br />

                {/* check box element/type of a form  */}
                <label>
                    <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange} />  Is Friendly?
                    <br />
                    <br />
                </label>


                {/* radio element */}
                <label>
                    <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} /> male?
                </label>

                <label>
                    <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange} /> female?
                </label>

                <h1> {this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender} </h2>


            </form >
        )
    }
}

export default Forms