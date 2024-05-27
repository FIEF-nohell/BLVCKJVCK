"use client"
import { useEffect, useState } from "react";
import Stats from "./components/stats";
import Actions from "./components/actions";
import CardHand from "./components/cardHand";

// Define the type for the card data
interface CardData {
  suit: string;
  value: string;
  bgColor: string;
  textColor: string;
  revealed: boolean;
}

// Sample card data (this can be dynamic as needed)
const playerCardData: CardData[] = [
  { suit: '♥', value: '8', bgColor: 'bg-blvck', textColor: 'text-white', revealed: true },
  { suit: '♦', value: '3', bgColor: 'bg-rvd', textColor: 'text-white', revealed: true },
  { suit: '♠', value: '2', bgColor: 'bg-blvck', textColor: 'text-white', revealed: true },
  { suit: '♣', value: '10', bgColor: 'bg-rvd', textColor: 'text-white', revealed: true },
];

const dealerCardData: CardData[] = [
  { suit: '♥', value: '8', bgColor: 'bg-blvck', textColor: 'text-white', revealed: true },
  { suit: '♦', value: '3', bgColor: 'bg-rvd', textColor: 'text-white', revealed: false },
];

export default function Home() {
  // Set some variable states
  const [bet, setBet] = useState(100);
  const [total, setTotal] = useState(750);
  const [wins, setWins] = useState(3);
  const [losses, setLosses] = useState(1);
  const [playerHandCount, setPlayerHandCount] = useState(16);
  const [dealerHandCount, setDealerHandCount] = useState(0);

  useEffect(() => {
    let playerSum = 0
    playerCardData.forEach(element => {
      playerSum += parseInt(element.value)
    });
    setPlayerHandCount(playerSum);
  }, [playerCardData, dealerCardData]);

  const resetGame = () => {
    setBet(0);
    setTotal(0);
    setWins(0);
    setLosses(0);
  };

  return (
    <main className="h-screen flex items-center justify-center bg-blvck text-tvxt select-none">
      <div className="bg-[#ffffff] rounded-[3rem] shadow-lg w-[80%] h-[85%] m-0 flex flex-col">

        {/* title line */}
        <div className="w-full h-[10%] rounded-t-[3rem] flex items-center justify-center">
          <p className="font-bold text-[2.5rem] text-center text-svcond" onClick={resetGame}>BLVCKJVCK</p>
        </div>

        {/* upper half of the desk */}
        <div className="w-full h-[45%] flex items-center justify-center">
          <div className="w-[85%] h-[85%] flex items-center justify-between">
            {/* current bet */}
            <div className="w-[20%] h-full flex items-center justify-center text-xl">
              <div>
                <p className="font-semibold">Bet: <span className="text-svcond font-bold">${bet}</span></p>
              </div>
            </div>
            {/* dealers hand */}
            <div className="w-[60%] h-full mx-2">
              <CardHand cards={dealerCardData} />
            </div>
            {/* stats */}
            <div className="w-[20%] h-full flex items-center justify-center text-xl">
              <Stats wins={wins} losses={losses} total={total}></Stats>
            </div>
          </div>
        </div>

        {/* bottom half of the desk */}
        <div className="w-full h-[45%] flex items-center justify-center">
          <div className="w-[85%] h-[85%] flex items-center justify-between">
            {/* bet selection */}
            <div className="w-[20%] h-full flex flex-col items-center justify-around">
              <div className="w-16 h-16 bg-blvck/80 border-4 border-blvck rounded-full flex items-center justify-center text-tvxt font-bold cursor-pointer">
                $10
              </div>
              <div className="w-16 h-16 bg-blvck/80 border-4 border-blvck rounded-full flex items-center justify-center text-tvxt font-bold cursor-pointer">
                $50
              </div>
              <div className="w-16 h-16 bg-blvck/80 border-4 border-blvck rounded-full flex items-center justify-center text-tvxt font-bold cursor-pointer">
                $100
              </div>
              <div className="w-16 h-16 bg-blvck/80 border-4 border-blvck rounded-full flex items-center justify-center text-tvxt font-bold cursor-pointer">
                $500
              </div>
            </div>
            {/* players hand */}
            <div className="w-[60%] h-full mx-2 flex items-center justify-center">
              <CardHand cards={playerCardData} />
            </div>
            {/* player actions */}
            <div className="w-[20%] h-full flex items-center justify-center text-xl">
              <Actions playerHandCount={playerHandCount}></Actions>
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="w-full h-[5%] rounded-b-[3rem]"></div>
      </div>
    </main>
  );
}
