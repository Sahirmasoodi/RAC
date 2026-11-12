import { ArrowUpRight, CircleDot, Shield, Trophy } from "lucide-react";
import { cricketPlayers, cricketMatches } from "../../data/site";
import SectionTitle from "../../components/ui/SectionTitle";
import PlayerCard from "../../components/ui/PlayerCard";

const image =
  "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1800&q=88";
export default function CricketSection() {
  return (
    <section id="cricket" className="bg-charcoal text-paper">
      <div className="grid min-h-[620px] lg:grid-cols-2">
        <div className="relative min-h-[380px] overflow-hidden lg:min-h-full">
          <img
            src={image}
            alt="Cricket match on a sunlit ground"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-charcoal/10" />
          <span className="absolute bottom-8 left-6 font-display text-8xl font-black text-paper/90 md:left-10 md:text-[10rem]">
            02
          </span>
          <span className="absolute right-7 top-8 text-[10px] font-bold uppercase tracking-[.22em] text-olive">
            RAC / CRICKET DIVISION
          </span>
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16 lg:py-24">
          <SectionTitle index="03" eyebrow="A different kind of battle" light>
            Every ball.
            <br />
            <span className="text-olive">Every moment.</span>
          </SectionTitle>
          <p className="mt-8 max-w-lg text-sm leading-7 text-paper/65">
            From the first delivery to the final over, cricket brings its own
            rhythm, patience and intensity. This is the home for the RAC cricket
            roster and match updates.
          </p>
          <div className="mt-10 grid grid-cols-3 border-y border-white/15 py-5">
            {[
              ["01", "Team"],
              [String(cricketPlayers.length).padStart(2, "0"), "Demo squad"],
              [String(cricketMatches.length).padStart(2, "0"), "Demo results"],
            ].map(([n, label]) => (
              <div
                key={label}
                className="border-r border-white/15 px-3 first:pl-0 last:border-0"
              >
                <strong className="font-display text-4xl font-bold text-olive">
                  {n}
                </strong>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[.14em] text-paper/50">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <a
            href="#cricket-squad"
            className="mt-8 inline-flex w-fit items-center gap-3 border-b border-olive pb-2 text-[11px] font-extrabold uppercase tracking-[.17em] text-olive transition hover:gap-5"
          >
            Meet cricket squad <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div id="cricket-squad" className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[.22em] text-olive">
                03A / THE SQUAD · DEMO DATA
              </p>
              <h3 className="font-display text-5xl font-black uppercase leading-none md:text-6xl">
                Meet the <span className="text-olive">players.</span>
              </h3>
            </div>
            <p className="max-w-sm text-xs leading-6 text-paper/50">
              Sample roster for layout preview only. Replace these demo profiles
              with confirmed cricket player details.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {cricketPlayers.map((player, index) => (
              <div key={player.number} className="text-paper">
                <PlayerCard player={player} index={index} sport="Cricket" />
                <div className="grid grid-cols-2 gap-2 py-3 text-[9px] uppercase tracking-wider text-paper/45">
                  <span>
                    Batting
                    <br />
                    <b className="mt-1 block text-paper/80">{player.batting}</b>
                  </span>
                  <span>
                    Bowling
                    <br />
                    <b className="mt-1 block text-paper/80">{player.bowling}</b>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-white/15 pt-8">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[.2em] text-olive">
                  Cricket / Demo data
                </p>
                <h4 className="mt-2 font-display text-3xl font-bold uppercase">
                  Recent scorecards
                </h4>
              </div>
              <span className="border border-olive/50 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-olive">
                Illustrative only
              </span>
            </div>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {cricketMatches.map((match, index) => (
                <div
                  key={`${match.team2}-${index}`}
                  className="grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <div>
                    <p className="text-xs font-bold">
                      {match.team1}{" "}
                      <span className="px-2 text-paper/35">vs</span>{" "}
                      {match.team2}
                    </p>
                    <p className="mt-1 text-[10px] text-paper/45">
                      {match.date} · {match.venue}
                    </p>
                  </div>
                  <strong className="font-display text-2xl text-olive">
                    {match.result}
                  </strong>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Fixtures", "No confirmed cricket fixtures yet.", CircleDot],
              [
                "Player stats",
                "Replace demo player details with official batting and bowling records.",
                Shield,
              ],
              ["Honours", "Add verified tournaments and awards here.", Trophy],
            ].map(([title, copy, Icon]) => (
              <div
                key={title}
                className="flex gap-4 border border-white/10 p-5"
              >
                <Icon className="shrink-0 text-olive" />
                <div>
                  <h4 className="font-display text-2xl font-bold uppercase">
                    {title}
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-paper/50">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
