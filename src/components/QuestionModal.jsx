import { useState } from 'react';
import './QuestionModal.css';

// adjustment per player: null = untouched, 'correct' = +value, 'incorrect' = -value
export default function QuestionModal({ question, players, onClose }) {
  const [revealed, setReveal] = useState(false);
  const [adjustments, setAdjustments] = useState(() => Array(players.length).fill(null));

  const toggle = (playerIndex, direction) => {
    setAdjustments((prev) => {
      const next = [...prev];
      // Toggle: clicking same direction again clears it
      next[playerIndex] = prev[playerIndex] === direction ? null : direction;
      return next;
    });
  };

  const handleDone = () => {
    const deltas = adjustments.map((adj) => {
      if (adj === 'correct') return question.value;
      if (adj === 'incorrect') return -question.value;
      return 0;
    });
    onClose(deltas);
  };

  const formatScore = (score) => {
    const abs = Math.abs(score);
    return score < 0 ? `-$${abs.toLocaleString()}` : `$${abs.toLocaleString()}`;
  };

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && handleDone()}>
      <div className="modal">
        <div className="modal-value">${question.value}</div>

        <div className="modal-question">{question.question}</div>

        {!revealed ? (
          <button className="reveal-btn" onClick={() => setReveal(true)}>
            Reveal Answer
          </button>
        ) : (
          <>
            <div className="modal-answer">{question.answer}</div>

            <div className="modal-players">
              {players.map((p, i) => {
                const adj = adjustments[i];
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
                      <span className={`player-adj-score ${p.score < 0 ? 'neg' : ''}`}>
                        {formatScore(p.score)}
                      </span>
                      {adj && (
                        <span className={`adj-preview ${adj === 'correct' ? 'preview-pos' : 'preview-neg'}`}>
                          {adj === 'correct' ? `+$${question.value}` : `-$${question.value}`}
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
                  </div>
                );
              })}
            </div>

            <button className="done-btn" onClick={handleDone}>
              Done
            </button>
          </>
        )}
      </div>
    </div>
  );
}
