import React, {createContext, useState} from "react"

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [listaItemsCart, setListaItemsCart]= useState([])

    const addCart =(productoActual)=>{

        listaItemsCart.find(i => i.id === productoActual.id)?
        console.log("Este item ya está en el carro")
        :
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