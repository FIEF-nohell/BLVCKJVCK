//Stats Component
interface StatsProps {
    wins: number
    losses: number
    total: number
}
export default function Stats({ wins, losses, total }: StatsProps) {
    return (
        <>
            {/* MOBILE VIEW */}
            <div className="block lg:hidden text-md text-tvxt">
                <div className="flex justify-between">
                    <p className="font-semibold">Wins: {wins} - Losses: {losses} - Total: ${total}</p>
                </div>
            </div>

            {/* DESKTOP VIEW */}
            <div className="hidden lg:block text-md text-tvxt">
                <p className="font-semibold">Wins: {wins}</p>
                <p className="mt-4 mb-4 font-semibold">Losses: {losses}</p>
                <p className="font-semibold">Total: ${total}</p>
            </div>
        </>
    )
}