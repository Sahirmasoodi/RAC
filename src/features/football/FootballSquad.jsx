import { useMemo, useState } from 'react';
import { footballPlayers } from '../../data/football';
import SectionTitle from '../../components/ui/SectionTitle';
import PlayerCard from '../../components/ui/PlayerCard';

const filters = ['All', 'Captain', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper'];
export default function FootballSquad() {
  const [filter, setFilter] = useState('All');
  const visiblePlayers = useMemo(() => filter === 'All' ? footballPlayers : footballPlayers.filter(player => player.position === filter), [filter]);
  return <section id="squad" className="bg-paper px-5 py-20 md:px-10 md:py-28">
    <div className="mx-auto max-w-[1440px]">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionTitle index="04" eyebrow="The people · Football squad">The ones who<br/><span className="text-charcoal/35">show up.</span></SectionTitle>
        <div className="flex items-end gap-4"><strong className="font-display text-7xl font-black leading-none">{String(footballPlayers.length).padStart(2, '0')}</strong><span className="pb-2 text-[10px] font-bold uppercase leading-relaxed tracking-[.17em] text-charcoal/55">Football<br/>players listed</span></div>
      </div>
      <div className="mt-10 flex flex-wrap gap-2 border-y border-charcoal/15 py-4" aria-label="Filter football players">
        {filters.map(item => <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={`px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.14em] transition ${filter === item ? 'bg-charcoal text-paper' : 'border border-charcoal/20 text-charcoal/65 hover:border-charcoal hover:text-charcoal'}`}>{item}</button>)}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:gap-x-6 lg:grid-cols-4">{visiblePlayers.map((player, index) => <PlayerCard key={player.number} player={player} index={index}/>)}</div>
      <p className="mt-8 text-xs leading-relaxed text-charcoal/55">Add player photos to <code className="bg-sand px-1.5 py-1">public/images/players/</code> and update the image path in <code className="bg-sand px-1.5 py-1">src/data/football.js</code>.</p>
    </div>
  </section>;
}
