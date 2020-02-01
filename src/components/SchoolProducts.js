import React from 'react'
import ReactDom from "react-dom"
import Product from "./Product"
import schoolProductData from "../schoolProductsData"

function SchoolProducts(){
    //using es6 construct

    // const productComponents = schoolProductData.map((product) => {
    //     return (
    //         <Product key={product.id} name={product.name} price={product.price} description={product.description} />
    //     )
    
    // })

    //using the functional construct
    const productComponents = schoolProductData.map(function(product){
        return <Product name={product.name} price={product.price} description={product.description}/>;

    })

    return(
        <div>
            {productComponents}

        </div>
        
    )

}

export default SchoolProducts;