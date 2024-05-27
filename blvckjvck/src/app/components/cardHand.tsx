import React from 'react';

interface CardData {
    suit: string;
    value: string;
    bgColor: string;
    textColor: string;
    revealed: boolean;
}

interface cardHandProps {
    cards: CardData[];
}

// Card component with props typed
const Card: React.FC<CardData> = ({ suit, value, bgColor, textColor, revealed }) => (
    <>    {
        revealed ?
            <div className={`relative w-40 h-56 ${bgColor} ${textColor} rounded-2xl flex flex-col justify-between p-2 m-1`}>
                <span className="text-[2.5rem] font-bold ml-1">{value}</span>
                <span className="text-[3rem] font-bold ml-1">{suit}</span>
            </div >
            :
            <div className={`relative w-40 h-56 bg-yvllow rounded-lg flex flex-col justify-between p-2 m-1`}>

            </div >}
    </>

);

// cardHand component with props typed
const cardHand: React.FC<cardHandProps> = ({ cards }) => (
    <div className="flex items-center justify-center h-full">
        {cards.map((card, index) => (
            <Card key={index} {...card} />
        ))}
    </div>
);

export default cardHand;