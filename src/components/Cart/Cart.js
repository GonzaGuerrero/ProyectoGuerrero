
import ProductoCart from "../Cart/ProductoCart"
import CartContext from "../../context/CartContext"
import CartList from "../CartList/CartList"
import CartPopUp from "../CartPopUp/CartPopUp"
import './Cart.css'

import db from "../../firebase"
import { collection, addDoc} from "firebase/firestore"

import { Link } from "react-router-dom"
import React, {useState, useContext} from "react"

export default function Cart(){

    const {listaItemsCart,clearCart,infoCliente} = useContext(CartContext)
    const [showPopup, setShowPopup]= useState (false)
    const [orderId, setOrderId]= useState("")



    let precioTotal= 0;
    listaItemsCart.forEach(function(item){

        precioTotal += (item.price*item.quantity ) ;

    });

    const newOrder = {
        buyer:infoCliente,
        items:listaItemsCart,
        total:precioTotal,
        date:new Date()
    }

    const finalizarCompra =()=>{
        pushOrderFirebase(newOrder)
    }

    const pushOrderFirebase = async(newOrder)=>{
        const orderFirebase = collection(db, "orders");
        const order = await addDoc(orderFirebase, newOrder)
        setOrderId(order.id)
        handlePopUp()
    }
    const handlePopUp = ()=>{
        showPopup? setShowPopup(false):setShowPopup(true)
    }
    return(
        <div className="contenedorCart"> 
            <div className="contenedorIzquierdo">
                <div className="contenedorHeader">     
                {listaItemsCart.length===0?"":  
                    <div onClick={clearCart} className="vaciarCarrito">Vaciar carrito</div> 
                }
                </div>
                {listaItemsCart.length===0?
                <div className="contenedorCarritoVacio"> 
                    <div>Tu carrito está vacío</div>
                    <Link to={"./"} > Hace click aquí para volver a la tienda </Link>
                </div> :
                <div className="contenedorItems">
                    {listaItemsCart.map( (item)=>{
                            return(
                                    <ProductoCart quantity={item.quantity} key={item.id} id={item.id} title={item.title} img={item.img} alt={item.title} price={item.price} />
                            )
                        })}
                </div>
                } 
            </div>
            <div className="contenedorDerecho">
                <div className="contenedorCliente">
                    <div className="contenedorAgregarInfo">
                        <Link to={"./form"}><button>Agregar información de envío</button> </Link>
                    </div>
                    <div className="infoCliente">
                        {infoCliente.length===0?
                        <div className="noHayInfo">
                            <div> Para completar tu pedido debes proporcionar información de envío</div>
                            <div className="noHayInfoPico"/>
                        </div>: 
                        <ul>
                        <li>Nombre: {infoCliente.name} {infoCliente.lastname} </li>
                        <li>Email: {infoCliente.email}</li>
                        <li>Teléfono: {infoCliente.phone}</li>
                    </ul>
                        }

                    </div>
                </div>
                <div className="contenedorLista" >
                    {listaItemsCart.map( (item)=>{
                        return(
                            <CartList key={item.id} title={item.title} price={item.price} quantity={item.quantity}/>
                        )
                    })}
                </div>
                <div className="contenedorTotal">
                    <div>Total: ${precioTotal}</div>
                    {listaItemsCart.length===0||infoCliente.length===0 ?console.log(""):
                    <div className="botonFinalizarCompra" onClick={finalizarCompra}> Finalizar compra </div>
                    }
                </div>
            </div>
            <CartPopUp show={showPopup} orderId={orderId} handlePopUp={handlePopUp}/>
        </div>
    )
}