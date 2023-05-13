import { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from "firebase/firestore";
import { db } from "../Firebase/database";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import './Checkout.css'




const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');

    const [nameUser, setNameUser] = useState('');
    const [phoneUser, setPhoneUser] = useState('');
    const [emailUser, setEmailUser] = useState('');

    const {cart, totalPrice, clearCart} = useContext(CartContext);

    const createOrder = async ({name, phone, email}) => {

        setLoading(true);
        setNameUser(name);
        setPhoneUser(phone);
        setEmailUser(email);

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items:cart,
                total:totalPrice,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'products');
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
            const {docs} = productsAddedFromFirestore;
            

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                console.log(objOrder)
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                console.log(orderRef)


                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos que estan fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }

    }

    if (loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if (orderId) {
        return (
        
            <div className="containerFinalOrder">

                <ul>
                    <li><span>Nombre:</span> {nameUser}</li>
                    <li><span>Numero:</span> {phoneUser}</li>
                    <li><span>Email:</span> {emailUser}</li>
                </ul>

                <h2>ID de compra - {orderId} </h2>

            </div>

        )
    }

    return( 
        <div className="containerForm">
            <h1>Enviar pedido</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}


export default Checkout;