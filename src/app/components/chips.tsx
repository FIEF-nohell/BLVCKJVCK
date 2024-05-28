export interface ChipsProps {
    takeBid: any;
    total: number;
    bet: number;
}

export default function Chips({ takeBid, total, bet }: ChipsProps) {
    return (
        <>
            {/* MOBILE VIEW */}
            <div className="flex lg:hidden w-full justify-between text-[0.75rem] m-[2vh]">
                <div className="cursor-pointer bg-tvxt text-blvck rounded-full h-full aspect-square flex items-center justify-center font-bold shadow-lg" onClick={() => takeBid(50, "add")}>
                    <span>50</span>
                </div>
                <div className="cursor-pointer bg-tvxt text-blvck rounded-full h-full aspect-square flex items-center justify-center font-bold shadow-lg" onClick={() => takeBid(100, "add")}>
                    <span>100</span>
                </div>
                <div className="cursor-pointer bg-tvxt text-blvck rounded-full h-full aspect-square flex items-center justify-center font-bold shadow-lg" onClick={() => takeBid(200, "add")}>
                    <span>200</span>
                </div>
                <div className="cursor-pointer bg-tvxt text-blvck rounded-full h-full aspect-square flex items-center justify-center font-bold shadow-lg" onClick={() => takeBid(500, "add")}>
                    <span>500</span>
                </div>
                <div className="cursor-pointer bg-tvxt text-blvck rounded-full h-full aspect-square flex items-center justify-center font-bold shadow-lg" onClick={() => takeBid(1000, "add")}>
                    <span>1000</span>
                </div>
                <div className="cursor-pointer bg-tvxt text-blvck rounded-full h-full aspect-square flex items-center justify-center font-bold shadow-lg" onClick={() => takeBid(total, "add")}>
                    <span>All</span>
                </div>
                <div className="cursor-pointer bg-tvxt text-blvck rounded-full h-full aspect-square flex items-center justify-center font-bold shadow-lg" onClick={() => takeBid(bet, "rem")}>
                    <span>Undo</span>
                </div>
            </div>


            {/* DESKTOP VIEW */}
            <div className="hidden lg:flex flex-col">
                <div className="cursor-pointer bg-tvxt text-blvck rounded-full w-12 h-12 flex items-center justify-center mb-4 text-lg font-bold shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110" onClick={() => takeBid(50, "add")}>
                    <span>50</span>
                </div>
                <div className="cursor-pointer bg-tvxt text-blvck rounded-full w-12 h-12 flex items-center justify-center mb-4 text-lg font-bold shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110" onClick={() => takeBid(100, "add")}>
                    <span>100</span>
                </div>
                <div className="cursor-pointer bg-tvxt text-blvck rounded-full w-12 h-12 flex items-center justify-center mb-4 text-lg font-bold shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110" onClick={() => takeBid(200, "add")}>
                    <span>200</span>
                </div>
                <div className="cursor-pointer bg-tvxt text-blvck rounded-full w-12 h-12 flex items-center justify-center mb-4 text-lg font-bold shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110" onClick={() => takeBid(500, "add")}>
                    <span>500</span>
                </div>
                <div className="cursor-pointer bg-tvxt text-blvck rounded-full w-12 h-12 flex items-center justify-center mb-4 text-lg font-bold shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110" onClick={() => takeBid(1000, "add")}>
                    <span>1000</span>
                </div>
                <div className="cursor-pointer bg-tvxt text-blvck rounded-full w-12 h-12 flex items-center justify-center mb-4 text-lg font-bold shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110" onClick={() => takeBid(total, "add")}>
                    <span>All</span>
                </div>
                <div className="cursor-pointer bg-tvxt text-blvck rounded-full w-12 h-12 flex items-center justify-center mb-4 text-lg font-bold shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110" onClick={() => takeBid(bet, "rem")}>
                    <span>Undo</span>
                </div>
            </div>
        </>
    )
}