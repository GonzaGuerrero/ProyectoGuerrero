import React,{useState} from 'react'
import './ItemCount.css'


export default function ItemCount() {
    const [cantidad,setCantidad]= useState(1) 
    const [stock,setStock]=useState(20)
    const [disabledButton, setDisabled] = useState (false)

    const agregarCantidad = () =>{
        if(cantidad<stock){
            setCantidad (cantidad + 1)
        }else {
            setDisabled (disabledButton=true)
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
                <button disabled={disabledButton} onClick= {agregarCantidad}>+</button>
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