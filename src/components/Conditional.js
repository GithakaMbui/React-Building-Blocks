import React from "react"

function Conditional(props) {
    //tenary opeator instead of if
    return (
        <div>
            <h1>Navbar</h1>
            {props.isLoading === true ? <h1>Loading ...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
            <h1>Footer</h1>
        </div>
    )

    // if (props.isLoading === true) {
    //     return (
    //         <h1>Loading</h1>
    //     )
    // } else {
    //     return (
    //         <h1>Some cool stuff about conditional rendering</h1>

    //     )
    // }

}

export default Conditional