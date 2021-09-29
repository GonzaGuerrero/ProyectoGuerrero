import React,{useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'




const ItemListContainer = () =>{
    const [products, setProduct]= useState ([])

    const getProducts = new Promise ( (resolve) => {
        setTimeout( () =>{
            const mockProducts = [
                {
                    id:"1",
                    title:"Remera Beavis",
                    img: "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/adidas-x-Beavis-%26-Butthead-Skate-Cornholio-camiseta-blanca-_317726-front-US.jpg",
                    price:"$2000",
                    stock: "50",
                },
                {
                    id:"2",
                    title:"Remera Celine Dion",
                    img:"https://m.media-amazon.com/images/I/613Bx2I71FL._AC_UX466_.jpg",
                    price:"$1900" ,
                    stock: "50",
                },
                {
                    id:"3",
                    title:"Remera Anthrax",
                    img:"https://i.redd.it/4fop1ishv1x21.jpg",
                    price: "$1800",
                    stock: "50",
                },
                {
                    id:"4",
                    title:"Remera Creepshow",
                    img:"https://ih1.redbubble.net/image.294035230.6500/ssrco,slim_fit_t_shirt,womens,101010:01c5ca27c6,front,square_product,600x600.u5.jpg",
                    price:"$1900",
                    stock:"50" ,
                },
                {
                    id:"5",
                    title:"Remera Entombed",
                    img:"https://ih1.redbubble.net/image.1325033258.5128/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg",
                    price:"$2000",
                    stock:"50" ,
                },
                {
                    id:"6",
                    title:"Remera Lordran",
                    img:"https://img.joomcdn.net/0b3a4de070c7b5a1173380b2a874488c2fa55f36_original.jpeg",
                    price: "$2000",
                    stock:"50" ,
                }
            ]
            resolve (mockProducts)
        }, 2000)
    })

    useEffect ( ()=>{
        getProducts.then((data) => {
            setProduct(data)
        })
    },[] )

    return(
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer