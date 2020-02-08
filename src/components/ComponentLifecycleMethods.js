import React, { Component } from "react"

// A lesson on component lifecycle methods 
class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    //the first time the component shows up, React will run the componentDidMount method
    //this method will only run once, it does not mount and remount
    //it's mostly used for API calls when you need to get data from an external source
    componentDidMount() {

    }

    shouldComponentUpdate() {
        //rerenders if react finds a reason to rerender
        //receives the incoming props and incoming state
        //returns true if we wants it to update
        //returns false if we dont want it to update
    }

    componentWillUnmount() {
        //used to do some kind of clean up of anything that will lead to clutter in the DOM
        //exapmle:used to remove event listeners
    }

    componentDidMount() {
        //Get the data I need to correctly display
        //commonly used
    }

    getSnapshotBeforeUpdate() {
        //get a backup of the current way things are

    }

    componentWillReceiveProps(nextProps) {
        //everytime time this component is receiving props from a parent component
        //receives a parameter called nextProps
        //has been depreciated by the React Team
        if (nextProps.whatever !== this.props.whatever) {
            //do something import here
        }
    }
    //render is a lifecycle method that renders as many times as possible
    //it's job is to determine what gets rendered to the screen
    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App