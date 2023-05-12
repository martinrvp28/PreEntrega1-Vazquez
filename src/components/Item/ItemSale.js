import './ItemSale.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const ItemSale = ({id, name, img, price, offprice, disc,}) => {

    const discountedPrice = price * (1 - disc / 100);

    return(
        <article className='CardItem'>

                <div className='containerBadgeDisc'>
                    <span>%{disc} OFF</span>
                </div>

            <picture className='containerImg-Disc'>

                
                <img src={img} alt={name} className='ItemImg' />

            </picture>

            <header className='Header'>

                <h2 className='ItemHeader'>
                    {name}
                </h2>

            </header>

            <section>
    
                <div className='prices'>
                <p className='InfoDisc'>Antes <span className='tachado' >${price}</span></p>
                <p className='Info'>${discountedPrice}</p>
                </div>
                

            </section>

            <footer className='ItemFooter'>

                    <Link to={`/item/${id}`} className='Options'>Detalles</Link>
                
            </footer>


        </article>
    )
}




export default ItemSale;