import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css';
import { CartContext } from "../Context/CartContext";



const ItemDetail = ({id,name,price,img,category,stock,description}) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem} = useContext(CartContext)

    const HandleOnAddClick = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, name , price, img, stock
        }

        addItem(item,quantity);
    }

    return(
        <article className="detailContainer">

            <picture>
                <img src={img} alt={name}/>
            </picture>

            <div className="infoContainer">

                <header className="title">
                    <h2>{name}</h2>
                </header>

                <div className="dataContainer">

                    <section>
                        <p>{description}</p>
                        <p className="stock">Stock disponible:{stock}</p>
                    </section>

                    <div className="data">

                        <p className="price">${price}</p>

                        {
                            quantityAdded>0 ? (
                                <Link to='/cart' className='Option'>Finalizar Compra</Link>
                            ):

                            (<ItemCount stock={stock} initial={1} onAdd={HandleOnAddClick}/>)

                            }

                    </div>

                </div>

            </div>

        </article>
    )
    
}

export default ItemDetail;