import Card from "../Card/Card";


const Cards = ({cardsData, handleCart}) => {
    

    return (
        <div className="md:col-span-10">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            {
                cardsData.map(card => <Card key={card.id} card={card} handleCart={handleCart}></Card>)
            }

            </div>
        </div>
    );
};

export default Cards;