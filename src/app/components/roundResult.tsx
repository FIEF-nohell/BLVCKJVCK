import { useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import JSConfetti from 'js-confetti';

export interface RoundResultProps {
    showResult: boolean;
    winner: string;
}

export default function RoundResult({ showResult, winner }: RoundResultProps) {
    useEffect(() => {
        if (showResult && winner == "Player Wins") {
            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti({
                emojis: ['💸']
            });
        }
    }, [showResult]);

    return (
        <AnimatePresence>
            {showResult ? (
                <>
                    <motion.p
                        className="z-50 absolute text-[4rem] font-extrabold"
                        initial={{ x: -2000 }}
                        animate={{ x: 0 }}
                        exit={{ x: -2000 }}
                    >
                        {winner}
                    </motion.p>
                    <motion.div
                        className="z-40 absolute w-full h-full bg-blvck/70"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                </>
            ) : null}
        </AnimatePresence>
    );
}
