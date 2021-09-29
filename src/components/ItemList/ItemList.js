
import Product from '../Product/Product';

const ItemList = ({products}) =>{

    return(
        <div className="tienda">
            {products.map( (product)=>{
                return(
                    <Product key={product.id} title={product.title} img={product.img} alt={product.title} price={product.price} />
                )
            })}
        </div>
    )
}

export default ItemList