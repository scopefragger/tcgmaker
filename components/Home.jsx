import { Play, BookOpen, Trophy } from 'lucide-react';
import { challenges } from '../data/challenges.js';

export default function Home({ onSelectPuzzle }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          STRATEGY LAB
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          Test your knowledge of the official Pokémon TCG rules with high-stakes, 
          one-turn victory scenarios.
        </p>
      </header>

      {/* How To Play Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <InfoCard 
          icon={<BookOpen className="text-blue-400" />} 
          title="Analyze" 
          desc="Study the board, your hand, and the remaining cards in your deck." 
        />
        <InfoCard 
          icon={<Play className="text-purple-400" />} 
          title="Sequence" 
          desc="The order of operations is everything. One wrong move and you fail." 
        />
        <InfoCard 
          icon={<Trophy className="text-yellow-400" />} 
          title="Win" 
          desc="Take your final prize cards or meet the win condition to pass." 
        />
      </div>

      {/* Puzzle Selection */}
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <Trophy size={24} /> Available Challenges
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {challenges.map((p) => (
          <div 
            key={p.id}
            onClick={() => onSelectPuzzle(p)}
            className="group relative bg-slate-900 border border-slate-800 p-6 rounded-xl cursor-pointer hover:border-blue-500 transition-all hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 p-2 bg-blue-600 text-[10px] font-bold uppercase rounded-bl-lg rounded-tr-lg">
              {p.difficulty}
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase italic">{p.title}</h3>
            <p className="text-slate-500 text-sm mb-4">Objective: Take all Prize Cards this turn.</p>
            <button className="w-full bg-slate-800 group-hover:bg-blue-600 py-2 rounded font-bold transition-colors uppercase tracking-widest text-xs">
              Enter Lab
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoCard({ icon, title, desc }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
      <div className="mb-4">{icon}</div>
      <h4 className="text-lg font-bold mb-1">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}