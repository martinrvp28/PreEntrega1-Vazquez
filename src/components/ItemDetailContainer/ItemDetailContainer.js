import { useEffect, useState } from "react"
import Item from "../Item/Item";
import { getProductById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail"

import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/database";





const ItemDetailContainer = () => {

    const [product, setProduct] = useState (null);

    const {itemId} = useParams();


    useEffect(() => {

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = {id: response.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
        
    }, [itemId])


return (
    <div className="ItemDetailContainer">
        <ItemDetail {...product} />
    </div>
)

}

export default ItemDetailContainer;