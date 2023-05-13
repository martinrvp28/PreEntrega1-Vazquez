import { Children, createContext , useContext, useEffect, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {

        CalcPrice();
        },[cart])

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            
            const updateQuantity = cart.map(prod => {
                if (prod.id === item.id) {

                    const newQuant = quantity;
                    const actualquant = prod.quantity;
                    console.log(prod.stock)

                    if (item.stock<(actualquant+newQuant)) {

                        return {...prod,
                                quantity:(item.stock)}
                    }

                    return {
                        ...prod,
                        quantity:(actualquant+newQuant)
                    }
                }

                return prod;
            })

            setCart(updateQuantity);

        }
    }

    const addOnCart = (item) => {

        const updateQuantity = cart.map(prod => {
            if ((prod.id === item.id) && (item.quantity<item.stock) ) {

                const actualquant = prod.quantity;
                

                return {
                    ...prod,
                    quantity:(actualquant+1)
                }
            }
            
            return prod;
        })

        setCart(updateQuantity);        

    }

    const removeOnCart = (item) => {

        const updateQuantity = cart.map(prod => {
            if ((prod.id === item.id) && (item.quantity>1) ) {

                const actualquant = prod.quantity;
                

                return {
                    ...prod,
                    quantity:(actualquant-1)
                }
            }
            
            return prod;
        })

        setCart(updateQuantity);        

    }
    
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
        setTotalPrice(0);
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalQuantity = () => {
        return cart.length
    }

    const CalcPrice = () => {
        let total = 0;
        cart.map(p => {
            total=total+(p.price*(p.quantity))
        })

        setTotalPrice(total);
    }

    const DiscPrice = (price,disc) => {
        return Math.floor(price * (1 - disc / 100));
    }

    return (
        <CartContext.Provider value={{cart, totalPrice, addItem, removeItem, clearCart, totalQuantity, addOnCart, removeOnCart, DiscPrice}}>
            {children}
        </CartContext.Provider>
    )


}