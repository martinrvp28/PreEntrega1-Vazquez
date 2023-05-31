import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/database";





const ItemDetailContainer = () => {

    const [product, setProduct] = useState (null);

    const {itemId} = useParams();


    useEffect(() => {
        const fetchProduct = async () => {
        try {
            const docRef = doc(db, "products", itemId);
            const response = await getDoc(docRef);
            const data = response.data();
            const productAdapted = { id: response.id, ...data };
            setProduct(productAdapted);
            
        } catch (error) {
            console.log(error);
        }
        };
    
        fetchProduct();
    }, [itemId]);
    




return (
  <div className="ItemDetailContainer">
    {product ? (
      <ItemDetail {...product} />
    ) : (
      <p>Cargando producto...</p>
    )}
  </div>
  
);








}

export default ItemDetailContainer;