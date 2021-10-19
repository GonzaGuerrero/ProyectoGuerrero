import React,{useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import db from '../../firebase'
import { getFirestore, collection, getDocs ,doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () =>{
    const [infoProduct, setInfoProduct]= useState ({})
    const { itemid } = useParams(); 

    async function getProduct (db){
        const productsCol = collection(db, 'items');
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => doc.data());
        return(
             itemid ? setInfoProduct(productsList.find(i => i.id === itemid)) :setInfoProduct(productsList)
        )   
    }

    useEffect ( ()=>{

        getProduct(db)
       
    },[itemid] )

    return(
        <div>
            <ItemDetail datos={infoProduct}/>
        </div>
    )
}
export default ItemDetailContainer