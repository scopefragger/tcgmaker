import React, { useState } from 'react';
import { Play, Trophy, Shield, ArrowRight, Star, Clock, Users } from 'lucide-react';

const challenges = [
  { id: 1, title: "The Snorlax Stall", difficulty: "Beginner", rating: 4.2, plays: 1200, time: "5 min" },
  { id: 2, title: "Mew VMAX Sweep", difficulty: "Intermediate", rating: 4.8, plays: 2400, time: "8 min" },
  { id: 3, title: "Energy Denial Escape", difficulty: "Advanced", rating: 4.5, plays: 1800, time: "10 min" },
  { id: 4, title: "Legendary Showdown", difficulty: "Expert", rating: 4.9, plays: 3100, time: "12 min" },
  { id: 5, title: "Rare Candy Combo", difficulty: "Intermediate", rating: 4.3, plays: 950, time: "7 min" },
  { id: 6, title: "Bench Destruction", difficulty: "Advanced", rating: 4.6, plays: 1450, time: "9 min" },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const handlePlayNow = () => {
    setCurrentPage('challenges');
  };

  const handleSelectChallenge = (challenge) => {
    setSelectedChallenge(challenge);
    setCurrentPage('puzzle');
  };

  if (currentPage === 'challenges') {
    return <ChallengesPage onSelectChallenge={handleSelectChallenge} onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'puzzle') {
    return <PuzzlePage challenge={selectedChallenge} onBack={() => setCurrentPage('challenges')} />;
  }

  return <HomePage onPlayNow={handlePlayNow} />;
}

function HomePage({ onPlayNow }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-black text-slate-900">
          TCG<span className="text-blue-600">MAKER</span>
        </h1>
        <div className="flex gap-8 text-sm font-semibold text-slate-600">
          <span className="hover:text-slate-900 cursor-pointer transition-colors">What is TCGMaker?</span>
          <span className="hover:text-slate-900 cursor-pointer transition-colors">FAQ</span>
          <span className="hover:text-slate-900 cursor-pointer transition-colors">Rules Guide</span>
        </div>
        <button onClick={onPlayNow} className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
          Play now
        </button>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-6xl font-black text-slate-900 mb-6 leading-tight">
              Master Pokémon<br />TCG Strategy
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Solve one-turn victory puzzles. Test your knowledge of official Pokémon TCG rules, master advanced strategies, and climb the ranks.
            </p>
            <div className="flex gap-4">
              <button onClick={onPlayNow} className="px-8 py-3 bg-slate-100 text-slate-900 font-semibold rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors flex items-center gap-2">
                Start Free
              </button>
              <button className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                <ArrowRight className="text-slate-900" size={20} />
              </button>
            </div>
          </div>

          {/* Right - Hero Image Area with Feature Cards */}
          <div className="relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 rounded-3xl"></div>
            
            {/* Feature Cards */}
            <div className="relative p-8 space-y-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-900">Level 12 / 50</span>
                  <div className="w-12 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                </div>
                <p className="text-xs text-slate-500">Expert Difficulty Unlocked</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="text-yellow-500" size={20} />
                  <span className="font-semibold text-slate-900">Rank: Advanced</span>
                </div>
                <p className="text-xs text-slate-500 mb-3">42 Challenges Completed</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 italic">Keep climbing</span>
                  <a href="#" className="text-xs text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1">
                    View Leaderboard <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-12">
            <FeatureCard 
              icon={<Play className="text-blue-600" size={32} />}
              title="Learn & Practice"
              desc="Work through carefully crafted one-turn victory scenarios. Each puzzle teaches you new strategies and card interactions."
            />
            <FeatureCard 
              icon={<Trophy className="text-yellow-500" size={32} />}
              title="Compete & Progress"
              desc="Climb the global leaderboard, unlock new difficulty levels, and prove your mastery of Pokémon TCG rules."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChallengesPage({ onSelectChallenge, onBack }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-slate-200">
        <h1 className="text-2xl font-black text-slate-900">
          TCG<span className="text-blue-600">MAKER</span>
        </h1>
        <button onClick={onBack} className="px-6 py-2 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors">
          ← Back
        </button>
      </nav>

      {/* Challenges Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-black text-slate-900 mb-4">Select a Challenge</h2>
        <p className="text-slate-600 mb-12">Pick from hundreds of puzzles. Start easy, master the advanced scenarios.</p>

        {/* Challenge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <ChallengeCard 
              key={challenge.id} 
              challenge={challenge}
              onSelect={() => onSelectChallenge(challenge)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChallengeCard({ challenge, onSelect }) {
  const difficultyColor = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-blue-100 text-blue-800',
    'Advanced': 'bg-purple-100 text-purple-800',
    'Expert': 'bg-red-100 text-red-800',
  };

  return (
    <div onClick={onSelect} className="group cursor-pointer bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${difficultyColor[challenge.difficulty]}`}>
          {challenge.difficulty}
        </span>
        <div className="flex items-center gap-1">
          <Star className="text-yellow-400 fill-yellow-400" size={16} />
          <span className="text-sm font-semibold text-slate-900">{challenge.rating}</span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
        {challenge.title}
      </h3>

      <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{challenge.time}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users size={16} />
          <span>{challenge.plays.toLocaleString()} plays</span>
        </div>
      </div>

      <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Play Challenge
      </button>
    </div>
  );
}

function PuzzlePage({ challenge, onBack }) {
  const [selectedCard, setSelectedCard] = useState(null);

  // Mock game state
  const gameState = {
    opponent: {
      activePokemon: { name: "Charizard", hp: 150, maxHp: 150 },
      bench: [
        { name: "Pikachu", hp: 60 },
        { name: "Dragonite", hp: 120 },
        null,
        null,
        null,
      ],
      hand: 7,
    },
    player: {
      activePokemon: { name: "Blastoise", hp: 130, maxHp: 130 },
      bench: [
        { name: "Squirtle", hp: 40 },
        { name: "Wartortle", hp: 80 },
        { name: "Venusaur", hp: 110 },
        null,
        null,
      ],
      hand: [
        { name: "Energy", type: "Water" },
        { name: "Potion", type: "Trainer" },
        { name: "Professor Oak", type: "Trainer" },
        { name: "Energy", type: "Water" },
        { name: "Retreat Cost Card", type: "Energy" },
      ],
      deck: 12,
      discard: 8,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800">
      {/* Header */}
      <nav className="flex justify-between items-center px-8 py-6 bg-slate-900/50 border-b border-slate-700">
        <h1 className="text-2xl font-black text-white">
          TCG<span className="text-blue-400">MAKER</span>
        </h1>
        <div className="flex items-center gap-4">
          <h2 className="text-white font-bold text-lg">{challenge.title}</h2>
          <button onClick={onBack} className="px-6 py-2 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors">
            ← Back
          </button>
        </div>
      </nav>

      {/* Game Board */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Opponent's Side */}
        <div className="bg-slate-800/80 rounded-xl p-6 mb-8 border border-slate-700">
          <div className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Opponent's Field</div>
          
          {/* Opponent Bench, Active, and Resources */}
          <div className="flex gap-6 mb-6">
            {/* Left Side: Deck and Discard */}
            <div className="flex flex-col gap-4 flex-shrink-0">
              <div className="bg-slate-700/50 border-2 border-slate-600 rounded-lg p-4 w-24 h-32 flex flex-col items-center justify-center hover:border-blue-400 transition-colors cursor-pointer">
                <div className="text-white font-bold text-sm">Deck</div>
                <div className="text-slate-300 text-lg font-bold mt-2">18</div>
              </div>
              <div className="bg-slate-700/50 border-2 border-slate-600 rounded-lg p-4 w-24 h-32 flex flex-col items-center justify-center hover:border-blue-400 transition-colors cursor-pointer">
                <div className="text-white font-bold text-sm">Discard</div>
                <div className="text-slate-300 text-lg font-bold mt-2">5</div>
              </div>
            </div>

            {/* Middle: Bench and Active */}
            <div className="flex-1">
              {/* Opponent Bench */}
              <div className="mb-6">
                <div className="text-white text-xs mb-2 font-semibold">Bench</div>
                <div className="grid grid-cols-5 gap-2">
                  {gameState.opponent.bench.map((pokemon, idx) => (
                    <div key={idx} className="bg-slate-700/50 border-2 border-slate-600 rounded-lg p-2 text-center aspect-square flex flex-col items-center justify-center hover:border-blue-400 transition-colors">
                      {pokemon ? (
                        <>
                          <div className="text-white font-bold text-xs">{pokemon.name}</div>
                          <div className="text-slate-400 text-[10px] mt-1">{pokemon.hp} HP</div>
                        </>
                      ) : (
                        <div className="text-slate-500 text-[10px]">Empty</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Opponent Active Pokémon */}
              <div className="mb-6">
                <div className="bg-red-900/50 border-2 border-red-700 rounded-lg p-4 text-center w-40 h-40 flex flex-col items-center justify-center hover:border-red-500 transition-colors mx-auto">
                  <div className="text-white font-bold text-sm">{gameState.opponent.activePokemon.name}</div>
                  <div className="text-red-300 text-xs mt-2">{gameState.opponent.activePokemon.hp}/{gameState.opponent.activePokemon.maxHp} HP</div>
                </div>
              </div>
            </div>
          </div>

          {/* Opponent Info */}
          <div className="flex gap-4 text-white text-sm">
            <div className="bg-slate-700/50 px-4 py-2 rounded">
              <span className="text-slate-400">Hand:</span> {gameState.opponent.hand} cards
            </div>
            <div className="bg-slate-700/50 px-4 py-2 rounded">
              <span className="text-slate-400">Prizes:</span> 2 remaining
            </div>
          </div>
        </div>

        {/* Player's Side */}
        <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700">
          <div className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Your Field</div>
          
          {/* Player Active Pokémon and Bench */}
          <div className="flex gap-6 mb-6">
            {/* Left Side: Active Pokemon + Bench */}
            <div className="flex-1">
              {/* Active Pokémon */}
              <div className="mb-4">
                <div className="bg-blue-900/50 border-2 border-blue-600 rounded-lg p-4 text-center w-40 h-40 flex flex-col items-center justify-center hover:border-blue-400 transition-colors cursor-pointer mx-auto">
                  <div className="text-white font-bold text-sm">{gameState.player.activePokemon.name}</div>
                  <div className="text-blue-300 text-xs mt-2">{gameState.player.activePokemon.hp}/{gameState.player.activePokemon.maxHp} HP</div>
                </div>
              </div>

              {/* Bench */}
              <div>
                <div className="text-white text-xs mb-2 font-semibold">Bench</div>
                <div className="grid grid-cols-5 gap-2">
                  {gameState.player.bench.map((pokemon, idx) => (
                    <div key={idx} className="bg-slate-700/50 border-2 border-slate-600 rounded-lg p-2 text-center aspect-square flex flex-col items-center justify-center hover:border-blue-400 transition-colors cursor-pointer">
                      {pokemon ? (
                        <>
                          <div className="text-white font-bold text-xs">{pokemon.name}</div>
                          <div className="text-slate-400 text-[10px] mt-1">{pokemon.hp} HP</div>
                        </>
                      ) : (
                        <div className="text-slate-500 text-[10px]">Empty</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Deck and Discard */}
            <div className="flex flex-col gap-4 flex-shrink-0">
              <div className="bg-slate-700/50 border-2 border-slate-600 rounded-lg p-4 w-24 h-32 flex flex-col items-center justify-center hover:border-blue-400 transition-colors cursor-pointer">
                <div className="text-white font-bold text-sm">Deck</div>
                <div className="text-slate-300 text-lg font-bold mt-2">{gameState.player.deck}</div>
              </div>
              <div className="bg-slate-700/50 border-2 border-slate-600 rounded-lg p-4 w-24 h-32 flex flex-col items-center justify-center hover:border-blue-400 transition-colors cursor-pointer">
                <div className="text-white font-bold text-sm">Discard</div>
                <div className="text-slate-300 text-lg font-bold mt-2">{gameState.player.discard}</div>
              </div>
            </div>
          </div>

          {/* Player Hand */}
          <div className="mb-4">
            <div className="text-white font-bold mb-3 text-sm uppercase tracking-wide">Your Hand</div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {gameState.player.hand.map((card, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedCard(idx)}
                  className={`flex-shrink-0 w-20 h-28 rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all ${
                    selectedCard === idx 
                      ? 'border-yellow-400 bg-yellow-900/50 scale-105' 
                      : 'border-slate-600 bg-slate-700/50 hover:border-blue-400'
                  }`}
                >
                  <div className="text-white font-bold text-xs text-center px-1">{card.name}</div>
                  <div className="text-slate-400 text-[10px] mt-1">{card.type}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Player Info and Action Button */}
          <div className="flex gap-4 items-center">
            <div className="bg-slate-700/50 px-4 py-2 rounded text-white text-sm">
              <span className="text-slate-400">Prizes Left:</span> <span className="font-bold">3</span>
            </div>
            <button className="ml-auto px-8 py-3 bg-yellow-500 text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
              Play Selected Card
            </button>
            <button className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors">
              End Turn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}