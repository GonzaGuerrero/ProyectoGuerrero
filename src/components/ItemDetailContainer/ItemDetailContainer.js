import React,{useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () =>{
    const [infoProduct, setInfoProduct]= useState ()

    const getProduct = new Promise ( (resolve) => {
        setTimeout( () =>{
            const mockProduct =
                {
                    id:"1",
                    title:"Remera Beavis",
                    img: "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/adidas-x-Beavis-%26-Butthead-Skate-Cornholio-camiseta-blanca-_317726-front-US.jpg",
                    price:"$2000",
                    stock: "50",
                }
            resolve (mockProduct)
        }, 1000)
    })

    useEffect ( ()=>{
        getProduct.then((data) => {
            setInfoProduct(data)
        })
    },[] )

    return(
        <div>
            <ItemDetail data={infoProduct}/>
            {console.log("data para ver:", infoProduct)}
        </div>
    )
}
export default ItemDetailContainer