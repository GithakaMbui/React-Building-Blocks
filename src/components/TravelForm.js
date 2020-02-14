import React, { Component } from "react"

// Challenge: Create a form to take in firstname, LastName, Age, Dietary Consideration and Country
//Create radio button for gender
//Create select box for location
//create a method to handle changes in the select, input and radio buttons

class TravelForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            location: "",
            gender: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        // const { name, value } = event.target
        this.setState({
            [event.target.name]: event.target.value

        })

    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.firstName} name="firstName" placeholder="firstName" onChange={this.handleChange}></input><br /><br />
                <input type="text" value={this.state.lastName} name="lastName" placeholder="lastName" onChange={this.handleChange}></input> <br /> <br />
                <label>Is Kosher? </label><input type="checkbox"></input> <br /> <br />
                <textArea placeholder="some default text"></textArea><br />
                <label>Male</label> <input type="radio" name="gender" value="male" onChange={this.handleChange}></input><br />
                <label>Female</label><input type="radio" name="gender" value="female" onChange={this.handleChange}></input><br /><br />
                <select onChange={this.handleChange}>
                    <option value="kenya">Kenya</option>
                    <option value="newzealand">NewZealand</option>
                    <option value="canada">Canada</option>
                    <option value="norway">Norway</option>
                </select>
                <br />
                <br />
                <button>Submit</button>

                <h1> Your first name is {this.state.firstName}</h1>
                <h1> Your second name is {this.state.lastName}</h1>
                <h2> Your are a {this.state.gender}</h2>
                <h3> Your are from {this.state.location}</h3>


            </form>
        )
    }
}

export default TravelForm