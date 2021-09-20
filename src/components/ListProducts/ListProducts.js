import React from 'react';
import Product from '../Product/Product';
import './ListProducts.css'




const ListProducts = () =>{
    return(
        <div className="tienda">
            <Product title="Remera Beavis" img="https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/adidas-x-Beavis-%26-Butthead-Skate-Cornholio-camiseta-blanca-_317726-front-US.jpg" />
            <Product title="Remera Celine Dion" img="https://m.media-amazon.com/images/I/613Bx2I71FL._AC_UX466_.jpg" />
            <Product title="Remera Anthrax" img="https://i.redd.it/4fop1ishv1x21.jpg" />
            <Product title="Remera Creepshow" img="https://ih1.redbubble.net/image.294035230.6500/ssrco,slim_fit_t_shirt,womens,101010:01c5ca27c6,front,square_product,600x600.u5.jpg" />
            <Product title="Remera Entombed" img="https://ih1.redbubble.net/image.1325033258.5128/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg" />
            <Product title="Remera Lordran" img="https://img.joomcdn.net/0b3a4de070c7b5a1173380b2a874488c2fa55f36_original.jpeg" />
        </div>
    )
}

export default ListProducts