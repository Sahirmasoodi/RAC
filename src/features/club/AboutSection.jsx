import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../../components/ui/SectionTitle";

const values = [
  ["01", "Togetherness", "A team is only as strong as the people beside it."],
  ["02", "Discipline", "Respect the work. Trust the process."],
  ["03", "Sportsmanship", "Compete with heart. Carry yourself with respect."],
];
const image =
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1400&q=85";
export default function AboutSection() {
  return (
    <section id="about" className="bg-paper px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.8fr] lg:items-end">
          <SectionTitle index="01" eyebrow="The club">
            Local roots.
            <br />
            <span className="text-charcoal/35">Big game</span>
            <br />
            energy.
          </SectionTitle>
          <p className="max-w-xl text-sm leading-7 text-charcoal/65">
            RAC is a sports community from Mustafabad, brought together by a
            shared love for football and cricket. We believe in showing up for
            each other, competing with respect, and making every moment count.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <div className="relative min-h-[360px] overflow-hidden bg-sand md:min-h-[520px]">
            <img
              src={image}
              alt="Footballers competing on a local pitch"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover grayscale-[.25]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
            <span className="absolute bottom-6 left-6 font-display text-3xl font-bold uppercase text-paper md:bottom-9 md:left-9 md:text-4xl">
              The game is our
              <br />
              common language.
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[.2em] text-charcoal/45">
              What we play for
            </p>
            {values.map(([number, title, text]) => (
              <div
                key={number}
                className="grid grid-cols-[42px_1fr] gap-4 border-t border-charcoal/20 py-6"
              >
                <span className="font-display text-xl text-charcoal/35">
                  {number}
                </span>
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-charcoal/55">
                    {text}
                  </p>
                </div>
              </div>
            ))}
            <p className="mt-4 border-l-2 border-olive pl-4 text-xs leading-6 text-charcoal/55">
              Our official founding year, history and club milestones will be
              added once confirmed by the club.
            </p>
          </div>
        </div>
        <a
          href="#football"
          className="mt-10 inline-flex items-center gap-3 border-b border-charcoal pb-2 text-[10px] font-extrabold uppercase tracking-[.18em] transition hover:gap-5"
        >
          Explore our sports <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
