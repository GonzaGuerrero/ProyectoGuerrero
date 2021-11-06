import "./CartPopUp.css"
export default function CartPopUp({show,orderId,handlePopUp}){


    return(
        <div className={`popup-fondo ${show?"show":"hide" }`}>
                <div className="popup-contenido">
                    <div className="popup-header">
                        <p className="cerrar" onClick={handlePopUp}>x</p>
                    </div>
                    <div className="popup-body">
                        <div className="body-message">Gracias por tu compra!<br/> 
                            Tu pedido está siendo procesado.
                        </div>
                        <div class="success-checkmark">
                            <div class="check-icon">
                                <span class="icon-line line-tip"></span>
                                <span class="icon-line line-long"></span>
                                <div class="icon-circle"></div>
                                <div class="icon-fix"></div>
                            </div>
                        </div>  
                        <div>Código de seguimiento: <span className="id">{orderId}</span> </div>
                    </div>
                </div>
        </div>
    )
}