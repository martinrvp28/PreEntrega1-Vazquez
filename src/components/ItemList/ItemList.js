import './ItemList.css'
import Item from '../Item/Item'
import ItemSale from '../Item/ItemSale'

const ItemList = ({products}) => {


    return (

        <div className='ListGroup'>

        {products.map(prod => {

            if (prod.category.includes('ofertas')){
                
                return(<ItemSale key={prod.id} {...prod}/>)

            } else {

                return(<Item key={prod.id} {...prod}/> )
                
            }

        }
      
        )}
        
        </div>
    )
}


export default ItemList; 