import React from 'react'
import './Product.css'
import ItemCount from '../ItemCount/ItemCount'


const Product = (props) =>{
    return(
        <div className="tienda-item">
            <p>{props.title}</p>
            <img src={props.img} alt={props.alt}></img>
            <div className="item-comprar" >
            <ItemCount price={props.price}/>
            </div>
        </div>
    )
}

export default Product