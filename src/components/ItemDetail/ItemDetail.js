import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({id,name,price,img,category,stock,description}) => {


    return(
        <article className="detailContainer">
            <header>
                <h2>{name}</h2>
            </header>

            <picture>
                <img src={img} alt={name}/>
            </picture>


            <section>
                <p>{description}</p>
                <p>Stock disponible:{stock}</p>
                <p>${price}</p>
            </section>

            <footer className="detailFooter">
                <ItemCount stock={stock} initial={1} onAdd={(quantity) => console.log('cantidad agregada') }/>
            </footer>

        </article>
    )
    
}

export default ItemDetail;