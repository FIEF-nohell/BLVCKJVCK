//Actions Component
interface ActionsProps {
    playerHandCount: number;
    hit: any;
    stand: any;
}
export default function Actions({ playerHandCount, hit, stand }: ActionsProps) {
    return (
        <div>
            <p className="font-bold text-tvxt text-[2.25rem]">{playerHandCount}</p>
            <div className="hover:cursor-pointer mt-8 mb-4 px-8 py-1 font-semibold text-center text-blvck/80 rounded-full border-2 border-svcond/70"
                onClick={hit}>Hit</div>
            <div className="hover:cursor-pointer mt-8 mb-4 px-8 py-1 font-semibold text-center text-blvck/80 rounded-full border-2 border-svcond/70"
                onClick={stand}>Stand</div>
        </div>
    )
}