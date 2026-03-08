import { useState } from 'react';
import { CATEGORIES } from './data/questions';
import SetupScreen from './components/SetupScreen';
import GameBoard from './components/GameBoard';
import QuestionModal from './components/QuestionModal';
import FinalJeopardy from './components/FinalJeopardy';
import WinnerScreen from './components/WinnerScreen';

function App() {
  const [phase, setPhase] = useState('setup'); // 'setup' | 'game' | 'final' | 'winner'
  const [players, setPlayers] = useState([]);
  const [usedTiles, setUsedTiles] = useState(new Set());
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleSetupComplete = (names) => {
    setPlayers(names.map((name) => ({ name, score: 0 })));
    setUsedTiles(new Set());
    setPhase('game');
  };

  const handleTileClick = (categoryIndex, questionIndex, question) => {
    setActiveQuestion({ categoryIndex, questionIndex, question });
  };

  const applyAdjustments = (adjustments) => {
    // adjustments: array of deltas aligned with players array
    setPlayers((prev) =>
      prev.map((p, i) => ({ ...p, score: p.score + (adjustments[i] ?? 0) }))
    );
  };

  const totalTiles = CATEGORIES.reduce((sum, cat) => sum + cat.questions.length, 0);

  const handleQuestionClose = (adjustments) => {
    if (adjustments) applyAdjustments(adjustments);
    setUsedTiles((prev) => {
      const next = new Set([...prev, `${activeQuestion.categoryIndex}-${activeQuestion.questionIndex}`]);
      if (next.size === totalTiles) setPhase('final');
      return next;
    });
    setActiveQuestion(null);
  };

  const handleFinalComplete = (adjustments) => {
    applyAdjustments(adjustments);
    setPhase('winner');
  };

  const handlePlayAgain = () => {
    setPlayers([]);
    setUsedTiles(new Set());
    setActiveQuestion(null);
    setPhase('setup');
  };

  return (
    <div>
      {phase === 'setup' && <SetupScreen onComplete={handleSetupComplete} />}

      {phase === 'game' && (
        <>
          <GameBoard
            players={players}
            usedTiles={usedTiles}
            onTileClick={handleTileClick}
          />
          {activeQuestion && (
            <QuestionModal
              question={activeQuestion.question}
              players={players}
              onClose={handleQuestionClose}
            />
          )}
        </>
      )}

      {phase === 'final' && (
        <FinalJeopardy players={players} onComplete={handleFinalComplete} />
      )}

      {phase === 'winner' && (
        <WinnerScreen players={players} onPlayAgain={handlePlayAgain} />
      )}
    </div>
  );
}

export default App;
