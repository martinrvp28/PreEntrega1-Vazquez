import './CartWidget.css'
import cart from '../../assets/img/cart.png'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () =>{

    const { totalQuantity } = useContext(CartContext);

    return(

        <Link to='/cart' className="containerCartWidget">
            <img src={cart} alt="cart-widget"></img>
            {totalQuantity()}
        </Link>
    )
}

export default CartWidget