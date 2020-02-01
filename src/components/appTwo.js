import React, {Component} from "react"

// function App(props){
//     return(
//         <div>
//             <h1>Code goes here {props.whatever}</h1>
                
//         </div>
//     )
// }

// class App extends Component{

//     yourMethodHere(){

//     }

//     render(){
//         const style = this.yourMethodHere()
//         return(
//             <div>
//                 <h1>Code goes here</h1>
//             </div>
//         )

//     }
// }


//#1 
class App extends React.Component{
    render(){
        return(
            <div>
                <Header username="Githaka"/>
                <Greeting />
            </div>
        )

    }
}
    
// #2 Converting functional components to class based componets

class Header extends React.Component{
    render(){
        return(
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )

    }  
}

//#3 
class Greeting extends Component{
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12){
            timeOfDay = "morning"
        }else if (hours >=12 && hours <17){
            timeOfDay = "Afternoon"
        } else {
            timeOfDay = "night"
        }

        return(
            <h1>Good {timeOfDay} to you sir/madam!</h1>
        )

    }
    
}




export default App