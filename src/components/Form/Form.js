import "./Form.css"
import CartContext from "../../context/CartContext"
import { useContext,useState } from 'react/cjs/react.development';
import { Link} from "react-router-dom";


export default function Form(){

    const {submitInfo}= useContext(CartContext)
    const [valido, setValido]=useState(false)
    const [show, setShow]=useState(false)
    const submit =()=>{
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let email = document.getElementById("email").value;
        let telefono = document.getElementById("telefono").value;

        if(nombre===""||apellido===""||email===""|| telefono===""){ 
            setValido(false)
            setShow(true)
        }else{
            setValido(true) 
            setShow(false)
            let infoCliente={
                name:nombre,
                lastname:apellido,
                email:email,
                phone:telefono 
            }
            submitInfo(infoCliente)
        } 
    }


    return(
        <div className="form">
            
                <div className="form-body">
                    <div className="body-section">
                        <div className="body-sub-section">
                            <label for="nombre" >Nombre/s</label><br/>
                            <input type="text" id="nombre" name="nombre"/><br/>
                        </div>
                        <div className="body-sub-section" >
                            <label for="apellido" >Apellido/s</label><br/>
                            <input type="text" id="apellido" name="apellido"/><br/>
                        </div>
                    </div>
                    <div className="body-section">
                        <div className="body-sub-section">
                            <label for="email" >Correo electrónico</label><br/>
                            <input type="email" id="email" name="email"/><br/>
                        </div>
                        <div className="body-sub-section">
                            <label for="conf-email" >Confirmar correo</label><br/>
                            <input type="email" id="conf-email" name="email"/><br/>
                        </div>
                    </div>
                    <div className="body-section">
                        <div className="body-sub-section">
                            <label for="telefono" >Número de telefono</label><br/>
                            <input type="number" id="telefono" name="telefono"/>
                        </div>
                    </div>
                </div>
                <div className="form-submit">
                    <button onClick={submit} className="submit-button"  type="submit">Enviar datos</button>
                    <div className={`faltaInfoContainer ${show?`show`:`hide`}`}>
                        <div className="faltaInfo">Para completar tu pedido debes llenar todos los campos</div>
                    </div>
                    <Link to={"./cart"}><button className="submit-button2" >Volver al carrito</button></Link>
                </div>
            
        </div>
    )

}