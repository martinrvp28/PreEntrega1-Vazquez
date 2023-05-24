import './ItemList.css'
import Item from '../Item/Item'
import ItemSale from '../Item/ItemSale'
import { useEffect, useState } from 'react'

const ItemList = ({products}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const cardsPerPage = 10;
    const indexOfLastCard = currentPage*cardsPerPage;
    const indexOfFirstCard = indexOfLastCard-cardsPerPage;
    const currentProducts = products.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(products.length/cardsPerPage);

    useEffect(() => {
      setCurrentPage(1);
    },[products]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const renderPaginationButtons = () => {
        const paginationButtons = [];
        
    
        
        if (totalPages <= 5) {
          for (let i = 1; i <= totalPages; i++) {
            paginationButtons.push(
              <button className='pageButton'
                key={i}
                onClick={() => handlePageChange(i)}
                disabled={currentPage === i}
              >
                {i}
              </button>
            );
          }
        } else {
          
          let minPage = Math.max(1, currentPage - 2);
          let maxPage = Math.min(currentPage + 2, totalPages);

          if (currentPage<3) {
            minPage=1;
            maxPage=5
          }

          if (currentPage>totalPages-2) {
            minPage=totalPages-4;
            maxPage=totalPages;
          }
    
          for (let i = minPage; i <= maxPage; i++) {
            paginationButtons.push(
              <button className='pageButton'
                key={i}
                onClick={() => handlePageChange(i)}
                disabled={currentPage === i}
              >
                {i}
              </button>
            );
          }
        }
    
        return paginationButtons;
      }


    return (

        <div className='containerPagCards'>

        <div className='ListGroup'>

            {currentProducts.map(prod => {

                if (prod.category.includes('ofertas')){
                    
                    return(
                        <div>
                            <ItemSale key={prod.id} {...prod}/>

                        </div>
                    )

                } else {

                    return(
                        <div>
                            <Item key={prod.id} {...prod}/> 

                        </div>
                    )
                    
                }

            }
            )}
        
        </div>

        <div className='containerButtonPage'>
            {renderPaginationButtons()}
        </div>

        </div>


    )
}


export default ItemList; 