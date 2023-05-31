import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css';
import { CartContext } from "../Context/CartContext";



const ItemDetail = ({id,name,price,img,stock,description,disc}) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem, DiscPrice} = useContext(CartContext)

    const discountedPrice = DiscPrice(price,disc);


    const HandleOnAddClick = (quantity) => {
        setQuantityAdded(quantity);

        if (disc) {

            const item = {
                id, name , price:discountedPrice, img, stock
            }
            addItem(item,quantity);

        } else {

            const item = {
                id, name , price, img, stock
            }
            addItem(item,quantity);

        }
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
                        <p className="description">{description}</p>
                        <p className="stock">Stock disponible:{stock}</p>
                    </section>

                    <div className="data">

                        <div>
                            {disc? (
                            <div className="containerPrices">
                                <p className="priceBefore">Antes <span className="tachado">${price}</span></p>
                                <p className="price">${discountedPrice}</p>
                            </div>
                            ) :
                            <div>
                                <p className="price">${price}</p>
                            </div>
                            }
                        </div>


                        {
                            quantityAdded>0 ? (
                                <div className="containerOption">
                                    <Link to='/' className='Option'>Volver a Productos</Link>
                                    <Link to='/cart' className='Option'>Ir al Carrito</Link>
                                </div>
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