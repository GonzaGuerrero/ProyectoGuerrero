
import Product from '../Product/Product';

const ItemList = ({products}) =>{

    return(
        <div className="tienda">
            {products.map( (product)=>{
                return(
                    <Product stock={product.stock} key={product.id} id={product.id} title={product.title} img={product.img} alt={product.title} price={product.price} />
                )
            })}
        </div>
    )
}

export default ItemList