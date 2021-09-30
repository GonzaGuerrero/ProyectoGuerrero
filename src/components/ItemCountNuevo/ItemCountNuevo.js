import React,{useState} from 'react'
import './ItemCountNuevo.css'


export default function ItemCountNuevo(props) {
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
        <div className="itemCountNuevoContainer">
            <div className="precio">
                <p>{props.price}</p> 
            </div>
            <div className="containerBottom">
                <div className="itemCountNuevo">
                    <button onClick= {restarCantidad} disabled={ cantidad <= 1 }>-</button>
                    <p> Total: {cantidad} </p>
                    <button disabled={ cantidad >= 20 } onClick= {agregarCantidad}>+</button>
                </div>
                <div className= "containerAgregarCarrito">
                    <div className="botonAgregarCarrito">
                    <p> Agregar al carrito</p>
                    </div>
                </div>
            </div>
        </div>
      
    );
  }