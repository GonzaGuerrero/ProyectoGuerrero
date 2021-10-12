import React, {createContext, useState} from "react"

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [listaItemsCart, setListaItemsCart]= useState([])

    const addCart =(productoActual)=>{

        setListaItemsCart([
            ...listaItemsCart,
            productoActual
        ])
        console.log("listaItemsCart::: ",listaItemsCart)
    } 

    const removeItem = (itemId)=>{

       setListaItemsCart(
        listaItemsCart.filter(function( item ) {
            return item.id !== itemId;
        })
       ) 
    }

    const clearCart = ()=>{
        setListaItemsCart([])
    }

    const data = {
        addCart,
        removeItem,
        clearCart,
        listaItemsCart
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}