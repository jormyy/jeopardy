import './WinnerScreen.css'

function formatScore(score) {
    const abs = Math.abs(score)
    return score < 0 ? `-$${abs.toLocaleString()}` : `$${abs.toLocaleString()}`
}

export default function WinnerScreen({ players, onPlayAgain }) {
    const sorted = [...players].sort((a, b) => b.score - a.score)
    const winner = sorted[0]
    const isTie = sorted.length > 1 && sorted[0].score === sorted[1].score

    return (
        <div className="winner-screen">
            <div className="winner-card">
                <div className="winner-trophy">🏆</div>

                {isTie ? (
                    <h1 className="winner-headline">It's a Tie!</h1>
                ) : (
                    <>
                        <h1 className="winner-headline">Winner!</h1>
                        <div className="winner-name">{winner.name}</div>
                        <div className="winner-score">{formatScore(winner.score)}</div>
                    </>
                )}

                <div className="final-scores">
                    <h2>Final Scores</h2>
                    <div className="score-list">
                        {sorted.map((p, i) => (
                            <div key={i} className={`score-row ${i === 0 ? 'top' : ''}`}>
                                <span className="rank">{i + 1}.</span>
                                <span className="s-name">{p.name}</span>
                                <span className={`s-score ${p.score < 0 ? 'neg' : ''}`}>
                                    {formatScore(p.score)}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="play-again-btn" onClick={onPlayAgain}>
                    Play Again
                </button>
            </div>
        </div>
    )
}
