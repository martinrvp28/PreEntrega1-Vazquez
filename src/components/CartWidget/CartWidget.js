import './CartWidget.css'
import cart from '../../assets/img/cart.png'

const CartWidget = () =>{
    return(
        <div className="containerCart">
            <img src={cart} alt="cart-widget"></img>
            0
        </div>
    )
}

export default CartWidget