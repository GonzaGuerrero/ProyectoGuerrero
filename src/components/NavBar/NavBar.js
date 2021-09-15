import './NavBar.css';


const NavBar = () =>  {
  return (
    <header className="main-navbar">
      <div className= "logo-container">
        <div className="logo">
          <img src="../assets/logo-mosh.png" alt="logo"/>
        </div>
      </div>
      <ul className="nav-secciones"> 
        <li className="nav-item">Home</li>
        <li className="nav-item">Contacto</li>
        <li className="nav-item">Sobre Nosotros</li>
      </ul> 
    </header>
  );
}



export default NavBar;