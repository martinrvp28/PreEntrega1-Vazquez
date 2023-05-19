import { useEffect, useState } from "react"
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../Firebase/database"


const LastUnitsContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);

    useEffect (() => {

        const collectionRef = collection(db, "products");
        const queryRef = query(collectionRef, where("stock", "<", 6));

        getDocs(queryRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {

                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
            setProducts(productsAdapted)
            })

            .catch(error => {
                console.log(error)
            })

    
    })


    return(

        <div className="mainList">
            <ItemList products={products}/>
        </div>
    )
}

export default LastUnitsContainer;