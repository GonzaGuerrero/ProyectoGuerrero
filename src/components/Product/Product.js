import React from 'react'
import './Product.css'


const Product = (props) =>{
    return(
        <div className="tienda-item">
            <p>{props.title}</p>
            <img src={props.img} ></img>
        </div>
    )
}

export default Product