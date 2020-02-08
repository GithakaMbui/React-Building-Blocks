import React, { Component } from "react"
import Conditional from "./Conditional"

class ConditionalRendering extends Component {
    constructor() {
        super()
        this.state = {
            // isLoading: false
            unreadMessages: ["a", "b"]
        }
    }

    // componentDidMount() 
    // {
    //     setTimeout(() => {
    //         this.setState({
    //             isLoading: false
    //         })
    //     }, 1500
    //     )
    // }

    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 ?
                        <h2>You have {this.state.unreadMessages.length} unread messages!</h2> :
                        null
                }
                {/* <Conditional isLoading={this.state.isLoading} /> */}
            </div>
        )
    }
}

export default ConditionalRendering