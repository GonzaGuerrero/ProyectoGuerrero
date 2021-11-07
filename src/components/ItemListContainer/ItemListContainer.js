import React,{useState, useEffect, useContext} from 'react';
import { useParams , Link} from 'react-router-dom';

import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import banner from "../../assets/banner2.png"

import CartContext from "../../context/CartContext"

import db from '../../firebase'
import { query, where, collection, getDocs } from 'firebase/firestore';


const ItemListContainer = () =>{
    const [products, setProduct]= useState ([])
    const { categoryid } = useParams();
    const {productoActual,showProductPopUp,isInCart}= useContext(CartContext)


    useEffect ( ()=>{

        async function getProducts (db){
            const productsCol = categoryid
            ?query(collection(db, "items"), where("category", "==", categoryid))
            :collection(db, 'items');
            const productsSnapshot = await getDocs(productsCol);
            const productsList = productsSnapshot.docs.map(doc => doc.data());
            setProduct(productsList)  
        }

        getProducts(db)

    },[categoryid]);

    return(
        <div className="itemListContainer"> 
            <div className="home-background">
                <div className="banner">
                    <img src={banner} alt="banner"></img>
                </div>

                
                <div className="containerCategorias" > 
                    <div className={`containerCategoria ${!categoryid?`seleccionado`:``}`}>
                        <div className="hoverNaranja" id="naranjaIzq" /><div className="hoverNaranja" id="naranjaDer"/>
                        <Link to ={'/'}>
                            <div className="categoriaImagen fondoTodo"><div className="cinta"/><div className="tituloCateg">Ver todo</div></div>
                        </Link>
                    </div>
                    <div className={`containerCategoria ${categoryid==="remera"?`seleccionado`:``}`}>
                        <div className="hoverNaranja" id="naranjaIzq" /><div className="hoverNaranja" id="naranjaDer"/>
                        <Link to ={'/category/remera'}>
                            <div className="categoriaImagen fondoRemera"><div className="cinta"/><div className="tituloCateg">Remeras</div></div>
                        </Link>
                    </div>
                    <div className={`containerCategoria ${categoryid==="buzo"?`seleccionado`:``}`}>
                        <div className="hoverNaranja" id="naranjaIzq" /><div className="hoverNaranja" id="naranjaDer"/>
                        <Link to ={'/category/buzo'}>
                            <div className="categoriaImagen fondoBuzo"><div className="cinta"/><div className="tituloCateg">Buzos</div></div>
                        </Link>
                    </div>
                </div> 
                
                <div className="franja-divisor"/>
            </div> 
            <Link to={"../cart"}  className={`notificacionProductoAñadido ${showProductPopUp?`popupActive`:`popupInactive`}`} id="notificacionProductoAñadido">
                <div className="notificacionProductoAñadido-img">  <img src={productoActual.img} alt={productoActual.title} /> </div>
               {isInCart?
               <div className="notificacionProductoAñadido-texto">{productoActual.title} ya está en el carrito</div>:
               <div className="notificacionProductoAñadido-texto">{productoActual.title} fue agregado al carrito</div>
               }
            </Link>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer