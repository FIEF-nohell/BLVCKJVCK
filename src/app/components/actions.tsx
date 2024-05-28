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
        <>
            {/* MOBILE VIEW */}
            <div className="flex lg:hidden items-center justify-between w-full">
                <div
                    className="hover:cursor-pointer px-6 py-1 font-semibold text-center bg-tvxt text-blvck rounded-full border-2"
                    onClick={hit}
                >
                    {buttonText}
                </div>
                <div className="flex-grow flex items-center justify-center">
                    <p className="font-bold text-emerald-800 text-[2.25rem] mx-2">
                        {playerHandCount}
                    </p>
                    <p className="font-bold text-rvd-bright text-[2.25rem] mx-2 text-right">
                        {dealerHandCount}
                    </p>
                </div>
                <div
                    className="hover:cursor-pointer px-6 py-1 font-semibold text-center bg-tvxt text-blvck rounded-full border-2"
                    onClick={stand}
                >
                    Stand
                </div>
            </div>


            {/* DESKTOP VIEW */}
            <div className="hidden lg:block">
                <div className="flex justify-between w-full">
                    <p className="font-bold text-emerald-800 text-[2.25rem]">{playerHandCount}</p>
                    <p className="font-bold text-rvd-bright text-[2.25rem] text-right">{dealerHandCount}</p>
                </div>
                <div
                    className="hover:cursor-pointer mt-8 mb-4 px-8 py-1 font-semibold text-center bg-tvxt text-blvck rounded-full border-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
                    onClick={hit}
                >
                    {buttonText}
                </div>
                <div
                    className="hover:cursor-pointer mt-8 mb-4 px-8 py-1 font-semibold text-center bg-tvxt text-blvck rounded-full border-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
                    onClick={stand}
                >
                    Stand
                </div>
            </div>
        </>
    );
}