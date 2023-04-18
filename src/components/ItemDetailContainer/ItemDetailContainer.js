import { useEffect, useState } from "react"
import Item from "../Item/Item";
import { getProductById } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail"

import { useParams } from "react-router-dom";





const ItemDetailContainer = () => {

    const [product, setProduct] = useState (null);

    const {itemId} = useParams();

    const numero = Number(itemId);

    useEffect(() => {
        getProductById(numero)
            .then(response => {
                setProduct(response)
                console.log(response);
            })
        .catch(error => {
            console.error(error)
        })
    }, [])


return (
    <div className="ItemDetailContainer">
        <ItemDetail {...product} />
    </div>
)

}

export default ItemDetailContainer;