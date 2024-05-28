import React from 'react';
import { motion } from 'framer-motion';

export interface CardData {
    suit: string;
    text: string;
    value: number;
    bgColor: string;
    revealed: boolean;
}

interface CardHandProps {
    cards: CardData[];
}

// Define motion variants for the sliding effect
const cardVariants = {
    hidden: { y: 500 },
    visible: { y: 0 }
};

// Card component with props typed
const Card: React.FC<CardData> = ({ suit, text, bgColor, revealed }) => (
    <>
        {revealed ? (
            <motion.div
                className={`relative w-40 h-56 ${bgColor} text-tvxt rounded-2xl flex flex-col justify-between p-2 m-1 transform transition-transform duration-300 ease-in-out hover:scale-105`}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.25 }}
            >
                <span className="text-[2.5rem] font-bold ml-1">{text}</span>
                <span className="text-[3rem] font-bold ml-1 text-right mr-2">{suit}</span>
            </motion.div>
        ) : (
            <motion.div
                className="relative w-40 h-56 bg-[#ffffff3e] rounded-2xl flex flex-col justify-between p-2 m-1 transform transition-transform duration-300 ease-in-out hover:scale-105"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.25 }}
            />
        )}
    </>
);

// CardHand component with props typed
const CardHand: React.FC<CardHandProps> = ({ cards }) => (
    <motion.div className="flex items-center justify-center h-full">
        {cards.map((card, index) => (
            <Card key={index} {...card} />
        ))}
    </motion.div>
);

export default CardHand;
