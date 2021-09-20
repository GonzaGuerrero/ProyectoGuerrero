import React from 'react'
import imagenCarrito from '../../assets/carrito.png';

const CartWidget = () =>{
    return(
        <div className="cart-container">
            <img src={imagenCarrito} ></img>
        </div>
    )
}

export default CartWidget