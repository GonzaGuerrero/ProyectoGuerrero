import React, {createContext, useState} from "react"

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [listaItemsCart, setListaItemsCart]= useState([])
    const [infoCliente, setInfoCliente]=useState([])

    const addCart =(productoActual)=>{

        listaItemsCart.find(i => i.id === productoActual.id)?
        console.log("Este item ya está en el carro")
        :
        setListaItemsCart([
            ...listaItemsCart,
            productoActual
        ])

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

    const submitInfo = (infoCliente)=>{
        setInfoCliente(infoCliente)
        console.log("mostrar informacion del cliente en context",infoCliente)
    }

    const data = {
        addCart,
        removeItem,
        clearCart,
        submitInfo,
        listaItemsCart,
        infoCliente
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}