import { useState } from 'react'
import './SetupScreen.css'

const MIN_PLAYERS = 1
const MAX_PLAYERS = 6

export default function SetupScreen({ onComplete }) {
    const [count, setCount] = useState(2)
    const [names, setNames] = useState(['', ''])

    const handleCountChange = (newCount) => {
        const n = Math.min(MAX_PLAYERS, Math.max(MIN_PLAYERS, newCount))
        setCount(n)
        setNames((prev) => {
            const updated = [...prev]
            while (updated.length < n) updated.push('')
            return updated.slice(0, n)
        })
    }

    const handleNameChange = (index, value) => {
        setNames((prev) => {
            const updated = [...prev]
            updated[index] = value
            return updated
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const finalNames = names.map((n, i) => n.trim() || `Player ${i + 1}`)
        onComplete(finalNames)
    }

    return (
        <div className="setup-screen">
            <div className="setup-card">
                <div className="setup-logo">
                    <span className="logo-j">J!</span>
                    <h1>JEOPARDY</h1>
                </div>

                <form onSubmit={handleSubmit} className="setup-form">
                    <div className="player-count-row">
                        <label>Number of Players</label>
                        <div className="count-controls">
                            <button
                                type="button"
                                className="count-btn"
                                onClick={() => handleCountChange(count - 1)}
                                disabled={count <= MIN_PLAYERS}
                            >
                                −
                            </button>
                            <span className="count-display">{count}</span>
                            <button
                                type="button"
                                className="count-btn"
                                onClick={() => handleCountChange(count + 1)}
                                disabled={count >= MAX_PLAYERS}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="name-inputs">
                        {names.map((name, i) => (
                            <div key={i} className="name-row">
                                <label htmlFor={`player-${i}`}>Player {i + 1}</label>
                                <input
                                    id={`player-${i}`}
                                    type="text"
                                    value={name}
                                    maxLength={20}
                                    placeholder={`Player ${i + 1}`}
                                    onChange={(e) => handleNameChange(i, e.target.value)}
                                    autoFocus={i === 0}
                                />
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="start-btn">
                        Start Game
                    </button>
                </form>
            </div>
        </div>
    )
}
