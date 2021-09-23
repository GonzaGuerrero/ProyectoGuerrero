import React,{useState} from 'react'
import './ItemCount.css'


export default function ItemCount() {
    const [cantidad,setCantidad]= useState(0) 
    const agregarCantidad = () =>{
        setCantidad (cantidad + 1)
    }
    const restarCantidad = () =>{
        setCantidad (cantidad - 1)
      }
    return (
        <div className="itemCountContainer">
            <div className="itemCount">
                <button onClick= {agregarCantidad}>+</button>
                <p> Total: {cantidad} </p>
                <button onClick= {restarCantidad}>-</button>
            </div>
            <div className= "containerAgregarCarrito">
                <div className="botonAgregarCarrito">
                <p> Agregar al carrito</p>
                </div>
            </div>
        </div>
      
    );
  }