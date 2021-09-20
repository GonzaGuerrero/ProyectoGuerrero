import './NavBar.css';
import logo from '../../assets/logo-mosh.png'
import CartWidget from './CartWidget.js'



const NavBar = () =>  {
  return (
    <header className="main-navbar">
      <div className= "logo-container">   
        <img src={logo} className="logo"/>      
      </div>
      <ul className="nav-secciones"> 
        <li className="nav-item">Home</li>
        <li className="nav-item">Contacto</li>
        <li className="nav-item">Sobre Nosotros</li>
      </ul>
      <CartWidget/>
    </header>
  );
}



export default NavBar;