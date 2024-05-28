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
                className={`relative flex-shrink-0 w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-44 lg:w-36 lg:h-48 xl:w-40 xl:h-56 ${bgColor} text-tvxt rounded-2xl flex flex-col justify-between p-2 m-1 transform transition-transform duration-300 ease-in-out hover:scale-105`}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                transition={{ duration: 0.25 }}
            >
                <span className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold ml-1">{text}</span>
                <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold ml-1 text-right mr-2">{suit}</span>
            </motion.div>
        ) : (
            <motion.div
                className="relative flex-shrink-0 w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-44 lg:w-36 lg:h-48 xl:w-40 xl:h-56 bg-[#ffffff3e] rounded-2xl flex flex-col justify-between p-2 m-1 transform transition-transform duration-300 ease-in-out hover:scale-105"
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
    <motion.div className="flex items-center justify-center h-full" style={{ overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>
            {`
            ::-webkit-scrollbar {
                display: none;
            }
            `}
        </style>
        {cards.map((card, index) => (
            <Card key={index} {...card} />
        ))}
    </motion.div>
);

export default CardHand;
