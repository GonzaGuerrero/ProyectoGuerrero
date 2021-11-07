import React, {createContext, useState} from "react"

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [listaItemsCart, setListaItemsCart]= useState([])
    const [infoCliente, setInfoCliente]=useState([])
    const [productoActual, setProductoActual]=useState([])
    const [showProductPopUp, setShowProductPopUp]=useState(false)
    const [isInCart, setIsInCart]= useState(false)
    

    const addCart =(productoActual)=>{

        if(listaItemsCart.find(i => i.id === productoActual.id)){
            setIsInCart(true)
            setProductoActual(productoActual)
        }else{
            setListaItemsCart([
                ...listaItemsCart,
                productoActual
            ])  
            setProductoActual(productoActual)
            setIsInCart(false)
        }
        productPopUpHandler()
    } 
    const productPopUpHandler=()=>{
        setShowProductPopUp(true)
        setTimeout(function(){
            setShowProductPopUp(false)
        },3000)
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
    }
    const data = {
        addCart,
        removeItem,
        clearCart,
        submitInfo,
        listaItemsCart,
        infoCliente,
        productoActual,
        showProductPopUp,
        isInCart
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}