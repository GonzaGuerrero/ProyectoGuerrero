import React,{useState} from 'react'
import './ItemCount.css'


export default function ItemCount(props) {
    const [cantidad,setCantidad]= useState(1) 
    const [stock,setStock]=useState(20)

    const agregarCantidad = () =>{
        if(cantidad<stock){
            setCantidad (cantidad + 1)
        }
    }
    const restarCantidad = () =>{
        if(cantidad!=1){
            setCantidad (cantidad - 1)
        }else{} 
      }
    return (
        <div className="itemCountContainer">
            <div className="itemCount">
                <button disabled={ cantidad >= 20 } onClick= {agregarCantidad}>+</button>
                <p> Total: {cantidad} </p>
                <button onClick= {restarCantidad} disabled={ cantidad <= 1 }>-</button>
            </div>
            <div className= "containerAgregarCarrito">
                <div className="precio">{props.price}</div>
                <div className="botonAgregarCarrito">
                <p> Agregar al carrito</p>
                </div>
            </div>
        </div>
      
    );
  }