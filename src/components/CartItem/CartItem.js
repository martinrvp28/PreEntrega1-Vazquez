import { useContext } from 'react';
import './CartItem.css'
import CartItemChange from './CartItemChange';
import { CartContext } from '../Context/CartContext';

const CartItem = ({id,name,price,img,stock,quantity}) => {

    const item = {
        id, name , price, stock, quantity
    }

    const {removeItem} = useContext(CartContext);


    return(
        
        <tr>
            <th><img className='cartImg' src={img} alt={name}/></th>
            <th>{name}</th>
            <th>${price}</th>
            <th><CartItemChange prod={item}/></th>
            <th>${price*quantity}</th>
            <th><button className='deleteProd' onClick={() => removeItem(id)}>Eliminar Producto</button></th>

        </tr>
    )
}

export default CartItem;