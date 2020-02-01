import React, {Component} from 'react'
import ReactDom from "react-dom"

class ClassBasedApp extends React.Component {
    render() {
        return (
            <div>
                <h1> </h1>
            </div>
        )
    }
}

// class Header extends React.Components{
//     render(){
//         return(
//             <div> Welcome, </div>
//         )
//     }
// }

class StyleApp extends Component{
    render()
    {
        // const firstName = "Githaka";
    // const lastName = "Mbui";
    const date = new Date(2019, 11, 28, 10);
    const hours = date.getHours();
    let timeOfDay;

    const styles = {
        // color:"purple", 
        // backgroundColor:"Black"
        
    }
    
    if (hours < 12){
        timeOfDay = "Morning";
        styles.color="green";
    }else if (hours >= 12 && hours < 17){
        timeOfDay = "Afternoon";
        styles.color="blue";
        
    }else{
        timeOfDay = "night";
        styles.color="orange";
    }

    // const styles = {
    //     color:"purple", 
    //     backgroundColor:"Black"
        
    // }

    return(
        // <h1> Hello {firstName + "" + lastName} </h1>
        // <h1> It is currently about {date.getHours() %12 } o'clock</h1>
        <h1 style={styles}> Good {timeOfDay} !</h1>

    )

    }
    
}



export default ClassBasedApp