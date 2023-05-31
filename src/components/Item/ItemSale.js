import './ItemSale.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';

const ItemSale = ({id, name, img, price, offprice, disc,}) => {

    const {DiscPrice} = useContext(CartContext);

    return(
        <article className='CardItem'>

                <div className='containerBadgeDisc'>
                    <span>%{disc} OFF</span>
                </div>

            <picture className='containerImg-Disc'>

                
                <img src={img} alt={name} className='ItemImg' />

            </picture>

            <header className='Header'>

                <h2 className='ItemHeaderSale'>
                    {name}
                </h2>

            </header>

            <section>
    
                <div className='pricesSale'>
                <p className='InfoDisc'>Antes <span className='tachado' >${price}</span></p>
                <p className='Info'>${DiscPrice(price,disc)}</p>
                </div>
                

            </section>

            <footer className='ItemFooter'>

                    <Link to={`/item/${id}`} className='Options'>Detalles</Link>
                
            </footer>


        </article>
    )
}




export default ItemSale;