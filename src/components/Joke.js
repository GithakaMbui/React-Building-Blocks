import React from "react"

function Joke(props){
    return(
        <div>
            <h1>{props.question } </h1>
            <h1 style={{color:"green"}}> {props.punchline }</h1>
            <br/>
        </div>

        
    )
}

export default Joke