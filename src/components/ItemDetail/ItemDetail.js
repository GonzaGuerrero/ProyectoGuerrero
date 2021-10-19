import React,{useState} from 'react'
import ItemCountNuevo from '../ItemCountNuevo/ItemCountNuevo'
import { Link } from 'react-router-dom';
import './itemDetail.css'
import CartContext from "../../context/CartContext"
import { useContext } from 'react/cjs/react.development';
const ItemDetail = (props) =>{

    const [cantidad,setCantidad]= useState(1) 
    const [stock,setStock]=useState(20)
    const cartData= useContext(CartContext)
    const [mostrarBoton, setMostrarBoton]= useState(true)

    const agregarCantidad = () =>{
        if(cantidad<stock){
            setCantidad (cantidad + 1)
        }
    }
    const restarCantidad = () =>{
        if(cantidad!==0){
            setCantidad (cantidad - 1)
        }else{} 
      }
    const productoActual =  {
            title: props.datos?.title,
            price: props.datos?.price,
            img: props.datos?.img,
            id: props.datos?.id,
            quantity:cantidad
    }
    
    const agregarAlCarrito =()=>{
        cartData.addCart(productoActual)
        setMostrarBoton(false)
    }

    console.log("info del producto actual", productoActual)

    return(
        <div className="itemDetail">
                <div className="imageContainer">
                    <img src={props.datos?.img} alt={props.datos?.title}></img> 
                </div>
                <div className="infoContainer">
                    <div className="titleContainer">
                        <p>{props.datos?.title}</p>
                    </div>
                    <div className="itemCountNuevoContainer">
                        <div className="precio">
                            <p>${props.datos?.price * cantidad}</p> 
                        </div>
                        <div className="containerBottom">
                             
                            <ItemCountNuevo cantidad={cantidad} agregarCantidad={agregarCantidad} restarCantidad={restarCantidad} price={props.datos?.price}/>
                            
                            {mostrarBoton? 
                            <div className= "containerAgregarCarrito">
                            <button onClick={agregarAlCarrito} className="botonAgregarCarrito">
                                <p> Agregar al carrito</p>
                            </button>
                            </div>:
                            <div className="containerIrAlCarrito">
                                <Link to ={'/cart'}>
                                    <div className="irAlCarrito">
                                        <p>Finalizar Compra</p>
                                    </div>                              
                                </Link>
                             </div>
                        }                            
                        </div>
                    </div>                                                       

                    
                </div>
        </div>
    )
}

export default ItemDetail