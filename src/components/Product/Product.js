import React from 'react'
import './Product.css'
import '../ItemCount/ItemCount'
import ItemCount from '../ItemCount/ItemCount'


const Product = (props) =>{
    return(
        <div className="tienda-item">
            <p>{props.title}</p>
            <img src={props.img} ></img>
            <div className="item-comprar" >
            <ItemCount/>
            </div>
        </div>
    )
}

export default Product