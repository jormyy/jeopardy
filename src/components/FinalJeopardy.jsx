import { useState } from 'react'
import { FINAL_JEOPARDY } from '../data/questions'
import './FinalJeopardy.css'

export default function FinalJeopardy({ players, onComplete }) {
    const [phase, setPhase] = useState('wager') // 'wager' | 'question' | 'reveal'
    const [wagers, setWagers] = useState(() =>
        players.map((p) => Math.max(100, Math.min(100, p.score))),
    )
    const [adjustments, setAdjustments] = useState(() => Array(players.length).fill(null))

    const handleWagerChange = (i, val) => {
        const max = Math.max(100, players[i].score)
        const parsed = parseInt(val, 10)
        const clamped = isNaN(parsed) ? 100 : Math.min(max, Math.max(100, parsed))
        setWagers((prev) => {
            const next = [...prev]
            next[i] = clamped
            return next
        })
    }

    const toggle = (playerIndex, direction) => {
        setAdjustments((prev) => {
            const next = [...prev]
            next[playerIndex] = prev[playerIndex] === direction ? null : direction
            return next
        })
    }

    const handleFinish = () => {
        const deltas = adjustments.map((adj, i) => {
            if (adj === 'correct') return wagers[i]
            if (adj === 'incorrect') return -wagers[i]
            return 0
        })
        onComplete(deltas)
    }

    const formatScore = (score) => {
        const abs = Math.abs(score)
        return score < 0 ? `-$${abs.toLocaleString()}` : `$${abs.toLocaleString()}`
    }

    return (
        <div className="fj-screen">
            <div className="fj-card">
                <div className="fj-title">Final Jeopardy!</div>
                <div className="fj-category">{FINAL_JEOPARDY.category}</div>

                {/* ── Wager phase ── */}
                {phase === 'wager' && (
                    <>
                        <p className="fj-instruction">
                            Enter each player's wager ($100 – their current bankroll).
                        </p>
                        <div className="fj-wager-list">
                            {players.map((p, i) => {
                                const max = Math.max(100, p.score)
                                return (
                                    <div key={i} className="fj-wager-row">
                                        <div className="fj-wager-info">
                                            <span className="fj-wager-name">{p.name}</span>
                                            <span
                                                className={`fj-wager-bankroll ${p.score < 0 ? 'neg' : ''}`}
                                            >
                                                {formatScore(p.score)}
                                            </span>
                                        </div>
                                        <div className="fj-wager-input-wrap">
                                            <span className="fj-dollar">$</span>
                                            <input
                                                type="number"
                                                className="fj-wager-input"
                                                value={wagers[i]}
                                                min={100}
                                                max={max}
                                                onChange={(e) =>
                                                    handleWagerChange(i, e.target.value)
                                                }
                                            />
                                            <span className="fj-max">max: {formatScore(max)}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <button className="fj-btn" onClick={() => setPhase('question')}>
                            See the Question →
                        </button>
                    </>
                )}

                {/* ── Question phase ── */}
                {(phase === 'question' || phase === 'reveal') && (
                    <>
                        <div className="fj-question">{FINAL_JEOPARDY.question}</div>

                        {phase === 'question' && (
                            <button className="fj-btn" onClick={() => setPhase('reveal')}>
                                Reveal Answer
                            </button>
                        )}

                        {phase === 'reveal' && (
                            <>
                                <div className="fj-answer">{FINAL_JEOPARDY.answer}</div>

                                <div className="fj-adj-list">
                                    {players.map((p, i) => {
                                        const adj = adjustments[i]
                                        return (
                                            <div key={i} className="fj-adj-row">
                                                <button
                                                    className={`adj-btn minus ${adj === 'incorrect' ? 'active-minus' : ''}`}
                                                    onClick={() => toggle(i, 'incorrect')}
                                                    title={`-$${wagers[i]}`}
                                                >
                                                    −
                                                </button>

                                                <div className="fj-adj-info">
                                                    <span className="fj-adj-name">{p.name}</span>
                                                    <span
                                                        className={`fj-adj-score ${p.score < 0 ? 'neg' : ''}`}
                                                    >
                                                        {formatScore(p.score)}
                                                    </span>
                                                    <span className="fj-adj-wager">
                                                        Wager: {formatScore(wagers[i])}
                                                    </span>
                                                    {adj && (
                                                        <span
                                                            className={`adj-preview ${adj === 'correct' ? 'preview-pos' : 'preview-neg'}`}
                                                        >
                                                            {adj === 'correct'
                                                                ? `+${formatScore(wagers[i])}`
                                                                : `-${formatScore(wagers[i])}`}
                                                        </span>
                                                    )}
                                                </div>

                                                <button
                                                    className={`adj-btn plus ${adj === 'correct' ? 'active-plus' : ''}`}
                                                    onClick={() => toggle(i, 'correct')}
                                                    title={`+$${wagers[i]}`}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        )
                                    })}
                                </div>

                                <button className="fj-btn fj-finish-btn" onClick={handleFinish}>
                                    See Final Scores →
                                </button>
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
