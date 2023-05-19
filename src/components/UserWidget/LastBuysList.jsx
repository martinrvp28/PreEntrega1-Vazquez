import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../Firebase/database"
import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../Context/AuthContext"
import './LastBuys.css'

const LastBuysList = () => {

    const {user} = useContext(AuthContext)

    const [buyList, setBuyList] = useState([])
    const [activeItem, setActiveItem] = useState (null);
    const [quantities, setQuantities] = useState([])

    const toggleCollapse = (index) => {

        setActiveItem(activeItem === index ? null : index)

    }
    

    useEffect(() => {
        const fetchList = async () => {
          const q = query(collection(db, 'orders'), where('buyer.email', '==', user.username));
          const querySnapshot = await getDocs(q);
          const documents = querySnapshot.docs.map(doc => {
            const timestamp = doc.data().date.toDate();
            const formattedDate = timestamp.toLocaleString();
            return { ...doc.data(), formattedDate };
          });
          setBuyList(documents);
          console.log(documents);
      
          const calcQuantitys = documents.map(doc => {
            const quant = doc.items.reduce((total, item) => total + item.quantity, 0);
            return quant;
          });
      
          setQuantities(calcQuantitys);
          console.log(calcQuantitys);
        };
      
        fetchList();
      }, []);

    console.log(buyList);


    return (
        
        <div className="containerBuyList">

        <table>

            <tr className="trTitle">
                    <th>FECHA</th>
                    <th>TOTAL PRODUCTOS</th>
                    <th>PRODUCTOS DISTINTOS</th>
                    <th colSpan={activeItem !== null ? 2 : 1}>PRECIO TOTAL</th>
                    
            </tr>

            {buyList.map((item,index) => (
                
                <>
                    <tr className="pointer" onClick={() => toggleCollapse(index)} key={index}>
                        <th>{item.formattedDate}</th>
                        <th>{quantities[index]}</th>
                        <th>{item.items.length}</th>
                        <th colSpan={activeItem !== null ? 2 : 1}>$ {item.total}</th>
                    </tr>

                    {activeItem === index && (
                        
                    <>
                        <tr className="trTitleMini">
                            <th></th>
                            <th>PRODUCTO</th>
                            <th>PRECIO UNIDAD</th>
                            <th>CANTIDAD</th>
                            <th>TOTAL</th>
                        </tr>

                        {buyList[index].items.map((prod, prodIndex) => (
                        <tr className="" key={prodIndex}>
                            <th><img className='cartImg' src={prod.img} alt={prod.name}/></th>
                            <th>{prod.name}</th>
                            <th>$ {prod.price}</th>
                            <th>{prod.quantity}</th>
                            <th>$ {prod.price * prod.quantity}</th>
                        </tr>
                        ))}

                    </>

                    )}
                </>
                )
            )}

        </table>

        </div>
    )
}


export default LastBuysList;