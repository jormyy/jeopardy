import { useState } from 'react'
import './QuestionModal.css'

// adjustment per player: null = untouched, 'correct' = +value, 'incorrect' = -value
export default function QuestionModal({ question, players, onClose }) {
    const [revealed, setReveal] = useState(false)
    const [adjustments, setAdjustments] = useState(() => Array(players.length).fill(null))
    const [bonuses, setBonuses] = useState(() => Array(players.length).fill(false))

    const toggle = (playerIndex, direction) => {
        setAdjustments((prev) => {
            const next = [...prev]
            next[playerIndex] = prev[playerIndex] === direction ? null : direction
            return next
        })
    }

    const toggleBonus = (playerIndex) => {
        setBonuses((prev) => {
            const next = [...prev]
            next[playerIndex] = !prev[playerIndex]
            return next
        })
    }

    const handleDone = () => {
        const deltas = adjustments.map((adj, i) => {
            const main =
                adj === 'correct' ? question.value : adj === 'incorrect' ? -question.value : 0
            const bonus = question.bonus && bonuses[i] ? 100 : 0
            return main + bonus
        })
        onClose(deltas)
    }

    const formatScore = (score) => {
        const abs = Math.abs(score)
        return score < 0 ? `-$${abs.toLocaleString()}` : `$${abs.toLocaleString()}`
    }

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <div className="modal-value">${question.value}</div>

                {!revealed ? (
                    <>
                        {question.questionImage ? (
                            <img src={question.questionImage} alt="" className="modal-question-image" />
                        ) : question.questionAudio ? (
                            <audio controls autoPlay className="modal-question-audio">
                                <source src={question.questionAudio} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        ) : (
                            <div className="modal-question">{question.question}</div>
                        )}
                        <button className="reveal-btn" onClick={() => setReveal(true)}>
                            Reveal Answer
                        </button>
                    </>
                ) : (
                    <>
                        {question.answerImage ? (
                            <>
                                <img src={question.answerImage} alt="" className="modal-answer-image" />
                                <div className="modal-answer">{question.answer}</div>
                            </>
                        ) : (
                            <div className="modal-answer">{question.answer}</div>
                        )}

                        <div className="modal-players">
                            {players.map((p, i) => {
                                const adj = adjustments[i]
                                const hasBonus = question.bonus && bonuses[i]
                                const mainDelta =
                                    adj === 'correct'
                                        ? question.value
                                        : adj === 'incorrect'
                                          ? -question.value
                                          : 0
                                const totalDelta = mainDelta + (hasBonus ? 100 : 0)
                                return (
                                    <div key={i} className="player-adj-row">
                                        <button
                                            className={`adj-btn minus ${adj === 'incorrect' ? 'active-minus' : ''}`}
                                            onClick={() => toggle(i, 'incorrect')}
                                            title={`-$${question.value}`}
                                        >
                                            −
                                        </button>

                                        <div className="player-adj-info">
                                            <span className="player-adj-name">{p.name}</span>
                                            <span
                                                className={`player-adj-score ${p.score < 0 ? 'neg' : ''}`}
                                            >
                                                {formatScore(p.score)}
                                            </span>
                                            {(adj || hasBonus) && (
                                                <span
                                                    className={`adj-preview ${totalDelta >= 0 ? 'preview-pos' : 'preview-neg'}`}
                                                >
                                                    {totalDelta >= 0
                                                        ? `+$${totalDelta}`
                                                        : `-$${Math.abs(totalDelta)}`}
                                                </span>
                                            )}
                                        </div>

                                        <button
                                            className={`adj-btn plus ${adj === 'correct' ? 'active-plus' : ''}`}
                                            onClick={() => toggle(i, 'correct')}
                                            title={`+$${question.value}`}
                                        >
                                            +
                                        </button>

                                        {question.bonus && (
                                            <button
                                                className={`bonus-btn ${bonuses[i] ? 'active-bonus' : ''}`}
                                                onClick={() => toggleBonus(i)}
                                                title="+$100 bonus"
                                            >
                                                +$100
                                            </button>
                                        )}
                                    </div>
                                )
                            })}
                        </div>

                        <button className="done-btn" onClick={handleDone}>
                            Done
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}
