import "./Form.css"

import { useContext,useState } from 'react/cjs/react.development';
import { Link} from "react-router-dom";

import CartContext from "../../context/CartContext"


export default function Form(){

    const {submitInfo}= useContext(CartContext)
    const [valido, setValido]=useState(false)
    const [showFormPopUp, setShowFormPopUp]=useState(false)
    const submit =()=>{
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let email = document.getElementById("email").value;
        let telefono = document.getElementById("telefono").value;

        if(nombre===""||apellido===""||email===""|| telefono===""){ 
            setValido(false)
        }else{
            setValido(true) 
            let infoCliente={
                name:nombre,
                lastname:apellido,
                email:email,
                phone:telefono 
            }
            submitInfo(infoCliente)
        } 
        showFormPopUpHandler()
    }
    const showFormPopUpHandler=()=>{
        setShowFormPopUp(true)
    }


    return(
        <div className="form">
            
                <div className="form-body">
                    <div className="body-section">
                        <div className="body-sub-section">
                            <label htmlFor="nombre" >Nombre/s</label><br/>
                            <input type="text" id="nombre" name="nombre"/><br/>
                        </div>
                        <div className="body-sub-section" >
                            <label htmlFor="apellido" >Apellido/s</label><br/>
                            <input type="text" id="apellido" name="apellido"/><br/>
                        </div>
                    </div>
                    <div className="body-section">
                        <div className="body-sub-section">
                            <label htmlFor="email" >Correo electrónico</label><br/>
                            <input type="email" id="email" name="email"/><br/>
                        </div>
                        <div className="body-sub-section">
                            <label htmlFor="conf-email" >Confirmar correo</label><br/>
                            <input type="email" id="conf-email" name="email"/><br/>
                        </div>
                    </div>
                    <div className="body-section">
                        <div className="body-sub-section">
                            <label htmlFor="telefono" >Número de telefono</label><br/>
                            <input type="number" id="telefono" name="telefono"/>
                        </div>
                    </div>
                </div>
                <div className="form-submit">
                    <button onClick={submit} className="submit-button"  type="submit">Enviar datos</button>
                    <div className={`formPopUpContainer ${showFormPopUp?`show`:`hide`}`}>
                        {valido?
                        <div className="formPopUpValid">Los datos fueron enviados. <br/>Para finalizar la compra hace click acá<div className="formPopUpValidPico"/></div>:
                        <div className="formPopUpInvalid">Para completar tu pedido debes llenar todos los campos</div>
                        }
                    </div>
                    <Link to={"./cart"}><button className="submit-button2" >Volver al carrito</button></Link>
                </div>
            
        </div>
    )

}