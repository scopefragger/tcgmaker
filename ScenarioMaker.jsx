import React, { useState } from 'react';
import { Download, Plus, Trash2, Copy, Search } from 'lucide-react';

export default function ScenarioMaker({ onBack }) {
  const [showCardSearch, setShowCardSearch] = useState(false);
  const [cardSearchQuery, setCardSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchTarget, setSearchTarget] = useState(null); // { side, isBench, benchIndex, isHand, handIndex }

  const [scenario, setScenario] = useState({
    id: 1,
    title: "New Scenario",
    difficulty: "Intermediate",
    reward: "200 XP",
    description: "Description of the scenario",
    opponent: {
      activePokemon: {
        name: "",
        hp: 100,
        maxHp: 100,
        image: "",
        retreatCost: 0,
        attacks: [],
        ability: null
      },
      bench: [null, null, null, null, null],
      deckCount: 12,
      hand: []
    },
    player: {
      activePokemon: {
        name: "",
        hp: 100,
        maxHp: 100,
        image: "",
        retreatCost: 0,
        attacks: []
      },
      bench: [null, null, null, null, null],
      deckCount: 8,
      hand: []
    }
  });

  const [exportedJSON, setExportedJSON] = useState('');
  const [showJSON, setShowJSON] = useState(false);

  // Update scenario field
  const updateField = (path, value) => {
    const newScenario = { ...scenario };
    const keys = path.split('.');
    let current = newScenario;

    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }

    current[keys[keys.length - 1]] = value;
    setScenario(newScenario);
  };

  // Add attack to a pokemon
  const addAttack = (side, isBench, benchIndex) => {
    const newScenario = { ...scenario };
    const target = isBench
      ? newScenario[side].bench[benchIndex]
      : newScenario[side].activePokemon;

    if (!target.attacks) target.attacks = [];
    target.attacks.push({
      name: "New Attack",
      damage: 0,
      cost: ["Colorless"],
      effect: ""
    });

    setScenario(newScenario);
  };

  // Remove attack
  const removeAttack = (side, attackIndex, isBench, benchIndex) => {
    const newScenario = { ...scenario };
    const target = isBench
      ? newScenario[side].bench[benchIndex]
      : newScenario[side].activePokemon;

    target.attacks.splice(attackIndex, 1);
    setScenario(newScenario);
  };

  // Update attack
  const updateAttack = (side, attackIndex, field, value, isBench, benchIndex) => {
    const newScenario = { ...scenario };
    const target = isBench
      ? newScenario[side].bench[benchIndex]
      : newScenario[side].activePokemon;

    target.attacks[attackIndex][field] = value;
    setScenario(newScenario);
  };

  // Add card to hand
  const addCardToHand = (side) => {
    const newScenario = { ...scenario };
    newScenario[side].hand.push({
      name: "New Card",
      image: "",
      type: "trainer"
    });
    setScenario(newScenario);
  };

  // Remove card from hand
  const removeCardFromHand = (side, index) => {
    const newScenario = { ...scenario };
    newScenario[side].hand.splice(index, 1);
    setScenario(newScenario);
  };

  // Update card in hand
  const updateCard = (side, index, field, value) => {
    const newScenario = { ...scenario };
    newScenario[side].hand[index][field] = value;

    // If type is energy, add energyType field
    if (field === 'type' && value === 'energy') {
      newScenario[side].hand[index].energyType = 'Colorless';
    }

    setScenario(newScenario);
  };

  // Add bench pokemon
  const addBenchPokemon = (side, index) => {
    const newScenario = { ...scenario };
    newScenario[side].bench[index] = {
      name: "Bench Pokemon",
      image: "",
      hp: 100,
      maxHp: 100,
      retreatCost: 1,
      attacks: []
    };
    setScenario(newScenario);
  };

  // Remove bench pokemon
  const removeBenchPokemon = (side, index) => {
    const newScenario = { ...scenario };
    newScenario[side].bench[index] = null;
    setScenario(newScenario);
  };

  // Export as JSON
  const exportJSON = () => {
    const json = JSON.stringify(scenario, null, 2);
    setExportedJSON(json);
    setShowJSON(true);
  };

  // Copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportedJSON);
    alert('JSON copied to clipboard!');
  };

  // Save to browser localStorage
  const saveToLocalStorage = () => {
    const saved = localStorage.getItem('customScenarios');
    let scenarios = [];

    if (saved) {
      try {
        scenarios = JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved scenarios:', e);
      }
    }

    // Check if scenario with this ID already exists
    const existingIndex = scenarios.findIndex(s => s.id === scenario.id);
    if (existingIndex >= 0) {
      // Update existing scenario
      scenarios[existingIndex] = scenario;
      alert('Scenario updated!');
    } else {
      // Add new scenario
      scenarios.push(scenario);
      alert('Scenario saved to browser!');
    }

    localStorage.setItem('customScenarios', JSON.stringify(scenarios));
  };

  // Open card search modal
  const openCardSearch = (side, isBench = false, benchIndex = null, isHand = false, handIndex = null) => {
    setSearchTarget({ side, isBench, benchIndex, isHand, handIndex });
    setShowCardSearch(true);
    setCardSearchQuery('');
    setSearchResults([]);
  };

  // Search for Pokemon cards using Pokemon TCG API
  const searchCards = async () => {
    if (!cardSearchQuery.trim()) return;

    setSearching(true);
    try {
      const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${cardSearchQuery}&pageSize=1`);
      const data = await response.json();
      setSearchResults(data.data || []);
    } catch (error) {
      console.error('Error searching cards:', error);
      alert('Failed to search cards. Please try again.');
    }
    setSearching(false);
  };

  // Select a card from search results
  const selectCard = (card) => {
    const { side, isBench, benchIndex, isHand, handIndex } = searchTarget;

    if (isHand) {
      // Update hand card
      const newScenario = { ...scenario };
      newScenario[side].hand[handIndex].name = card.name;
      newScenario[side].hand[handIndex].image = card.images.small;
      setScenario(newScenario);
    } else {
      // Update pokemon
      const basePath = isBench ? `${side}.bench.${benchIndex}` : `${side}.activePokemon`;
      const newScenario = { ...scenario };
      const keys = basePath.split('.');
      let target = newScenario;

      for (let i = 0; i < keys.length - 1; i++) {
        target = target[keys[i]];
      }

      const pokemon = target[keys[keys.length - 1]];
      if (pokemon) {
        pokemon.name = card.name;
        pokemon.image = card.images.small;

        // Auto-fill HP if available
        if (card.hp) {
          pokemon.hp = parseInt(card.hp);
          pokemon.maxHp = parseInt(card.hp);
        }

        // Auto-fill retreat cost if available
        if (card.retreatCost && card.retreatCost.length > 0) {
          pokemon.retreatCost = card.retreatCost.length;
        }

        setScenario(newScenario);
      }
    }

    setShowCardSearch(false);
  };

  const renderPokemonEditor = (pokemon, side, label, isBench = false, benchIndex = null) => {
    if (isBench && !pokemon) {
      return (
        <div className="bg-slate-700/50 border-2 border-slate-600 rounded-lg p-4">
          <button
            onClick={() => addBenchPokemon(side, benchIndex)}
            className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded"
          >
            <Plus className="inline w-4 h-4 mr-1" /> Add Bench Pokémon
          </button>
        </div>
      );
    }

    const basePath = isBench ? `${side}.bench.${benchIndex}` : `${side}.activePokemon`;

    return (
      <div className="bg-slate-700/50 border-2 border-slate-600 rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-white font-bold">{label}</h4>
          {isBench && (
            <button
              onClick={() => removeBenchPokemon(side, benchIndex)}
              className="text-red-400 hover:text-red-300"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Pokemon Name"
              value={pokemon.name}
              onChange={(e) => updateField(`${basePath}.name`, e.target.value)}
              className="flex-1 px-3 py-2 bg-slate-800 text-white rounded border border-slate-600"
            />
            <button
              onClick={() => openCardSearch(side, isBench, benchIndex)}
              className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded"
              title="Search for card"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          <input
            type="text"
            placeholder="Image URL"
            value={pokemon.image}
            onChange={(e) => updateField(`${basePath}.image`, e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 text-white rounded border border-slate-600"
          />

          <div className="grid grid-cols-3 gap-2">
            <input
              type="number"
              placeholder="HP"
              value={pokemon.hp}
              onChange={(e) => updateField(`${basePath}.hp`, parseInt(e.target.value))}
              className="px-3 py-2 bg-slate-800 text-white rounded border border-slate-600"
            />
            <input
              type="number"
              placeholder="Max HP"
              value={pokemon.maxHp}
              onChange={(e) => updateField(`${basePath}.maxHp`, parseInt(e.target.value))}
              className="px-3 py-2 bg-slate-800 text-white rounded border border-slate-600"
            />
            <input
              type="number"
              placeholder="Retreat"
              value={pokemon.retreatCost}
              onChange={(e) => updateField(`${basePath}.retreatCost`, parseInt(e.target.value))}
              className="px-3 py-2 bg-slate-800 text-white rounded border border-slate-600"
            />
          </div>

          {/* Attacks */}
          <div className="mt-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-sm font-semibold">Attacks</span>
              <button
                onClick={() => addAttack(side, isBench, benchIndex)}
                className="text-xs px-2 py-1 bg-green-600 hover:bg-green-500 text-white rounded"
              >
                <Plus className="inline w-3 h-3" /> Add Attack
              </button>
            </div>

            {pokemon.attacks && pokemon.attacks.map((attack, idx) => (
              <div key={idx} className="bg-slate-800 p-2 rounded mb-2">
                <div className="flex justify-between mb-1">
                  <input
                    type="text"
                    placeholder="Attack Name"
                    value={attack.name}
                    onChange={(e) => updateAttack(side, idx, 'name', e.target.value, isBench, benchIndex)}
                    className="flex-1 px-2 py-1 bg-slate-700 text-white text-sm rounded mr-2"
                  />
                  <input
                    type="number"
                    placeholder="Damage"
                    value={attack.damage}
                    onChange={(e) => updateAttack(side, idx, 'damage', parseInt(e.target.value), isBench, benchIndex)}
                    className="w-20 px-2 py-1 bg-slate-700 text-white text-sm rounded mr-2"
                  />
                  <button
                    onClick={() => removeAttack(side, idx, isBench, benchIndex)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Cost (e.g., Electric,Colorless)"
                  value={attack.cost ? attack.cost.join(',') : ''}
                  onChange={(e) => updateAttack(side, idx, 'cost', e.target.value.split(',').map(s => s.trim()), isBench, benchIndex)}
                  className="w-full px-2 py-1 bg-slate-700 text-white text-xs rounded mb-1"
                />
                <input
                  type="text"
                  placeholder="Effect"
                  value={attack.effect || ''}
                  onChange={(e) => updateAttack(side, idx, 'effect', e.target.value, isBench, benchIndex)}
                  className="w-full px-2 py-1 bg-slate-700 text-white text-xs rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-800">
      {/* Header */}
      <nav className="flex justify-between items-center px-8 py-6 bg-slate-900/50 border-b border-slate-700">
        <h1 className="text-2xl font-black text-white">
          TCG<span className="text-purple-400">MAKER</span> - Scenario Builder
        </h1>
        <div className="flex gap-4">
          <button
            onClick={saveToLocalStorage}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Save to Browser
          </button>
          <button
            onClick={exportJSON}
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Export JSON
          </button>
          <button
            onClick={onBack}
            className="px-6 py-2 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors"
          >
            ← Back
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Basic Info */}
        <div className="bg-slate-800/80 rounded-xl p-6 mb-6 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Scenario Info</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Title"
              value={scenario.title}
              onChange={(e) => updateField('title', e.target.value)}
              className="px-4 py-2 bg-slate-700 text-white rounded border border-slate-600"
            />
            <select
              value={scenario.difficulty}
              onChange={(e) => updateField('difficulty', e.target.value)}
              className="px-4 py-2 bg-slate-700 text-white rounded border border-slate-600"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
              <option>Master</option>
            </select>
            <input
              type="text"
              placeholder="Reward (e.g., 200 XP)"
              value={scenario.reward}
              onChange={(e) => updateField('reward', e.target.value)}
              className="px-4 py-2 bg-slate-700 text-white rounded border border-slate-600"
            />
            <input
              type="number"
              placeholder="ID"
              value={scenario.id}
              onChange={(e) => updateField('id', parseInt(e.target.value))}
              className="px-4 py-2 bg-slate-700 text-white rounded border border-slate-600"
            />
          </div>
          <textarea
            placeholder="Description"
            value={scenario.description}
            onChange={(e) => updateField('description', e.target.value)}
            className="w-full mt-4 px-4 py-2 bg-slate-700 text-white rounded border border-slate-600"
            rows={3}
          />
        </div>

        {/* Two columns: Opponent and Player */}
        <div className="grid grid-cols-2 gap-6">
          {/* Opponent Side */}
          <div className="bg-slate-800/80 rounded-xl p-6 border border-red-700">
            <h2 className="text-2xl font-bold text-white mb-4">Opponent</h2>

            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Active Pokémon</h3>
              {renderPokemonEditor(scenario.opponent.activePokemon, 'opponent', 'Active Pokémon')}
            </div>

            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Bench</h3>
              <div className="grid grid-cols-1 gap-2">
                {scenario.opponent.bench.map((pokemon, idx) => (
                  <div key={idx}>
                    {renderPokemonEditor(pokemon, 'opponent', `Bench #${idx + 1}`, true, idx)}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Hand</h3>
              <button
                onClick={() => addCardToHand('opponent')}
                className="w-full mb-2 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded"
              >
                <Plus className="inline w-4 h-4 mr-1" /> Add Card to Hand
              </button>
              <div className="space-y-2">
                {scenario.opponent.hand.map((card, idx) => (
                  <div key={idx} className="bg-slate-700 p-2 rounded flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Card Name"
                      value={card.name}
                      onChange={(e) => updateCard('opponent', idx, 'name', e.target.value)}
                      className="flex-1 px-2 py-1 bg-slate-800 text-white text-sm rounded"
                    />
                    <button
                      onClick={() => openCardSearch('opponent', false, null, true, idx)}
                      className="px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded"
                      title="Search"
                    >
                      <Search className="w-3 h-3" />
                    </button>
                    <select
                      value={card.type}
                      onChange={(e) => updateCard('opponent', idx, 'type', e.target.value)}
                      className="px-2 py-1 bg-slate-800 text-white text-sm rounded"
                    >
                      <option value="trainer">Trainer</option>
                      <option value="pokemon">Pokemon</option>
                      <option value="energy">Energy</option>
                    </select>
                    {card.type === 'energy' && (
                      <input
                        type="text"
                        placeholder="Energy Type"
                        value={card.energyType || ''}
                        onChange={(e) => updateCard('opponent', idx, 'energyType', e.target.value)}
                        className="w-24 px-2 py-1 bg-slate-800 text-white text-sm rounded"
                      />
                    )}
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={card.image}
                      onChange={(e) => updateCard('opponent', idx, 'image', e.target.value)}
                      className="flex-1 px-2 py-1 bg-slate-800 text-white text-sm rounded"
                    />
                    <button
                      onClick={() => removeCardFromHand('opponent', idx)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <input
                type="number"
                placeholder="Deck Count"
                value={scenario.opponent.deckCount}
                onChange={(e) => updateField('opponent.deckCount', parseInt(e.target.value))}
                className="px-4 py-2 bg-slate-700 text-white rounded border border-slate-600"
              />
            </div>
          </div>

          {/* Player Side */}
          <div className="bg-slate-800/80 rounded-xl p-6 border border-blue-700">
            <h2 className="text-2xl font-bold text-white mb-4">Player</h2>

            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Active Pokémon</h3>
              {renderPokemonEditor(scenario.player.activePokemon, 'player', 'Active Pokémon')}
            </div>

            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Bench</h3>
              <div className="grid grid-cols-1 gap-2">
                {scenario.player.bench.map((pokemon, idx) => (
                  <div key={idx}>
                    {renderPokemonEditor(pokemon, 'player', `Bench #${idx + 1}`, true, idx)}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Hand</h3>
              <button
                onClick={() => addCardToHand('player')}
                className="w-full mb-2 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded"
              >
                <Plus className="inline w-4 h-4 mr-1" /> Add Card to Hand
              </button>
              <div className="space-y-2">
                {scenario.player.hand.map((card, idx) => (
                  <div key={idx} className="bg-slate-700 p-2 rounded flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Card Name"
                      value={card.name}
                      onChange={(e) => updateCard('player', idx, 'name', e.target.value)}
                      className="flex-1 px-2 py-1 bg-slate-800 text-white text-sm rounded"
                    />
                    <button
                      onClick={() => openCardSearch('player', false, null, true, idx)}
                      className="px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded"
                      title="Search"
                    >
                      <Search className="w-3 h-3" />
                    </button>
                    <select
                      value={card.type}
                      onChange={(e) => updateCard('player', idx, 'type', e.target.value)}
                      className="px-2 py-1 bg-slate-800 text-white text-sm rounded"
                    >
                      <option value="trainer">Trainer</option>
                      <option value="pokemon">Pokemon</option>
                      <option value="energy">Energy</option>
                    </select>
                    {card.type === 'energy' && (
                      <input
                        type="text"
                        placeholder="Energy Type"
                        value={card.energyType || ''}
                        onChange={(e) => updateCard('player', idx, 'energyType', e.target.value)}
                        className="w-24 px-2 py-1 bg-slate-800 text-white text-sm rounded"
                      />
                    )}
                    <input
                      type="text"
                      placeholder="Image URL"
                      value={card.image}
                      onChange={(e) => updateCard('player', idx, 'image', e.target.value)}
                      className="flex-1 px-2 py-1 bg-slate-800 text-white text-sm rounded"
                    />
                    <button
                      onClick={() => removeCardFromHand('player', idx)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <input
                type="number"
                placeholder="Deck Count"
                value={scenario.player.deckCount}
                onChange={(e) => updateField('player.deckCount', parseInt(e.target.value))}
                className="px-4 py-2 bg-slate-700 text-white rounded border border-slate-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Card Search Modal */}
      {showCardSearch && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-xl p-8 max-w-6xl w-full mx-4 max-h-[85vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Search Pokémon Cards</h2>
              <button
                onClick={() => setShowCardSearch(false)}
                className="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded"
              >
                Close
              </button>
            </div>

            <div className="mb-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search by Pokémon name (e.g., Pikachu, Charizard ex)"
                  value={cardSearchQuery}
                  onChange={(e) => setCardSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && searchCards()}
                  className="flex-1 px-4 py-2 bg-slate-700 text-white rounded border border-slate-600"
                />
                <button
                  onClick={searchCards}
                  disabled={searching}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  {searching ? 'Searching...' : 'Search'}
                </button>
              </div>
              <p className="text-slate-400 text-sm mt-2">
                Powered by Pokémon TCG API
              </p>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {searchResults.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => selectCard(card)}
                    className="cursor-pointer bg-slate-700 border-2 border-slate-600 rounded-lg p-2 hover:border-blue-400 hover:scale-105 transition-all"
                  >
                    <img
                      src={card.images.small}
                      alt={card.name}
                      className="w-full rounded mb-2"
                    />
                    <div className="text-white text-xs text-center font-bold mb-1">{card.name}</div>
                    <div className="text-slate-400 text-xs text-center">{card.set.name}</div>
                    {card.hp && (
                      <div className="text-green-400 text-xs text-center mt-1">HP: {card.hp}</div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-slate-400 py-12">
                {searching ? 'Searching cards...' : 'Search for a Pokémon to see results'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* JSON Export Modal */}
      {showJSON && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-xl p-8 max-w-4xl w-full mx-4 max-h-[80vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Exported JSON</h2>
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" /> Copy
                </button>
                <button
                  onClick={() => setShowJSON(false)}
                  className="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded"
                >
                  Close
                </button>
              </div>
            </div>
            <pre className="bg-slate-900 text-green-400 p-4 rounded overflow-auto text-sm">
              {exportedJSON}
            </pre>
            <p className="text-slate-400 text-sm mt-4">
              Copy this JSON and add it to the challenges array in data/challenges.js
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
