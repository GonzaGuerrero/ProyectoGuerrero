import React,{useState} from 'react'
import './ItemCount.css'


export default function ItemCount(props) {
  
    return (
        <div className="itemCountContainer">
            <div className="itemCount">
                <button onClick={props.agregarCantidad} disabled={ props.cantidad >= props.stock } >+</button>
                <p> Total: {props.cantidad} </p>
                <button onClick= {props.restarCantidad} disabled={ props.cantidad <= 1 }>-</button>
            </div>
        </div>
      
    );
  }