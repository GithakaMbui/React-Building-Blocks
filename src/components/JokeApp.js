import React from "react"
import ReactDom from "react-dom"
import Joke from "./Joke"
// import JokesData from "./jokesData"
import jokesData from "../JokesData"

function JokeApp() 
{

    //To test the map higher function
    // const nums = [1,2,3,4,5,6,7];
    // const doubled = nums.map(function(num){
    //     return num * 2;
    // })

    // console.log(doubled);

    const jokeComponents = jokesData.map((joke) => {
        return (
            <Joke key= {joke.id} question={joke.question} punchline={joke.punchline} />
        )

    })
  
  
    return(
            <div>
                {/* <Joke question= "What is your name?" punchline="Naitwa Naliaka" />
                <Joke question="Watoke wapi Naliaka?" punchline= "Kakamega baby" />
                <Joke question= "Jee uko na mtu Naliaka" punchline="Hapana sina mtu, je wewe?" />
                <Joke question= "Je wasoma wapi" punchline="Maseno" /> */}

                {jokeComponents}

            </div>
            
        
    )
}

export default JokeApp;