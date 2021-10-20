import React,{useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import db from '../../firebase'
import { collection, getDocs ,query, where} from 'firebase/firestore';

const ItemDetailContainer = () =>{
    const [infoProduct, setInfoProduct]= useState ({})
    const { itemid } = useParams(); 

    async function getProduct (db){
        const productsCol = query(
            collection(db, 'items'),
            where("id", "==", itemid)
        ) 
        const productsSnapshot = await getDocs(productsCol);
        const productsList = productsSnapshot.docs.map(doc => doc.data());
        setInfoProduct(productsList.length > 0 ? productsList[0] : {});  
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