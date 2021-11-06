import React, {useState} from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import CartContext from "../../context/CartContext"
import { useContext } from 'react/cjs/react.development';
import ItemCountNuevo from '../ItemCountNuevo/ItemCountNuevo'


const Product = (props) =>{
    const [cantidad,setCantidad]= useState(1) 
    const cartData= useContext(CartContext)

    const agregarCantidad = () =>{
        if(cantidad<props.stock){
            setCantidad (cantidad + 1)
        }
    }
    const restarCantidad = () =>{
        if(cantidad!==1){
            setCantidad (cantidad - 1)
        }else{} 
    }

    const productoActual =  {
        title: props.title,
        price: props.price,
        img: props.img,
        id: props.id,
        quantity:cantidad
    }
    const agregarAlCarrito =()=>{
        cartData.addCart(productoActual)
        console.log("informacion del producto: ", productoActual)
    }   



    return(
            <div className="tienda-item">
                <div className="itemHeader">
                    <p>{props.title}</p>
                    <Link to={`/item/${props.id}`} className="botonVer">Ver producto</Link>
                 </div>
                 <div className="image-container"><img src={props.img} alt={props.alt}></img></div>
                 <div className="item-comprar" >
                 <ItemCountNuevo cantidad={cantidad} agregarCantidad={agregarCantidad} restarCantidad={restarCantidad}  />
                </div>
                <div className= "containerAgregarCarrito1">
                    <div className="precio">${props.price*cantidad}</div>
                    <div onClick={agregarAlCarrito}  className="botonAgregarCarrito1">
                      <p> Agregar al carrito</p>
                    </div>
                </div>
            </div>
        
    )
}

export default Product