import React,{useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import db from '../../firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore';



const ItemListContainer = () =>{
    const [products, setProduct]= useState ([])
    const { categoryid } = useParams();


    async function getProducts (db){
        const productsCol = collection(db, 'items');
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => doc.data());
        return(
        categoryid ? setProduct(productsList.filter((i) => i.category === categoryid)) :setProduct(productsList)
        )   
    }

    useEffect ( ()=>{

        console.log(categoryid)
        getProducts(db)

    },[categoryid]);

    return(
        <div>   
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer