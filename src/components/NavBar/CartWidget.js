import React from 'react'
import imagenCarrito from '../../assets/carrito.png';
import { Link } from 'react-router-dom';

const CartWidget = () =>{
    return(
        <div className="cart-container">
            <Link to ={'/cart'}>
            <img src={imagenCarrito} ></img>
            </Link>
        </div>
    )
}

export default CartWidget