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
            gender: "",
            dietaryRestrictions: {
                isVegan: true,
                isKosher: true,
                isHalal: true,
                isLactoseFree: false
            }
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        // const { name, value } = event.target
        // this.setState({
        //     [event.target.name]: event.target.value

        // })
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState(prevState => {
                return {
                    dietaryRestrictions: {
                        ...prevState.dietaryRestrictions,
                        [name]: checked
                    }
                }
            })
            :
            this.setState({
                [name]: value
            })

    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.firstName} name="firstName" placeholder="firstName" onChange={this.handleChange}></input><br /><br />
                <input type="text" value={this.state.lastName} name="lastName" placeholder="lastName" onChange={this.handleChange}></input> <br /> <br />
                <label>Is Kosher? </label><input type="checkbox"></input> <br /> <br />
                <textArea placeholder="some default text"></textArea><br /><br />
                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        onChange={this.handleChange}
                        checked={this.state.dietaryRestrictions.isVegan}
                    /> Vegan?
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={this.handleChange}
                        checked={this.state.dietaryRestrictions.isLactoseFree}
                    /> Lactose Free?
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="isHalal"
                        onChange={this.handleChange}
                        checked={this.state.dietaryRestrictions.isHalal}
                    /> Halal?
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        onChange={this.handleChange}
                        checked={this.state.dietaryRestrictions.isKosher}
                    /> Kosher?
                </label><br /><br />
                <label>Male</label> <input type="radio" name="gender" value="male" onChange={this.handleChange}></input><br />
                <label>Female</label><input type="radio" name="gender" value="female" onChange={this.handleChange}></input><br /><br />
                <select value={this.state.location} name="location" onChange={this.handleChange}>
                    <option value="kenya">Please choose a destination</option>
                    <option value="kenya">Kenya</option>
                    <option value="newzealand">NewZealand</option>
                    <option value="canada">Canada</option>
                    <option value="norway">Norway</option>
                </select>
                <br />
                <br />
                {/* Create check boxes for dietary restrictions here */}
                <button>Submit</button>

                <h1> Your first name is {this.state.firstName}</h1>
                <h1> Your second name is {this.state.lastName}</h1>
                <h2> Your are a {this.state.gender}</h2>
                <h3> Your are from {this.state.location}</h3>
                <h3> The food is {this.state.dietaryRestrictions.array}</h3>
                <p> Vegan: {this.state.dietaryRestrictions.isVegan ? "Yes" : "No"} </p>
                <p> Halal: {this.state.dietaryRestrictions.isHalal ? "Yes" : "No"} </p>
                <p> Lactose Free: {this.state.dietaryRestrictions.isLactoseFree ? "Yes" : "No"} </p>
                <p> Kosher: {this.state.dietaryRestrictions.isKosher ? "Yes" : "No"} </p>


            </form>
        )
    }
}

export default TravelForm