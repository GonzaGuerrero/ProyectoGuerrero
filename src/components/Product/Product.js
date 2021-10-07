import React from 'react'
import './Product.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


const Product = (props) =>{
    return(
        <div className="tienda-item">
            <div className="itemHeader">
                <p>{props.title}</p>
                <Link to={`/item/${props.id}`} className="botonVer">Ver producto</Link>
            </div>
            <img src={props.img} alt={props.alt}></img>
            <div className="item-comprar" >
            <ItemCount price={props.price}/>
            </div>
        </div>
    )
}

export default Product