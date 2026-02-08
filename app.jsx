import React, { useState } from 'react';
import { Play, Trophy, ShieldAlert } from 'lucide-react';

export default function App() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <nav className="flex justify-between items-center mb-16 border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-black italic text-blue-500 tracking-tighter">
          TCG<span className="text-white">MAKER</span>
        </h1>
        <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-slate-400">
          <span className="hover:text-white cursor-pointer transition-colors">Challenges</span>
          <span className="hover:text-white cursor-pointer transition-colors">Rules</span>
        </div>
      </nav>

      {/* Main Hero */}
      <div className="text-center mb-20">
        <h2 className="text-6xl font-black uppercase italic mb-4 leading-none">
          Solve the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Unbeatable</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          High-difficulty Pokémon TCG scenarios. Master the rules, find the sequence, and take the victory.
        </p>
      </div>

      {/* Puzzle Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PuzzleCard 
          title="Snorlax Blockade" 
          difficulty="Expert" 
          desc="Your deck is empty. Your opponent has 1 prize left. Win this turn."
        />
        <PuzzleCard 
          title="Mew VMAX Math" 
          difficulty="Intermediate" 
          desc="Find the exact damage modifiers needed to KO a 310 HP target."
        />
        <PuzzleCard 
          title="Lost Zone Paradox" 
          difficulty="Master" 
          desc="Manage your resources to reach 10 cards in the Lost Zone and attack."
        />
      </div>
    </div>
  );
}

function PuzzleCard({ title, difficulty, desc }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-blue-500 transition-all group cursor-pointer">
      <div className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-tighter">{difficulty}</div>
      <h3 className="text-2xl font-black italic uppercase mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-slate-500 text-sm mb-6 leading-relaxed">{desc}</p>
      <button className="w-full bg-white text-black font-black py-3 rounded uppercase italic text-sm hover:bg-blue-500 hover:text-white transition-all">
        Enter Scenario
      </button>
    </div>
  );
}