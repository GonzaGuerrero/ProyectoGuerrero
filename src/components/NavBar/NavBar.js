import './NavBar.css';
import logo from '../../assets/logo-mosh.png'
import CartWidget from './CartWidget.js'
import { Link } from 'react-router-dom';


const NavBar = () =>  {
  return (
    <header className="main-navbar">
        <div className= "logo-container">
          <Link to={'/'}>   
            <img src={logo} className="logo"/> 
          </Link>     
        </div>
      <ul className="nav-secciones"> 
        <li className="nav-item"> <Link to={'/'}>Home</Link></li>
        <li className="nav-item">Contacto</li>
        <li className="nav-item">Sobre Nosotros</li>
      </ul>
      <CartWidget/>
    </header>
  );
}



export default NavBar;