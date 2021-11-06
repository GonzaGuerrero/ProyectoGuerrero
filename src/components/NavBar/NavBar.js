import './NavBar.css';
import logo from '../../assets/logo-mosh2.png'
import CartWidget from './CartWidget.js'
import { Link } from 'react-router-dom';
import imagenCarrito from '../../assets/carrito.png';
import React, {useState} from "react"


import CartContext from "../../context/CartContext"
import { useContext } from 'react/cjs/react.development';


const NavBar = () =>  {

  const [showCart, setShowCart]= useState (false)
  const handleCart = () =>{
    !showCart? setShowCart(true):setShowCart(false);
  }
  const {listaItemsCart}= useContext(CartContext)

  return (
    <header className="main-navbar">
        <div className= "logo-container">
          <Link to={'/'}>   
            <img src={logo} className="logo" alt="logo"/> 
          </Link>     
        </div>
      <ul className="nav-secciones"> 
        <li className="nav-item"> <Link to={'/'}>Home</Link></li>
        <li className="nav-item btn-categorias">
          Categorías
          <ul className="nav-categorias">
            <li><Link to ={'/category/remera'}>Remeras</Link></li>
            <li><Link to ={'/category/buzo'}>Buzos</Link></li>
            <li><Link to ={'/'}>Ver Todo...</Link></li>
          </ul>
        </li>
        <li className="nav-item"><a  href="#footer">Contacto</a></li>
        <li className="nav-item">Sobre Nosotros</li>
      </ul>
      <button onClick={handleCart} className="cart-container">
          <img src={imagenCarrito} alt="Carrito" ></img>
          <div className="cart-number" >{listaItemsCart.length}</div>
      </button>
      <CartWidget show={showCart} close={handleCart}/>
    </header>
  );
}



export default NavBar;