export default function SectionTitle({ index, eyebrow, children, light = false, className = '' }) {
  return <div className={className}>
    <p className={`mb-5 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.24em] ${light ? 'text-olive' : 'text-charcoal/55'}`}>
      {index && <span className={`grid h-7 w-7 place-items-center border text-[10px] ${light ? 'border-white/25 text-paper' : 'border-charcoal/20 text-charcoal'}`}>{index}</span>}{eyebrow}
    </p>
    <h2 className={`font-display text-5xl font-black uppercase leading-[.88] tracking-[-.025em] sm:text-6xl md:text-7xl lg:text-[5.7rem] ${light ? 'text-paper' : 'text-charcoal'}`}>{children}</h2>
  </div>;
}
