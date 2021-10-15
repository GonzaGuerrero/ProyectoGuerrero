import React from "react"
import "./CartList.css"

export default function CartList(props){


    return(
        <div className="contenedorCartList">
            <div className="contenedorCartListIzquierdo">
                <div>{props.title}</div>
                <div>({props.quantity} {props.quantity==1?"unidad":"unidades"}) </div>
            </div>
            <div className="contenedorCartListDerecho">
                <div> ${props.price * props.quantity }   </div>
            </div>
        </div>
    )
}
