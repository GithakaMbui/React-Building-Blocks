import React from "react"
import ReactDom from "react-dom"

function ContactCard(props){
    console.log(props);
    return(
        <div className = "contact-card">
                
                <h3>{props.contact.name}</h3>
                <p>{ props.contact.phone}</p>
                <p>{props.contact.email}</p>
            </div>
    )
}

export default ContactCard




