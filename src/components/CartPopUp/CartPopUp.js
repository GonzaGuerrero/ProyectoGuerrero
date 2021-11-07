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
                        <div className="success-checkmark">
                            <div className="check-icon">
                                <span className="icon-line line-tip"></span>
                                <span className="icon-line line-long"></span>
                                <div className="icon-circle"></div>
                                <div className="icon-fix"></div>
                            </div>
                        </div>  
                        <div>Código de seguimiento: <span className="id">{orderId}</span> </div>
                    </div>
                </div>
        </div>
    )
}