import React from "react"

function Product(props){
    return(
        <div>
            <h1 style={{color:"blue"}}>Name: {props.name } </h1>
            <h1 style={{color:"green"}}> price: {props.price.toLocaleString("en-US", {style: "currency", currency:"KSH"}) }</h1>
            <h3 style={{color:"grey"}}>Description: {props.description } </h3>

            <br/>
        </div>

        
    )
}

export default Product