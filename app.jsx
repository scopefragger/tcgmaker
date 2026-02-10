import React, { useState } from 'react';
import { Play, Trophy, Shield, ArrowRight, Star, Clock, Users } from 'lucide-react';
import { challenges } from './data/challenges.js';

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
    'Master': 'bg-orange-100 text-orange-800',
  };

  return (
    <div onClick={onSelect} className="group cursor-pointer bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${difficultyColor[challenge.difficulty] || 'bg-slate-100 text-slate-800'}`}>
          {challenge.difficulty}
        </span>
        <div className="flex items-center gap-1">
          <Trophy className="text-yellow-400" size={16} />
          <span className="text-sm font-semibold text-slate-900">{challenge.reward}</span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
        {challenge.title}
      </h3>

      <p className="text-sm text-slate-600 mb-6">
        {challenge.description}
      </p>

      <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Play Challenge
      </button>
    </div>
  );
}

function PuzzlePage({ challenge, onBack }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [showAttackModal, setShowAttackModal] = useState(false);
  const [attackingPokemon, setAttackingPokemon] = useState(null);
  const [isAttacking, setIsAttacking] = useState(false);
  const [isDamaged, setIsDamaged] = useState(false);
  const [currentGameState, setCurrentGameState] = useState(null);
  const [knockedOut, setKnockedOut] = useState(null);
  const [showBenchSelect, setShowBenchSelect] = useState(false);
  const [gameWinner, setGameWinner] = useState(null);
  const [energyAttachedThisTurn, setEnergyAttachedThisTurn] = useState(false);
  const [draggedCard, setDraggedCard] = useState(null);
  const [hasRetreatedThisTurn, setHasRetreatedThisTurn] = useState(false);
  const [showRetreatModal, setShowRetreatModal] = useState(false);

  // Load game state from challenge config
  const initialGameState = {
    opponent: {
      activePokemon: { ...challenge.opponent.activePokemon, energy: [] },
      bench: challenge.opponent.bench,
      deckCount: challenge.opponent.deckCount,
      hand: 7,
      prizes: 3,
    },
    player: {
      activePokemon: { ...challenge.player.activePokemon, energy: [] },
      bench: challenge.player.bench,
      deck: challenge.player.deckCount,
      discard: 8,
      hand: challenge.player.hand,
      prizes: 3,
    },
  };

  // Initialize game state on mount
  if (!currentGameState) {
    setCurrentGameState(initialGameState);
  }

  const gameState = currentGameState || initialGameState;

  // Handle clicking active Pokemon to show attacks
  const handleActivePokemonClick = (pokemon, isPlayer) => {
    if (pokemon.attacks || pokemon.ability) {
      setAttackingPokemon({ pokemon, isPlayer });
      setShowAttackModal(true);
    }
  };

  // Check if attack can be used (has enough energy)
  const canUseAttack = (attack, pokemon) => {
    const attachedEnergy = pokemon.energy || [];
    const energyCounts = {};

    // Count attached energy by type
    attachedEnergy.forEach(energy => {
      energyCounts[energy.energyType] = (energyCounts[energy.energyType] || 0) + 1;
    });

    // Check if we have enough energy for each type required
    const requiredCounts = {};
    attack.cost.forEach(energyType => {
      requiredCounts[energyType] = (requiredCounts[energyType] || 0) + 1;
    });

    // Validate requirements
    for (const [type, count] of Object.entries(requiredCounts)) {
      if (type === 'Colorless') continue; // Colorless can be satisfied by any energy
      if ((energyCounts[type] || 0) < count) {
        return false;
      }
    }

    // Check total energy (including colorless requirement)
    const totalRequired = attack.cost.length;
    const totalAttached = attachedEnergy.length;

    return totalAttached >= totalRequired;
  };

  // Check if can retreat
  const canRetreat = () => {
    if (hasRetreatedThisTurn) return false;
    const activePokemon = gameState.player.activePokemon;
    const retreatCost = activePokemon.retreatCost || 0;
    const attachedEnergy = activePokemon.energy || [];
    const hasBench = gameState.player.bench.some(p => p !== null);
    return attachedEnergy.length >= retreatCost && hasBench;
  };

  // Handle retreat initiation
  const handleRetreat = () => {
    if (!canRetreat()) {
      if (hasRetreatedThisTurn) {
        alert('You can only retreat once per turn!');
      } else if (!gameState.player.bench.some(p => p !== null)) {
        alert('You have no Pokémon on your bench to switch to!');
      } else {
        alert('Not enough energy to retreat!');
      }
      return;
    }
    setShowRetreatModal(true);
  };

  // Handle retreat completion
  const handleRetreatComplete = (benchIndex) => {
    const newGameState = { ...currentGameState };
    const activePokemon = newGameState.player.activePokemon;
    const retreatCost = activePokemon.retreatCost || 0;
    const benchPokemon = newGameState.player.bench[benchIndex];

    // Discard energy for retreat cost
    const remainingEnergy = activePokemon.energy.slice(retreatCost);
    activePokemon.energy = remainingEnergy;

    // Swap active and bench Pokémon (preserve energy on both)
    newGameState.player.bench[benchIndex] = { ...activePokemon };
    newGameState.player.activePokemon = {
      ...benchPokemon,
      energy: benchPokemon.energy || []
    };

    setCurrentGameState(newGameState);
    setHasRetreatedThisTurn(true);
    setShowRetreatModal(false);
  };

  // Handle energy attachment
  const handleEnergyAttachment = (cardIndex) => {
    const card = gameState.player.hand[cardIndex];

    if (card.type !== 'energy') return;
    if (energyAttachedThisTurn) {
      alert('You can only attach one energy per turn!');
      return;
    }

    const newGameState = { ...currentGameState };

    // Add energy to active Pokémon
    newGameState.player.activePokemon = {
      ...newGameState.player.activePokemon,
      energy: [...(newGameState.player.activePokemon.energy || []), card]
    };

    // Remove card from hand
    newGameState.player.hand = newGameState.player.hand.filter((_, idx) => idx !== cardIndex);

    setCurrentGameState(newGameState);
    setEnergyAttachedThisTurn(true);
    setDraggedCard(null);
  };

  // Handle bench promotion
  const handleBenchPromotion = (benchIndex) => {
    const newGameState = { ...currentGameState };

    if (showBenchSelect === 'player') {
      // Promote player's bench Pokemon
      const promotedPokemon = newGameState.player.bench[benchIndex];
      newGameState.player.activePokemon = {
        ...promotedPokemon,
        hp: promotedPokemon.hp || promotedPokemon.maxHp || 120,
        maxHp: promotedPokemon.maxHp || 120
      };
      newGameState.player.bench[benchIndex] = null;
    } else if (showBenchSelect === 'opponent') {
      // Promote opponent's bench Pokemon
      const promotedPokemon = newGameState.opponent.bench[benchIndex];
      newGameState.opponent.activePokemon = {
        ...promotedPokemon,
        hp: promotedPokemon.hp || promotedPokemon.maxHp || 150,
        maxHp: promotedPokemon.maxHp || 150
      };
      newGameState.opponent.bench[benchIndex] = null;
    }

    setCurrentGameState(newGameState);
    setShowBenchSelect(false);
    setKnockedOut(null);
  };

  // Handle attack execution
  const handleAttack = (attack) => {
    setShowAttackModal(false);

    // Reset energy attachment and retreat for next turn (opponent's turn, then back to player)
    setEnergyAttachedThisTurn(false);
    setHasRetreatedThisTurn(false);

    // Store attack damage for animation display
    setAttackingPokemon(prev => ({ ...prev, lastDamage: attack.damage }));
    setIsAttacking(true);

    // Trigger attacker animation
    setTimeout(() => {
      setIsAttacking(false);
      setIsDamaged(true);

      // Apply damage
      const newGameState = { ...currentGameState };
      let targetPokemon;
      let isPlayerTarget;

      if (attackingPokemon.isPlayer) {
        // Player attacking opponent
        targetPokemon = newGameState.opponent.activePokemon;
        targetPokemon.hp = Math.max(0, targetPokemon.hp - attack.damage);
        newGameState.opponent.activePokemon = targetPokemon;
        isPlayerTarget = false;
      } else {
        // Opponent attacking player
        targetPokemon = newGameState.player.activePokemon;
        targetPokemon.hp = Math.max(0, targetPokemon.hp - attack.damage);
        newGameState.player.activePokemon = targetPokemon;
        isPlayerTarget = true;
      }

      setCurrentGameState(newGameState);

      // Remove damage animation and check for knockout
      setTimeout(() => {
        setIsDamaged(false);

        // Check if Pokemon was knocked out
        if (targetPokemon.hp === 0) {
          setKnockedOut(isPlayerTarget ? 'player' : 'opponent');

          // Death animation duration
          setTimeout(() => {
            // Take a prize card
            if (isPlayerTarget) {
              newGameState.opponent.prizes = (newGameState.opponent.prizes || 3) - 1;
            } else {
              newGameState.player.prizes = (newGameState.player.prizes || 3) - 1;
            }

            // Check for win conditions
            if (isPlayerTarget && newGameState.opponent.prizes === 0) {
              setGameWinner('opponent');
              setCurrentGameState(newGameState);
              return;
            } else if (!isPlayerTarget && newGameState.player.prizes === 0) {
              setGameWinner('player');
              setCurrentGameState(newGameState);
              return;
            }

            // Check if there's a bench to promote from
            if (isPlayerTarget) {
              // Player's Pokémon was knocked out
              const hasBench = newGameState.player.bench.some(p => p !== null);
              if (!hasBench) {
                // No bench = opponent wins
                setGameWinner('opponent');
                setCurrentGameState(newGameState);
              } else {
                // Show bench selection for player
                setShowBenchSelect('player');
                setCurrentGameState(newGameState);
              }
            } else {
              // Opponent's Pokémon was knocked out
              const hasBench = newGameState.opponent.bench.some(p => p !== null);
              if (!hasBench) {
                // No bench = player wins
                setGameWinner('player');
                setCurrentGameState(newGameState);
              } else {
                // Auto-promote first available bench Pokémon for opponent
                const firstBenchIndex = newGameState.opponent.bench.findIndex(p => p !== null);
                const promotedPokemon = newGameState.opponent.bench[firstBenchIndex];
                newGameState.opponent.activePokemon = {
                  ...promotedPokemon,
                  hp: promotedPokemon.hp || promotedPokemon.maxHp || 150,
                  maxHp: promotedPokemon.maxHp || 150
                };
                newGameState.opponent.bench[firstBenchIndex] = null;
                setCurrentGameState(newGameState);
                setKnockedOut(null);
              }
            }
          }, 1000);
        }
      }, 600);
    }, 500);
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
                    <div key={idx}>
                      <div className="bg-slate-700/50 border-2 border-slate-600 rounded-lg overflow-hidden hover:border-blue-400 transition-colors cursor-pointer" onClick={() => pokemon && setExpandedCard(pokemon)}>
                        {pokemon ? (
                          <img 
                            src={pokemon.image} 
                            alt={pokemon.name}
                            className="w-full h-20 object-cover hover:opacity-80 transition-opacity cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedCard(pokemon);
                            }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = `<div class="w-full h-20 flex flex-col items-center justify-center text-center"><div class="text-white font-bold text-xs px-1">${pokemon.name}</div></div>`;
                            }}
                          />
                        ) : (
                          <div className="w-full h-20 flex items-center justify-center text-slate-500 text-[10px]">Empty</div>
                        )}
                      </div>
                      {pokemon && <div className="text-white text-[10px] text-center mt-1 truncate cursor-pointer hover:text-blue-300" onClick={() => setExpandedCard(pokemon)}>{pokemon.name}</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Opponent Active Pokémon */}
              <div className="mb-6">
                <div
                  className={`relative bg-red-900/50 border-2 border-red-700 rounded-lg p-2 text-center w-40 h-48 flex flex-col items-center justify-center hover:border-red-500 transition-all mx-auto overflow-hidden cursor-pointer ${
                    isDamaged && !attackingPokemon?.isPlayer ? 'animate-shake bg-red-600/70' : ''
                  } ${isAttacking && attackingPokemon?.isPlayer ? 'ring-4 ring-yellow-400' : ''} ${
                    knockedOut === 'opponent' ? 'animate-knockout' : ''
                  }`}
                  onClick={() => handleActivePokemonClick(gameState.opponent.activePokemon, false)}
                >
                  <img
                    src={gameState.opponent.activePokemon.image}
                    alt={gameState.opponent.activePokemon.name}
                    className="w-full h-full object-cover rounded hover:opacity-80 transition-opacity cursor-pointer"
                    onClick={(e) => {
                      // Click image to open attack modal, not expand
                      handleActivePokemonClick(gameState.opponent.activePokemon, false);
                    }}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                  {/* HP Display Overlay */}
                  <div className="absolute top-1 right-1 bg-red-700/90 px-2 py-1 rounded-md border border-red-500">
                    <div className="text-white font-bold text-xs">{gameState.opponent.activePokemon.hp} HP</div>
                  </div>
                  {/* Damage indicator */}
                  {isDamaged && !attackingPokemon?.isPlayer && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="text-6xl font-black text-red-500 animate-bounce">-{attackingPokemon?.lastDamage || 0}</div>
                    </div>
                  )}
                </div>
                <div className="text-white text-center text-xs mt-2">
                  <div className="truncate font-bold text-[10px]">{gameState.opponent.activePokemon.name}</div>
                  <div className="font-bold">{gameState.opponent.activePokemon.hp}/{gameState.opponent.activePokemon.maxHp} HP</div>
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
              <span className="text-slate-400">Prizes:</span> {gameState.opponent.prizes} remaining
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
                <div
                  className={`relative bg-blue-900/50 border-2 border-blue-600 rounded-lg p-2 text-center w-40 h-48 flex flex-col items-center justify-center hover:border-blue-400 transition-all cursor-pointer mx-auto overflow-hidden ${
                    isDamaged && attackingPokemon?.isPlayer ? 'animate-shake bg-red-600/70' : ''
                  } ${isAttacking && !attackingPokemon?.isPlayer ? 'ring-4 ring-yellow-400' : ''} ${
                    knockedOut === 'player' ? 'animate-knockout' : ''
                  } ${draggedCard?.type === 'energy' ? 'ring-4 ring-green-400' : ''}`}
                  onClick={() => handleActivePokemonClick(gameState.player.activePokemon, true)}
                  onDragOver={(e) => {
                    if (draggedCard?.type === 'energy') {
                      e.preventDefault();
                    }
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (draggedCard?.type === 'energy') {
                      handleEnergyAttachment(draggedCard.index);
                    }
                  }}
                >
                  <img
                    src={gameState.player.activePokemon.image}
                    alt={gameState.player.activePokemon.name}
                    className="w-full h-full object-cover rounded hover:opacity-80 transition-opacity cursor-pointer"
                    onClick={(e) => {
                      // Click image to open attack modal, not expand
                      handleActivePokemonClick(gameState.player.activePokemon, true);
                    }}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                  {/* HP Display Overlay */}
                  <div className="absolute top-1 right-1 bg-blue-700/90 px-2 py-1 rounded-md border border-blue-500">
                    <div className="text-white font-bold text-xs">{gameState.player.activePokemon.hp} HP</div>
                  </div>
                  {/* Damage indicator */}
                  {isDamaged && attackingPokemon?.isPlayer && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="text-6xl font-black text-red-500 animate-bounce">-{attackingPokemon?.lastDamage || 0}</div>
                    </div>
                  )}
                </div>
                <div className="text-white text-center text-xs mt-2">
                  <div className="truncate font-bold text-[10px]">{gameState.player.activePokemon.name}</div>
                  <div className="font-bold">{gameState.player.activePokemon.hp}/{gameState.player.activePokemon.maxHp} HP</div>
                </div>
                {/* Attached Energy */}
                {gameState.player.activePokemon.energy && gameState.player.activePokemon.energy.length > 0 && (
                  <div className="mt-2">
                    <div className="text-white text-[10px] font-semibold mb-1">Energy:</div>
                    <div className="flex gap-1 justify-center flex-wrap">
                      {gameState.player.activePokemon.energy.map((energy, idx) => (
                        <div key={idx} className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-yellow-300 flex items-center justify-center text-[10px] font-bold text-slate-900">
                          {energy.energyType[0]}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Retreat Button */}
                <div className="mt-2 flex justify-center">
                  <button
                    onClick={handleRetreat}
                    disabled={!canRetreat()}
                    className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${
                      canRetreat()
                        ? 'bg-purple-600 hover:bg-purple-500 text-white cursor-pointer'
                        : 'bg-slate-600 text-slate-400 cursor-not-allowed opacity-50'
                    }`}
                  >
                    Retreat (Cost: {gameState.player.activePokemon.retreatCost || 0})
                  </button>
                </div>
              </div>

              {/* Bench */}
              <div>
                <div className="text-white text-xs mb-2 font-semibold">Bench</div>
                <div className="grid grid-cols-5 gap-2">
                  {gameState.player.bench.map((pokemon, idx) => (
                    <div key={idx}>
                      <div className="bg-slate-700/50 border-2 border-slate-600 rounded-lg overflow-hidden hover:border-blue-400 transition-colors cursor-pointer" onClick={() => pokemon && setExpandedCard(pokemon)}>
                        {pokemon ? (
                          <img 
                            src={pokemon.image} 
                            alt={pokemon.name}
                            className="w-full h-20 object-cover hover:opacity-80 transition-opacity cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedCard(pokemon);
                            }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = `<div class="w-full h-20 flex flex-col items-center justify-center text-center"><div class="text-white font-bold text-xs px-1">${pokemon.name}</div></div>`;
                            }}
                          />
                        ) : (
                          <div className="w-full h-20 flex items-center justify-center text-slate-500 text-[10px]">Empty</div>
                        )}
                      </div>
                      {pokemon && <div className="text-white text-[10px] text-center mt-1 truncate cursor-pointer hover:text-blue-300" onClick={() => setExpandedCard(pokemon)}>{pokemon.name}</div>}
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
            <div className="flex gap-3 overflow-x-auto pb-2">
              {gameState.player.hand.map((card, idx) => (
                <div key={idx} className="flex-shrink-0">
                  <div
                    onClick={() => setSelectedCard(idx)}
                    draggable={card.type === 'energy'}
                    onDragStart={(e) => {
                      if (card.type === 'energy') {
                        setDraggedCard({ ...card, index: idx });
                      }
                    }}
                    onDragEnd={() => setDraggedCard(null)}
                    className={`w-20 h-24 rounded-lg border-2 overflow-hidden cursor-pointer transition-all ${
                      selectedCard === idx
                        ? 'border-yellow-400 bg-yellow-900/50 scale-105'
                        : 'border-slate-600 bg-slate-700/50 hover:border-blue-400'
                    } ${card.type === 'energy' ? 'cursor-grab active:cursor-grabbing' : ''}`}
                  >
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity pointer-events-none"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center p-1 text-center"><div class="text-white font-bold text-xs">${card.name}</div></div>`;
                      }}
                    />
                  </div>
                  <div className="text-white text-[10px] text-center mt-1 w-20 truncate">{card.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card Expanded Modal */}
          {expandedCard && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-in fade-in duration-200"
              onClick={() => setExpandedCard(null)}
            >
              <div
                className="relative animate-in scale-in duration-300 origin-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setExpandedCard(null)}
                  className="absolute -top-10 -right-10 w-8 h-8 bg-white hover:bg-slate-200 transition-colors rounded-full flex items-center justify-center font-bold text-slate-900 z-10"
                >
                  ✕
                </button>
                <img
                  src={expandedCard.image}
                  alt={expandedCard.name}
                  className="max-w-md max-h-96 rounded-lg shadow-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          )}

          {/* Attack/Ability Modal */}
          {showAttackModal && attackingPokemon && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-in fade-in duration-200"
              onClick={() => setShowAttackModal(false)}
            >
              <div
                className="relative bg-slate-800 rounded-xl p-6 max-w-lg w-full mx-4 border-2 border-blue-500 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowAttackModal(false)}
                  className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 hover:bg-red-600 transition-colors rounded-full flex items-center justify-center font-bold text-white z-10"
                >
                  ✕
                </button>

                <h2 className="text-2xl font-bold text-white mb-2">{attackingPokemon.pokemon.name}</h2>
                <div className="text-blue-300 mb-4 text-sm">
                  HP: {attackingPokemon.pokemon.hp}/{attackingPokemon.pokemon.maxHp}
                </div>

                {/* Ability */}
                {attackingPokemon.pokemon.ability && (
                  <div className="mb-4 bg-purple-900/50 border border-purple-600 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-purple-300 mb-2">
                      Ability: {attackingPokemon.pokemon.ability.name}
                    </h3>
                    <p className="text-slate-300 text-sm">{attackingPokemon.pokemon.ability.effect}</p>
                  </div>
                )}

                {/* Attacks */}
                {attackingPokemon.pokemon.attacks && attackingPokemon.pokemon.attacks.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white mb-2">Attacks:</h3>
                    {attackingPokemon.pokemon.attacks.map((attack, idx) => {
                      const canUse = canUseAttack(attack, attackingPokemon.pokemon);
                      return (
                        <div
                          key={idx}
                          className={`bg-slate-700/80 border rounded-lg p-4 transition-colors ${
                            canUse
                              ? 'border-slate-600 hover:border-yellow-400 cursor-pointer'
                              : 'border-red-600 opacity-50 cursor-not-allowed'
                          }`}
                          onClick={() => canUse && handleAttack(attack)}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className={`text-xl font-bold ${canUse ? 'text-yellow-400' : 'text-gray-400'}`}>
                              {attack.name}
                            </h4>
                            <div className={`text-2xl font-black ${canUse ? 'text-red-400' : 'text-gray-500'}`}>
                              {attack.damage}
                            </div>
                          </div>
                          <div className="flex gap-1 mb-2">
                            {attack.cost.map((energy, i) => (
                              <div
                                key={i}
                                className="w-6 h-6 rounded-full bg-slate-600 border border-slate-400 flex items-center justify-center text-[10px] text-white font-bold"
                              >
                                {energy[0]}
                              </div>
                            ))}
                          </div>
                          {!canUse && (
                            <div className="text-red-400 text-xs font-bold mb-2">
                              ⚠ Not enough energy attached!
                            </div>
                          )}
                          {attack.effect && (
                            <p className="text-slate-300 text-sm italic">{attack.effect}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Player Info and Action Button */}
          <div className="flex gap-4 items-center">
            <div className="bg-slate-700/50 px-4 py-2 rounded text-white text-sm">
              <span className="text-slate-400">Prizes Left:</span> <span className="font-bold">{gameState.player.prizes}</span>
            </div>
            <button className="ml-auto px-8 py-3 bg-yellow-500 text-slate-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors">
              Play Selected Card
            </button>
            <button className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors">
              End Turn
            </button>
          </div>
        </div>

        {/* Bench Selection Modal */}
        {showBenchSelect && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-in fade-in duration-200">
            <div className="bg-slate-800 rounded-xl p-8 max-w-3xl w-full mx-4 border-2 border-yellow-500 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">
                {showBenchSelect === 'player' ? 'Your' : "Opponent's"} Active Pokémon was Knocked Out!
              </h2>
              <p className="text-slate-300 text-center mb-6">
                Select a Pokémon from the bench to become the new Active Pokémon
              </p>

              <div className="grid grid-cols-5 gap-4">
                {gameState[showBenchSelect].bench.map((pokemon, idx) => (
                  pokemon ? (
                    <div
                      key={idx}
                      onClick={() => handleBenchPromotion(idx)}
                      className="cursor-pointer bg-slate-700 border-2 border-slate-600 rounded-lg p-2 hover:border-yellow-400 hover:scale-105 transition-all"
                    >
                      <img
                        src={pokemon.image}
                        alt={pokemon.name}
                        className="w-full h-24 object-cover rounded"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<div class="w-full h-24 flex items-center justify-center text-white text-xs text-center p-1">${pokemon.name}</div>`;
                        }}
                      />
                      <div className="text-white text-xs text-center mt-2 font-bold">{pokemon.name}</div>
                    </div>
                  ) : null
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Retreat Modal */}
        {showRetreatModal && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-in fade-in duration-200">
            <div className="bg-slate-800 rounded-xl p-8 max-w-3xl w-full mx-4 border-2 border-purple-500 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">
                Retreat Your Active Pokémon
              </h2>
              <p className="text-slate-300 text-center mb-2">
                Select a Pokémon from your bench to switch with {gameState.player.activePokemon.name}
              </p>
              <p className="text-purple-400 text-center mb-6 font-semibold">
                Retreat Cost: {gameState.player.activePokemon.retreatCost || 0} Energy (will be discarded)
              </p>

              <div className="grid grid-cols-5 gap-4">
                {gameState.player.bench.map((pokemon, idx) => (
                  pokemon ? (
                    <div
                      key={idx}
                      onClick={() => handleRetreatComplete(idx)}
                      className="cursor-pointer bg-slate-700 border-2 border-slate-600 rounded-lg p-2 hover:border-purple-400 hover:scale-105 transition-all"
                    >
                      <img
                        src={pokemon.image}
                        alt={pokemon.name}
                        className="w-full h-24 object-cover rounded"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<div class="w-full h-24 flex items-center justify-center text-white text-xs text-center p-1">${pokemon.name}</div>`;
                        }}
                      />
                      <div className="text-white text-xs text-center mt-2 font-bold">{pokemon.name}</div>
                      {pokemon.energy && pokemon.energy.length > 0 && (
                        <div className="flex gap-1 justify-center mt-1">
                          {pokemon.energy.map((energy, energyIdx) => (
                            <div key={energyIdx} className="w-4 h-4 rounded-full bg-yellow-500 border border-yellow-300 flex items-center justify-center text-[8px] font-bold text-slate-900">
                              {energy.energyType[0]}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : null
                ))}
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowRetreatModal(false)}
                  className="px-6 py-2 bg-slate-600 hover:bg-slate-500 text-white font-semibold rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Win Screen Modal */}
        {gameWinner && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-in fade-in duration-200">
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl p-12 max-w-2xl w-full mx-4 border-4 border-yellow-300 shadow-2xl text-center">
              <div className="text-8xl mb-6">🏆</div>
              <h2 className="text-5xl font-black text-white mb-4">
                {gameWinner === 'player' ? 'YOU WIN!' : 'YOU LOSE!'}
              </h2>
              <p className="text-2xl text-white mb-8">
                {gameWinner === 'player'
                  ? 'Congratulations! You defeated your opponent!'
                  : 'Better luck next time!'}
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={onBack}
                  className="px-8 py-4 bg-white text-slate-900 font-bold text-xl rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Back to Challenges
                </button>
                <button
                  onClick={() => {
                    setCurrentGameState(null);
                    setGameWinner(null);
                    setKnockedOut(null);
                    setShowBenchSelect(false);
                  }}
                  className="px-8 py-4 bg-slate-800 text-white font-bold text-xl rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Retry Challenge
                </button>
              </div>
            </div>
          </div>
        )}
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