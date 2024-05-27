"use client"
import { useState } from "react";
import Stats from "./components/stats";
import Actions from "./components/actions";

export default function Home() {
  //Set some variable states
  const [bet, setBet] = useState(100)
  const [total, setTotal] = useState(750)
  const [wins, setWins] = useState(3)
  const [losses, setLosses] = useState(1)
  const [playerHandCount, setPlayerHandCount] = useState(16)
  const [dealerHandCount, setDealerHandCount] = useState(0)

  const resetGame = () => {
    setBet(0)
    setTotal(0)
    setWins(0)
    setLosses(0)
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
            <div className="w-[60%] h-full bg-rvd mx-2"></div>
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
            <div className="w-[20%] h-full bg-svcond"></div>
            {/* players hand */}
            <div className="w-[60%] h-full bg-rvd mx-2"></div>
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