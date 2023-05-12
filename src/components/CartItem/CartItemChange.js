import './CartItem.css'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';


const CartItemChange = ({prod}) => {

    const {addOnCart, removeOnCart} = useContext(CartContext);

    return (

        <div className='buttonContainer'>
            
            <button onClick={() => removeOnCart(prod)}>-</button>
            <span>{prod.quantity}</span>
            <button onClick={() => addOnCart(prod)}>+</button>

        </div>
    )
}


export default CartItemChange;