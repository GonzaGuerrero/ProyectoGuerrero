import React, {useContext} from "react"
import ProductoCart from "../Cart/ProductoCart"
import CartContext from "../../context/CartContext"
import "./CartWidget.css"
import { Link } from 'react-router-dom';
import trashIcon from '../../assets/trashicon.png';

export default function CartWidget({show, close}){

    const {listaItemsCart,clearCart} = useContext(CartContext)

    return(
        <div className={`contenedorCartWidget ${show?`active`:`inactive`}`}> 
            <div className="contenedorPrincipal">
                <div className="contenedorTop">
                    <button onClick={close} className="cerrarCarrito">x</button>
                    <div onClick={clearCart} id="vaciarCarrito" className="vaciarCarrito">
                        <img src={trashIcon} alt="Vaciar carrito" ></img>
                    </div>
                </div>
                <div className="itemContainer">
                {listaItemsCart.length===0?
                <div className="vacio1">Tu carrito está vacío</div>:
                    listaItemsCart.map( (item)=>{
                        return(
                                <ProductoCart quantity={item.quantity} key={item.id} id={item.id} title={item.title} img={item.img} alt={item.title} price={item.price} />
                        )
                    })
                }
                </div>
                <div className="contenedorBottom">
                    
                    <Link to={"../cart"}>
                        <div className="irCarrito" onClick={close}>Ir al carrito</div>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}









//import React from 'react'
//import Cart from '../Cart/Cart'
//const CartWidget = ({show, close}) =>{
//    return(
  //      <>
    //      <Cart show={show} close={close}></Cart>  
      //  </>
   // )
//}

//export default CartWidget