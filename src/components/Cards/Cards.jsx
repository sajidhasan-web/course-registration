import Card from "../Card/Card";


const Cards = () => {
    return (
        <div className="md:col-span-10">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

            </div>
        </div>
    );
};

export default Cards;