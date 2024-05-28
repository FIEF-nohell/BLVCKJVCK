//Stats Component
interface StatsProps {
    wins: number
    losses: number
    total: number
}
export default function Stats({ wins, losses, total }: StatsProps) {
    return (
        <div>
            <p className="font-semibold">Wins: <span className="text-tvxt font-bold">{wins}</span></p>
            <p className="mt-4 mb-4 font-semibold">Losses: <span className="text-tvxt font-bold">{losses}</span></p>
            <p className="font-semibold">Total: <span className="text-tvxt font-bold">${total}</span></p>
        </div>
    )
}