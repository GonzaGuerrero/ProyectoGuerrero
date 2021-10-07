import React from 'react'
import './ItemCountNuevo.css'


export default function ItemCountNuevo(props) {
    
    return (
        <div >
            <div className="itemCountNuevo">
                <button onClick= {props.restarCantidad} disabled={ props.cantidad <= 1 }>-</button>
                <p> Total: {props.cantidad} </p>
                <button disabled={ props.cantidad >= 20 } onClick= {props.agregarCantidad}>+</button>
            </div>
        </div>
      
    );
  }