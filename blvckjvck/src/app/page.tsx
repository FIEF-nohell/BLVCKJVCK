"use client"
import { useEffect, useState } from "react";
import Stats from "./components/stats";
import Actions from "./components/actions";
import CardHand, { CardData } from "./components/cardHand";

// Sample card data  ♥ ♦ ♠ ♣
const playerCardData: CardData[] = [
  { suit: '♥', text: 'J', value: '10', bgColor: 'bg-blvck', revealed: true },
  { suit: '♣', text: '3', value: '3', bgColor: 'bg-rvd', revealed: true },
];

const dealerCardData: CardData[] = [
  { suit: '♥', text: 'J', value: '10', bgColor: 'bg-blvck', revealed: true },
  { suit: '♦', text: '3', value: '3', bgColor: 'bg-rvd', revealed: false },
];

export default function Home() {
  // Stats
  const [bet, setBet] = useState(100);
  const [total, setTotal] = useState(750);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  // Hands
  const [playerHandCount, setPlayerHandCount] = useState(0);
  const [playerHand, SetPlayerHand] = useState<CardData[]>([]);
  const [dealerHandCount, setDealerHandCount] = useState(0);
  const [dealerHand, SetDealerHand] = useState<CardData[]>([]);

  // Game
  const [gameStep, setGameStep] = useState(0);
  // 0: Bidding and starting the game

  useEffect(() => {
    //Player
    let playerSum = 0
    playerHand.forEach(card => {
      playerSum += parseInt(card.value)
    });
    setPlayerHandCount(playerSum);

    //Dealer
    let dealerSum = 0
    dealerHand.forEach(card => {
      dealerSum += parseInt(card.value)
    });
    setDealerHandCount(dealerSum);
  }, [playerCardData, dealerCardData]);

  const resetGame = () => {
    setBet(100);
    setTotal(500);
    setWins(0);
    setLosses(0);
  };

  const addCardToPlayer = (visible: boolean) => {
    let ph = playerHand
    let card = getRandomCard(visible)
    ph.push(card)
    SetPlayerHand(ph)
    console.log(card)
  }

  const addCardToDealer = (visible: boolean) => {
    let dh = dealerHand
    let card = getRandomCard(visible)
    dh.push(card)
    SetDealerHand(dh)
    console.log(card)
  }

  const getRandomElement = (arr: any) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const getRandomCard = (visible: boolean): CardData => {
    const suits = ['♥', '♦', '♠', '♣'];
    const values = [
      { text: 'A', value: 0 },
      { text: '2', value: 2 },
      { text: '3', value: 3 },
      { text: '4', value: 4 },
      { text: '5', value: 5 },
      { text: '6', value: 6 },
      { text: '7', value: 7 },
      { text: '8', value: 8 },
      { text: '9', value: 9 },
      { text: '10', value: 10 },
      { text: 'J', value: 10 },
      { text: 'Q', value: 10 },
      { text: 'K', value: 10 },
    ];

    const suit = getRandomElement(suits);
    const cardValue = getRandomElement(values);
    const bgColor = suit === '♥' || suit === '♦' ? 'bg-rvd' : 'bg-blvck';

    const card: CardData = {
      suit: suit,
      text: cardValue.text,
      value: cardValue.value,
      bgColor: bgColor,
      revealed: visible,
    };

    return card;
  };


  const takeBid = (bid: number, operator: string) => {
    //Adding to Pot
    if (total >= bid && operator == "add") {
      setTotal(total - bid);
      setBet(bet + bid);
    }
    //Removing from Pot
    if (bet >= bid && operator == "rem") {
      setTotal(total + bid);
      setBet(bet - bid);
    }
  };

  const hit = () => {
    switch (gameStep) {
      case 0:
        if (bet >= 0) {
          // Draw hidden card for dealer, draw full card for user, full card for dealer full card for user
          addCardToDealer(false)
          addCardToPlayer(true)
          addCardToDealer(true)
          addCardToPlayer(true)
          setGameStep(1)
        }
        break
    }
  }

  const stand = () => {

  }

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
              <CardHand cards={dealerHand} />
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
              <div className="w-16 h-16 bg-blvck/80 border-4 border-blvck rounded-full flex items-center justify-center text-tvxt font-bold cursor-pointer"
                onClick={() => takeBid(10, "add")}>
                $10
              </div>
              <div className="w-16 h-16 bg-blvck/80 border-4 border-blvck rounded-full flex items-center justify-center text-tvxt font-bold cursor-pointer"
                onClick={() => takeBid(50, "add")}>
                $50
              </div>
              <div className="w-16 h-16 bg-blvck/80 border-4 border-blvck rounded-full flex items-center justify-center text-tvxt font-bold cursor-pointer"
                onClick={() => takeBid(100, "add")}>
                $100
              </div>
              <div className="w-16 h-16 bg-blvck/80 border-4 border-blvck rounded-full flex items-center justify-center text-tvxt font-bold cursor-pointer"
                onClick={() => takeBid(500, "add")}>
                $500
              </div>
            </div>
            {/* players hand */}
            <div className="w-[60%] h-full mx-2 flex items-center justify-center">
              <CardHand cards={playerHand} />
            </div>
            {/* player actions */}
            <div className="w-[20%] h-full flex items-center justify-center text-xl">
              <Actions playerHandCount={playerHandCount} hit={hit} stand={stand}></Actions>
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="w-full h-[5%] rounded-b-[3rem]"></div>
      </div>
    </main >
  );
}
