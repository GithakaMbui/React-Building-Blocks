import React from "react"
import ReactDom from "react-dom"
import ContactCard from "./ContactCard"

function CatContact(){
    return(
        <div className = "contacts">
    
            <ContactCard contact = {{name:"Mr. Whiskerson", phone:"0711234576", email:"whiskerson@gmail.com"}} />

            <ContactCard contact = {{name:"Mr. Fluf Kins", phone:"0723456789", email:"flufkins@gmail.com"}} />

            <ContactCard contact = {{name:"Mr. Mr Destroyer", phone:"0734567890", email:"destroyer@gmail.com"}} />

            <ContactCard contact = {{name:"Mr Maguire", phone:"07456789", email:"maguire@gmail.com"}} />
               
            
            </div>

        

    )
}

export default CatContact;