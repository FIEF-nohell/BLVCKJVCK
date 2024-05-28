"use client"
import { useEffect, useState } from "react";
import Stats from "./components/stats";
import Actions from "./components/actions";
import CardHand, { CardData } from "./components/cardHand";

export default function Home() {
  // Stats
  const [bet, setBet] = useState(0);
  const [total, setTotal] = useState(500);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  // Hands
  const [playerHandCount, setPlayerHandCount] = useState(0);
  const [playerHand, setPlayerHand] = useState<CardData[]>([]);
  const [dealerHandCount, setDealerHandCount] = useState(0);
  const [dealerHand, setDealerHand] = useState<CardData[]>([]);

  // Game
  const [gameStep, setGameStep] = useState(0);
  const [hiddenTick, setHiddenTick] = useState(0);

  useEffect(() => {
    updateCounters()
    if (gameStep == 1) {
      if (playerHandCount >= 21) {
        revealDealerCard()
        setGameStep(2)
      }
    }
    if (gameStep == 2) {
      if (shouldDealerDraw(dealerHand, playerHand)) addCardToDealer(true)
      else setGameStep(3)
    }
    if (gameStep == 3) {
      checkForWin()
    }
  }, [playerHand, playerHand.length, dealerHand, dealerHand.length, gameStep, hiddenTick]);

  const checkForWin = () => {
    if (playerHandCount > 21 && dealerHandCount <= 21) {
      dealerWins()
    } else if (dealerHandCount > 21 && playerHandCount <= 21) {
      playerWins()
    } else if (playerHandCount > 21 && dealerHandCount > 21) {
      draw()
    } else if (playerHandCount <= 21 && dealerHandCount <= 21) {
      if (playerHandCount > dealerHandCount) {
        playerWins()
      } else if (dealerHandCount > playerHandCount) {
        dealerWins()
      } else {
        draw()
      }
    }
    setGameStep(0)
    setDealerHand([])
    setPlayerHand([])
    updateCounters()
    setHiddenTick(Math.random() * 100 * Math.random() * 100);
  }

  const dealerWins = () => {
    setBet(0)
    setLosses(losses + 1)
  }

  const playerWins = () => {
    setTotal(total + (bet * 2))
    setWins(wins + 1)
    setBet(0)
  }

  const draw = () => {
    setTotal(total + bet)
    setBet(0)
  }

  const updateCounters = () => {
    const playerSum = calculateHandSum(playerHand);
    const dealerSum = calculateHandSum(dealerHand);
    setPlayerHandCount(playerSum);
    setDealerHandCount(dealerSum);
  };

  const calculateHandSum = (hand: CardData[]) => {
    let sum = 0;
    let aceCount = 0;
    hand.forEach(card => {
      if (card.revealed != false) {
        if (card.text === 'A') {
          aceCount += 1;
          sum += 11;
        } else {
          sum += card.value;
        }
      }
    });
    while (sum > 21 && aceCount > 0) {
      sum -= 10;
      aceCount -= 1;
    }
    return sum;
  };

  const resetGame = () => {
    setBet(0);
    setTotal(500);
    setWins(0);
    setLosses(0);
    setGameStep(0)
    setHiddenTick(Math.random() * 100 * Math.random() * 100);
  };

  const addCardToPlayer = (visible: boolean) => {
    let ph = playerHand
    ph.push(getRandomCard(visible))
    setPlayerHand(ph)
    updateCounters()
    setHiddenTick(Math.random() * 100 * Math.random() * 100);
  }

  const addCardToDealer = (visible: boolean) => {
    let dh = dealerHand
    dh.push(getRandomCard(visible))
    setDealerHand(dh)
    updateCounters()
    setHiddenTick(Math.random() * 100 * Math.random() * 100);
  }

  const revealDealerCard = () => {
    let dh = dealerHand
    dh[0].revealed = true
    setDealerHand(dh)
    updateCounters()
    setHiddenTick(Math.random() * 100 * Math.random() * 100);
  }

  const shouldDealerDraw = (dealerHand: CardData[], playerHand: CardData[]): boolean => {
    const dealerSum = calculateHandSum(dealerHand);
    const playerSum = calculateHandSum(playerHand);
    if (dealerSum < 17) {
      return true;
    }
    if (dealerSum === 17) {
      return Math.random() < 0.05;
    }
    if (dealerSum > 17 && dealerSum < 21 && dealerSum < playerSum) {
      return Math.random() < 0.02;
    }
    return false;
  };

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
    setHiddenTick(Math.random() * 100 * Math.random() * 100);
    return card;
  };


  const takeBid = (bid: number, operator: string) => {
    //Adding to Pot
    if (total >= bid && operator == "add" && gameStep == 0) {
      setTotal(total - bid);
      setBet(bet + bid);
    }
    //Removing from Pot
    if (bet >= bid && operator == "rem" && gameStep == 0) {
      setTotal(total + bid);
      setBet(bet - bid);
    }
    setHiddenTick(Math.random() * 100 * Math.random() * 100);
  };

  const hit = () => {
    switch (gameStep) {
      case 0:
        if (bet >= 0) {
          addCardToDealer(false)
          addCardToPlayer(true)
          addCardToDealer(true)
          addCardToPlayer(true)
          setGameStep(1)
        }
        break
      case 1:
        addCardToPlayer(true)
        break
    }
    setHiddenTick(Math.random() * 100 * Math.random() * 100);
    updateCounters()
  }

  const stand = () => {
    switch (gameStep) {
      case 1:
        revealDealerCard()
        setGameStep(2)
        break
    }
    setHiddenTick(Math.random() * 100 * Math.random() * 100);
    updateCounters()
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
              <div className="w-16 h-16 bg-blvck rounded-full flex items-center justify-center text-whvte font-bold cursor-pointer"
                onClick={() => takeBid(10, "add")}>
                $10
              </div>
              <div className="w-16 h-16 bg-blvck rounded-full flex items-center justify-center text-whvte font-bold cursor-pointer"
                onClick={() => takeBid(50, "add")}>
                $50
              </div>
              <div className="w-16 h-16 bg-blvck rounded-full flex items-center justify-center text-whvte font-bold cursor-pointer"
                onClick={() => takeBid(100, "add")}>
                $100
              </div>
              <div className="w-16 h-16 bg-blvck rounded-full flex items-center justify-center text-whvte font-bold cursor-pointer"
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
              <Actions playerHandCount={playerHandCount} dealerHandCount={dealerHandCount} hit={hit} stand={stand} gameStep={gameStep}></Actions>
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="w-full h-[5%] rounded-b-[3rem]"></div>
      </div>
    </main >
  );
}
