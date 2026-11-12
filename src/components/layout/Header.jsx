import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import logo from '../../assets/rac-logo.jpg';

const links = [
  ['Club', '#about'], ['Football', '#football'], ['Cricket', '#cricket'],
  ['Squad', '#squad'], ['Matches', '#matches'], ['Gallery', '#gallery'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/15 bg-charcoal/30 text-paper backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" aria-label="RAC home" className="flex items-center gap-3">
          <img src={logo} alt="RAC crest" className="h-11 w-11 rounded-full object-cover ring-1 ring-sand/60" />
          <span className="font-display text-3xl font-black tracking-wide">RAC<span className="text-olive">.</span></span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={label} href={href} className="text-[11px] font-bold uppercase tracking-[.18em] text-paper/75 transition hover:text-olive">{label}</a>)}
          <a href="#join" className="inline-flex items-center gap-2 bg-olive px-5 py-3 text-[11px] font-extrabold uppercase tracking-[.14em] text-charcoal transition hover:bg-paper">Join the club <ArrowUpRight size={15}/></a>
        </nav>
        <button type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(v => !v)} className="grid h-11 w-11 place-items-center border border-white/25 lg:hidden">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav className="grid gap-1 border-t border-white/15 bg-charcoal px-5 py-5 lg:hidden" aria-label="Mobile navigation">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-3 font-display text-2xl uppercase tracking-wide">{label}</a>)}
        <a href="#join" onClick={() => setOpen(false)} className="mt-3 inline-flex items-center justify-between bg-olive px-4 py-3 font-bold uppercase tracking-wider text-charcoal">Join the club <ArrowUpRight size={17}/></a>
      </nav>}
    </header>
  );
}
