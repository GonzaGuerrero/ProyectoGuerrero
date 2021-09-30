import React from 'react'
import ItemCountNuevo from '../ItemCountNuevo/ItemCountNuevo'
import './itemDetail.css'
const ItemDetail = (props) =>{
    return(
        <div className="itemDetail">
                <div className="imageContainer">
                    <img src={props.data?.img} alt={props.data?.title}></img> 
                </div>
                <div className="infoContainer">
                    <div className="titleContainer">
                        <p>{props.data?.title}</p>
                    </div>
                    <ItemCountNuevo price={props.data?.price}/>
                </div>
        </div>
    )
}

export default ItemDetail