import React, { useState, useEffect } from 'react';
import { Trophy, ArrowRight, RefreshCw } from 'lucide-react';
import { fallbackCards } from './data/fallbackCards.js';

export default function GuessTheCard({ onBack }) {
  const [currentCard, setCurrentCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [questionType, setQuestionType] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [streak, setStreak] = useState(0);
  const [usingFallback, setUsingFallback] = useState(true); // Start with fallback
  const [cardPool, setCardPool] = useState(fallbackCards.slice(0, 5)); // Start with first 5 cards
  const [usedCardIndices, setUsedCardIndices] = useState([]);

  // Fetch a random card from the last 2 sets
  const fetchRandomCard = async (retryCount = 0) => {
    setLoading(true);
    setShowResult(false);
    setSelectedAnswer(null);

    // Pick a random card from the current pool
    let availableIndices = cardPool.map((_, idx) => idx).filter(idx => !usedCardIndices.includes(idx));

    // Reset used indices if we've gone through all cards
    if (availableIndices.length === 0) {
      setUsedCardIndices([]);
      availableIndices = cardPool.map((_, idx) => idx);
    }

    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    const randomCard = cardPool[randomIndex];

    setUsedCardIndices(prev => [...prev, randomIndex]);
    setCurrentCard(randomCard);
    generateQuestion(randomCard, cardPool);
    setLoading(false);
  };

  // Try to fetch more cards from API in the background
  const fetchFromAPI = async () => {
    try {
      // Recent set IDs - Scarlet & Violet era sets
      const recentSets = [
        'sv08',  // Surging Sparks
        'sv07',  // Stellar Crown
        'sv06pt5', // Shrouded Fable
        'sv06',  // Twilight Masquerade
        'sv05',  // Temporal Forces
        'sv04pt5', // Paldean Fates
        'sv04',  // Paradox Rift
        'sv03pt5', // 151
        'sv03',  // Obsidian Flames
      ];

      // Pick a random set
      const randomSet = recentSets[Math.floor(Math.random() * recentSets.length)];

      // Fetch cards from that set - use Vite proxy to avoid CORS
      const apiUrl = `/api/pokemon/cards?q=set.id:${randomSet}&pageSize=100`;

      // Add timeout to the fetch
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

      const response = await fetch(apiUrl, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }

      const data = await response.json();

      if (!data.data || data.data.length === 0) {
        throw new Error('No cards found');
      }

      // Filter for Pokemon cards only (not Trainer/Energy)
      const pokemonCards = data.data.filter(card =>
        card.supertype === 'Pokémon' &&
        card.hp &&
        parseInt(card.hp) > 0
      );

      if (pokemonCards.length > 0) {
        // Successfully got cards from API - update pool
        console.log('API fetch successful, updating card pool');
        setCardPool(pokemonCards);
        setUsingFallback(false);
        setUsedCardIndices([]); // Reset used cards when we get new pool
      }
    } catch (error) {
      console.error('Background API fetch failed, continuing with fallback cards:', error);
      // Keep using fallback cards
    }
  };

  // Generate a random question and multiple choice answers
  const generateQuestion = (card, allCards) => {
    const questionTypes = [];

    // Always available: HP
    if (card.hp) questionTypes.push('hp');

    // Retreat cost
    if (card.retreatCost) questionTypes.push('retreat');

    // Weakness
    if (card.weaknesses && card.weaknesses.length > 0) questionTypes.push('weakness');

    // Resistance
    if (card.resistances && card.resistances.length > 0) questionTypes.push('resistance');

    // Pick a random question type
    const selectedType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    setQuestionType(selectedType);

    // Generate options based on question type
    let correctAnswer;
    let wrongAnswers = [];

    switch (selectedType) {
      case 'hp':
        correctAnswer = card.hp;
        // Generate similar HP values
        const hpValue = parseInt(card.hp);
        wrongAnswers = [
          String(hpValue - 30),
          String(hpValue + 20),
          String(hpValue - 10)
        ].filter(hp => parseInt(hp) > 0);
        break;

      case 'retreat':
        correctAnswer = card.retreatCost.length;
        // Generate different retreat costs
        wrongAnswers = [0, 1, 2, 3, 4].filter(cost => cost !== correctAnswer);
        wrongAnswers = wrongAnswers.slice(0, 3);
        break;

      case 'weakness':
        correctAnswer = card.weaknesses[0].type;
        // Get other common types
        const commonTypes = ['Fire', 'Water', 'Lightning', 'Psychic', 'Fighting', 'Darkness', 'Metal', 'Grass', 'Colorless'];
        wrongAnswers = commonTypes.filter(type => type !== correctAnswer).slice(0, 3);
        break;

      case 'resistance':
        correctAnswer = card.resistances[0].type;
        // Get other common types
        const types = ['Fire', 'Water', 'Lightning', 'Psychic', 'Fighting', 'Darkness', 'Metal', 'Grass', 'Colorless'];
        wrongAnswers = types.filter(type => type !== correctAnswer).slice(0, 3);
        break;
    }

    // Shuffle options
    const allOptions = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
    setOptions(allOptions);
  };

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    if (showResult) return; // Already answered

    setSelectedAnswer(answer);
    setShowResult(true);
    setTotalQuestions(prev => prev + 1);

    // Check if correct
    let correct = false;
    switch (questionType) {
      case 'hp':
        correct = answer === currentCard.hp;
        break;
      case 'retreat':
        correct = answer === currentCard.retreatCost.length;
        break;
      case 'weakness':
        correct = answer === currentCard.weaknesses[0].type;
        break;
      case 'resistance':
        correct = answer === currentCard.resistances[0].type;
        break;
    }

    if (correct) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  // Get correct answer
  const getCorrectAnswer = () => {
    if (!currentCard) return null;

    switch (questionType) {
      case 'hp':
        return currentCard.hp;
      case 'retreat':
        return currentCard.retreatCost.length;
      case 'weakness':
        return currentCard.weaknesses[0].type;
      case 'resistance':
        return currentCard.resistances[0].type;
      default:
        return null;
    }
  };

  // Check if answer is correct
  const isCorrect = () => {
    return selectedAnswer === getCorrectAnswer();
  };

  // Get question text
  const getQuestionText = () => {
    if (!currentCard) return '';

    switch (questionType) {
      case 'hp':
        return `What is ${currentCard.name}'s HP?`;
      case 'retreat':
        return `What is ${currentCard.name}'s retreat cost?`;
      case 'weakness':
        return `What is ${currentCard.name}'s weakness?`;
      case 'resistance':
        return `What is ${currentCard.name}'s resistance?`;
      default:
        return '';
    }
  };

  // Load first card on mount and fetch from API in background
  useEffect(() => {
    fetchRandomCard(); // Load first card immediately from fallback
    fetchFromAPI(); // Try to get more cards from API in background
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-900">
      {/* Header */}
      <nav className="flex justify-between items-center px-8 py-6 bg-slate-900/50 border-b border-slate-700">
        <h1 className="text-2xl font-black text-white">
          TCG<span className="text-purple-400">MAKER</span> - Guess the Card
        </h1>
        <div className="flex items-center gap-6">
          <div className="text-white font-bold">
            Score: {score}/{totalQuestions}
          </div>
          {streak > 0 && (
            <div className="text-yellow-400 font-bold flex items-center gap-2">
              🔥 {streak} Streak
            </div>
          )}
          <button onClick={onBack} className="px-6 py-2 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors">
            ← Back
          </button>
        </div>
      </nav>

      {/* Game Area */}
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Fallback Mode Notice */}
        {usingFallback && (
          <div className="bg-blue-900/50 border border-blue-500 rounded-lg p-4 mb-6">
            <div className="text-blue-300 font-bold mb-1">📦 Local Card Set</div>
            <div className="text-blue-200 text-sm">
              Playing with 5 curated cards. Attempting to load more from Pokémon TCG API in the background...
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-white text-center text-2xl">Loading card...</div>
        ) : currentCard ? (
          <div className="space-y-8">
            {/* Card Display */}
            <div className="bg-slate-800/80 rounded-xl p-8 border border-slate-700">
              <div className="flex gap-8 items-start">
                {/* Card Image - Blurred if not answered yet */}
                <div className="flex-shrink-0">
                  <img
                    src={currentCard.images.small}
                    alt={showResult ? currentCard.name : '???'}
                    className={`w-64 h-auto rounded-lg shadow-2xl transition-all duration-500 ${
                      !showResult ? 'blur-lg' : ''
                    }`}
                  />
                  {!showResult && (
                    <div className="text-center mt-4 text-slate-400 text-sm">
                      Answer to reveal!
                    </div>
                  )}
                </div>

                {/* Question and Options */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {showResult ? currentCard.name : '???'}
                  </h2>
                  {showResult && (
                    <div className="text-slate-400 mb-6">
                      {currentCard.set.name} • {currentCard.set.releaseDate}
                    </div>
                  )}

                  <div className="bg-slate-700/50 rounded-lg p-6 mb-6">
                    <h3 className="text-2xl font-bold text-purple-300 mb-6">
                      {getQuestionText()}
                    </h3>

                    {/* Options */}
                    <div className="grid grid-cols-2 gap-4">
                      {options.map((option, idx) => {
                        const correctAnswer = getCorrectAnswer();
                        const isThisCorrect = option === correctAnswer;
                        const isSelected = option === selectedAnswer;

                        let buttonClass = 'bg-slate-600 hover:bg-slate-500 border-slate-500';

                        if (showResult) {
                          if (isThisCorrect) {
                            buttonClass = 'bg-green-600 border-green-500';
                          } else if (isSelected && !isThisCorrect) {
                            buttonClass = 'bg-red-600 border-red-500';
                          } else {
                            buttonClass = 'bg-slate-700 border-slate-600 opacity-50';
                          }
                        } else if (isSelected) {
                          buttonClass = 'bg-purple-600 border-purple-500';
                        }

                        return (
                          <button
                            key={idx}
                            onClick={() => handleAnswerSelect(option)}
                            disabled={showResult}
                            className={`px-6 py-4 text-white font-bold text-xl rounded-lg border-2 transition-all ${buttonClass} ${
                              !showResult ? 'cursor-pointer' : 'cursor-default'
                            }`}
                          >
                            {questionType === 'retreat' ? `${option} Energy` : option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Result Message */}
                  {showResult && (
                    <div className={`text-center p-6 rounded-lg mb-6 ${
                      isCorrect() ? 'bg-green-900/50 border border-green-500' : 'bg-red-900/50 border border-red-500'
                    }`}>
                      <div className="text-3xl font-black text-white mb-2">
                        {isCorrect() ? '✓ Correct!' : '✗ Incorrect'}
                      </div>
                      {!isCorrect() && (
                        <div className="text-white">
                          The correct answer was: <span className="font-bold">{getCorrectAnswer()}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Next Card Button */}
                  {showResult && (
                    <button
                      onClick={fetchRandomCard}
                      className="w-full px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xl rounded-lg transition-colors flex items-center justify-center gap-3"
                    >
                      Next Card <ArrowRight size={24} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700">
              <h3 className="text-white font-bold mb-4">Your Stats</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-black text-green-400">{score}</div>
                  <div className="text-slate-400 text-sm">Correct</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-black text-red-400">{totalQuestions - score}</div>
                  <div className="text-slate-400 text-sm">Incorrect</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-black text-purple-400">
                    {totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0}%
                  </div>
                  <div className="text-slate-400 text-sm">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-white text-center text-2xl">No card loaded</div>
        )}
      </div>
    </div>
  );
}
