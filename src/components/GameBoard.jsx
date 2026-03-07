import { CATEGORIES } from '../data/questions';
import './GameBoard.css';

function formatScore(score) {
  const abs = Math.abs(score);
  const formatted = abs.toLocaleString();
  return score < 0 ? `-$${formatted}` : `$${formatted}`;
}

export default function GameBoard({ players, usedTiles, onTileClick, onFinalJeopardy }) {
  const allUsed = CATEGORIES.every((cat, ci) =>
    cat.questions.every((_, qi) => usedTiles.has(`${ci}-${qi}`))
  );

  return (
    <div className="game-layout">
      {/* Scoreboard */}
      <div className="scoreboard">
        {players.map((p, i) => (
          <div key={i} className="score-card">
            <div className="score-name">{p.name}</div>
            <div className={`score-value ${p.score < 0 ? 'negative' : ''}`}>
              {formatScore(p.score)}
            </div>
          </div>
        ))}
      </div>

      {/* Board */}
      <div className="board-wrapper">
        <div className="board" style={{ gridTemplateColumns: `repeat(${CATEGORIES.length}, 1fr)` }}>
          {/* Category headers */}
          {CATEGORIES.map((cat, ci) => (
            <div key={ci} className="category-header">
              {cat.name}
            </div>
          ))}

          {/* Question tiles — row by row */}
          {[0, 1, 2, 3, 4].map((qi) =>
            CATEGORIES.map((cat, ci) => {
              const q = cat.questions[qi];
              const key = `${ci}-${qi}`;
              const used = usedTiles.has(key);
              return (
                <button
                  key={key}
                  className={`tile ${used ? 'tile--used' : ''}`}
                  onClick={() => !used && onTileClick(ci, qi, q)}
                  disabled={used}
                >
                  {used ? '' : `$${q.value}`}
                </button>
              );
            })
          )}
        </div>

        <div className="board-footer">
          <button
            className="final-btn"
            onClick={onFinalJeopardy}
          >
            {allUsed ? 'Proceed to Final Jeopardy →' : 'Skip to Final Jeopardy →'}
          </button>
        </div>
      </div>
    </div>
  );
}
