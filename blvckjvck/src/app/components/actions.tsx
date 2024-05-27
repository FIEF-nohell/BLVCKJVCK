//Actions Component
interface ActionsProps {
    playerHandCount: number;
    dealerHandCount: number;
    hit: any;
    stand: any;
    gameStep: number;
}

export default function Actions({ playerHandCount, dealerHandCount, hit, stand, gameStep }: ActionsProps) {
    const buttonText = gameStep === 0 || gameStep === 3 ? 'Start' : 'Hit';

    return (
        <div>
            <div className="flex justify-between w-full">
                <p className="font-bold text-tvxt text-[2.25rem]">{playerHandCount}</p>
                <p className="font-bold text-rvd text-[2.25rem] text-right">{dealerHandCount}</p>
            </div>
            <div
                className="hover:cursor-pointer mt-8 mb-4 px-8 py-1 font-semibold text-center text-blvck/80 rounded-full border-2 border-svcond/70"
                onClick={hit}
            >
                {buttonText}
            </div>
            <div
                className="hover:cursor-pointer mt-8 mb-4 px-8 py-1 font-semibold text-center text-blvck/80 rounded-full border-2 border-svcond/70"
                onClick={stand}
            >
                Stand
            </div>
        </div>
    );
}