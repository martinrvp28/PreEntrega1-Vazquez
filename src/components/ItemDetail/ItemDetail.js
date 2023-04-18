import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css';


const ItemDetail = ({id,name,price,img,category,stock,description}) => {


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
                        <ItemCount stock={stock} initial={1} onAdd={(quantity) => console.log('cantidad agregada') }/>

                    </div>

                </div>

            </div>

        </article>
    )
    
}

export default ItemDetail;