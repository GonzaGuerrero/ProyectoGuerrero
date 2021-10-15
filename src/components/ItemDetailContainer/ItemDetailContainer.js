import React,{useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () =>{
    const [infoProduct, setInfoProduct]= useState ({})
    const { itemid } = useParams();

    useEffect ( ()=>{

        const getProduct = new Promise ( (resolve) => {
            setTimeout( () =>{
                const mockProduct = [
                    {
                        id:"1",
                        category: "remera",
                        title:"Remera Beavis",
                        img: "https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/adidas-x-Beavis-%26-Butthead-Skate-Cornholio-camiseta-blanca-_317726-front-US.jpg",
                        price:2000,
                        stock: 50
                    },
                    {
                        id:"2",
                        category: "remera",
                        title:"Remera Celine Dion",
                        img:"https://m.media-amazon.com/images/I/613Bx2I71FL._AC_UX466_.jpg",
                        price:1900 ,
                        stock: 50
                    },
                    {
                        id:"3",
                        category: "remera",
                        title:"Remera Anthrax",
                        img:"https://i.redd.it/4fop1ishv1x21.jpg",
                        price: 1800,
                        stock: 50
                    },
                    {
                        id:"4",
                        category: "remera",
                        title:"Remera Creepshow",
                        img:"https://ih1.redbubble.net/image.294035230.6500/ssrco,slim_fit_t_shirt,womens,101010:01c5ca27c6,front,square_product,600x600.u5.jpg",
                        price:1900,
                        stock:50
                    },
                    {
                        id:"5",
                        category: "remera",
                        title:"Remera Entombed",
                        img:"https://ih1.redbubble.net/image.1325033258.5128/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg",
                        price:2000,
                        stock:50
                    },
                    {
                        id:"6",
                        category: "remera",
                        title:"Remera Lordran",
                        img:"https://img.joomcdn.net/0b3a4de070c7b5a1173380b2a874488c2fa55f36_original.jpeg",
                        price: 2000,
                        stock:50
                    },
                    {
                        id:"7",
                        category: "buzo",
                        title:"Buzo Death",
                        img:"https://proassets.monopile.cloud/32845/e2874cdbe2c9cc9bd27f4e30008ad633_l.jpg",
                        price: 3000,
                        stock:20
                    },
                    {
                        id:"8",
                        category: "buzo",
                        title:"Buzo Evil Dead",
                        img:"https://res.cloudinary.com/teepublic/image/private/s--cZ5oBu3W--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_620/c_crop,g_north_west,h_620,w_465,x_-11,y_0/g_north_west,u_upload:v1446840652:production:blanks:ymwlojdlb9pdlxgcmck4,x_-402,y_-276/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1603290836/production/designs/15276153_0.jpg",
                        price: 2900,
                        stock:20
                    },
                    {
                        id:"9",
                        category: "buzo",
                        title:"Buzo Stars",
                        img:"http://canary.contestimg.wish.com/api/webimage/5ddc8bdd7473f617465d217c-large.jpg?cache_buster=4a9706d01c5b4141309c69352fee2b00",
                        price: 3100,
                        stock:15 
                    }
                ]
                resolve (mockProduct)
            },1000)
        })

        getProduct.then((data) => {
            itemid ? setInfoProduct(data.find(i => i.id === itemid)) :setInfoProduct(data);

        })
    },[itemid] )

    return(
        <div>
            <ItemDetail datos={infoProduct}/>
        </div>
    )
}
export default ItemDetailContainer