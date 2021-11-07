import "./Footer.css"
import logo from '../../assets/logo-mosh.png'
import tarjetas from "../../assets/tarjetas.png"
import facebook from"../../assets/pngfacebook.png"
import twitter from"../../assets/pngtwitter.png"
import instagram from"../../assets/pnginstagram.png"
import whatsapp from"../../assets/pngwhatsapp.png"


const Footer = () =>{


return(
        <div className="footer-container" id="footer">
            <div className="franja-divisor"/>
            <div className="footer-body">
                <div className="footer-container-izq">
                    <div className="logo-container-footer">
                        <img className="logo-footer" alt="logo" src={logo} ></img>
                    </div>
                    <p>P. Sherman <br/> Calle Wallaby 42 <br/>Sidney<br/> Todos los derechos reservados</p>
                </div>        
                    <ul className="footer-redes">
                        <li><img src={facebook} alt="facebook"/><div className="redes-titulo2">facebook.com/MoshClothing<div className="redes-cinta-der"/></div> </li>
                        <li><img src={twitter}alt="twitter"/><div className="redes-titulo2">twitter.com/MoshClothing<div className="redes-cinta-der"/></div> </li>
                        <li><img src={instagram}alt="instagram"/><div className="redes-titulo2">instagram.com/MoshClothing<div className="redes-cinta-der"/></div> </li>
                        <li><img src={whatsapp} alt="whatsapp"/><div className="redes-titulo2">11 2456-7564<div className="redes-cinta-der"/></div> </li>                    
                    </ul>
                
                <div className="footer-tarjetas-container">
                    <img className="footer-tarjetas" alt="tarjetas" src={tarjetas}></img>
                </div>
            </div>
        </div>
    )
}
export default Footer