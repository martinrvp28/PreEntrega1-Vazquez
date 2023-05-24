import CardsSteps from "./CardsSteps";
import './CardsContainer.css'

const CardsContainer = () => {

    const infoCards = [
        './img/cards/card1.svg',
        './img/cards/card2.svg',
        './img/cards/card3.svg',
        './img/cards/card4.svg',
        './img/cards/card5.svg',
        './img/cards/card6.svg',
        './img/cards/card7.svg',
        './img/cards/card8.svg',
        ]

    return(
        <div className="containerCards">

            <h2 className="titleSteps">Pasos para realizar tu compra</h2>

            <div className="cardsList">

            {infoCards.map((info,key) => (
                <CardsSteps inf={info} id={key}/>
            ))}

            </div>
            

        </div>
    )

}


export default CardsContainer;