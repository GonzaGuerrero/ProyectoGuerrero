
import Product from '../Product/Product';

const ItemList = ({products}) =>{

    return(
        <div className="tienda">
            <div className="linkToNavBarContainer">
                <a href="#navBar">
                    <div className="linkToNavBar">
                        <div className="linkToNavBar-contenido"></div>
                        <div className="linkToNavBar-mensaje">Volver arriba</div>
                    </div>
                </a>
            </div>
            {products.map( (product)=>{
                return(
                    <Product stock={product.stock} key={product.id} id={product.id} title={product.title} img={product.img} alt={product.title} price={product.price} />
                )
            })}
        </div>
    )
}

export default ItemList