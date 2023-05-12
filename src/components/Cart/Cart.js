import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'




const Cart = () => {
    
    const {cart, clearCart, totalQuantity, totalPrice} = useContext(CartContext)

    if (cart.length === 0) {
        return( 
            <div className="containerNoItems">
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Volver a Productos</Link>
            </div>
        )
    }

    return(
    
    <div className="cartContainer">

        <table>
            <tr>
                <th></th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
            </tr>

            {cart.map(p => <CartItem key={p.id} {...p}/>)}

        </table>

        <div className="containerActions">
            <h3>Total: ${totalPrice}</h3>
            <div className="containerBut">
                <button onClick={() => clearCart()} className="Button"> Vaciar Carrito</button>
                <Link to='checkout'><button className='Button'>CheckOut</button></Link>
            </div>
        </div>

    </div>

    )
}


export default Cart;