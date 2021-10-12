import React from "react"
import './ProductoCart.css'
import CartContext from "../../context/CartContext"
import { useContext } from 'react/cjs/react.development';

export default function ProductoCart(props){

    const {removeItem}= useContext(CartContext)

    return(
        <div className="contenedorProductoCart">
            <div className="contIzquierdo">
                <div className="contTitulo">{props.title}</div>
                <div className="contPrecio">{props.price} </div>
                <div>Cantidad: {props.quantity} </div>
            </div>
            <div className="contDerecho">
                <img src={props.img} alt={props.alt}/>

            </div>
            <button className="button" onClick={ () => removeItem(props.id) } >x </button> 
        </div>
    )
}
