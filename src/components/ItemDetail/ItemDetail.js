import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'
const ItemDetail = (props) =>{
    return(
        <div className="ItemDetail">
                <div className="imageContainer">
                    <img src={props.img} alt={props.title}></img> 
                </div>
                <div className="infoContainer">
                    <div>
                        <p>{props.title}</p>
                    </div>
                    <div>
                        <ItemCount price={props.price}/>
                    </div>
                </div>
        </div>
    )
}

export default ItemDetail