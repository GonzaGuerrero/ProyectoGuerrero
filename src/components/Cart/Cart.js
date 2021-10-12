
import React, {useContext} from "react"
import ProductoCart from "../Cart/ProductoCart"
import CartContext from "../../context/CartContext"
import './Cart.css'

export default function Cart(){

    const {listaItemsCart,clearCart} = useContext(CartContext)

    const itemList=[{
        quantity:15,
        id:"1",
        category: "remera",
        title:"Remera Beavis",
        img: "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/adidas-x-Beavis-%26-Butthead-Skate-Cornholio-camiseta-blanca-_317726-front-US.jpg",
        price:"$2000",
        stock: "50"
    },
    {
        quantity:15,
        id:"2",
        category: "remera",
        title:"Remera Celine Dion",
        img:"https://m.media-amazon.com/images/I/613Bx2I71FL._AC_UX466_.jpg",
        price:"$1900" ,
        stock: "50",
    },
    {
        quantity:15,
        id:"2",
        category: "remera",
        title:"Remera Celine Dion",
        img:"https://m.media-amazon.com/images/I/613Bx2I71FL._AC_UX466_.jpg",
        price:"$1900" ,
        stock: "50",
    },
    {
        quantity:15,
        id:"2",
        category: "remera",
        title:"Remera Celine Dion",
        img:"https://m.media-amazon.com/images/I/613Bx2I71FL._AC_UX466_.jpg",
        price:"$1900" ,
        stock: "50",
    },
    {
        quantity:15,
        id:"2",
        category: "remera",
        title:"Remera Celine Dion",
        img:"https://m.media-amazon.com/images/I/613Bx2I71FL._AC_UX466_.jpg",
        price:"$1900" ,
        stock: "50",
    }]
    return(
        <div className="contenedorCart"> 
            <div className="contenedorIzquierdo">
                <div className="contenedorFilter">
                    <div onClick={clearCart} className="vaciarCarrito">Vaciar carrito</div>
                </div>
                <div className="contenedorItems">
                    {listaItemsCart.map( (item)=>{
                            return(
                                    <ProductoCart quantity={item.quantity} key={item.id} id={item.id} title={item.title} img={item.img} alt={item.title} price={item.price} />
                            )
                        })}
                </div>
            </div>
            <div className="contenedorDerecho"></div>
        </div>
    )
}