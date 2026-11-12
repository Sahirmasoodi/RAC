import { MapPin } from "lucide-react";
import { pastFootballMatches } from "../../data/football";
import { upcomingMatches } from "../../data/site";
import SectionTitle from "../../components/ui/SectionTitle";
import { getFootballStats } from "../../lib/footballStats";

function resultType(score) {
  const [home, away] = score.split("-").map((value) => Number(value.trim()));
  return home > away ? "W" : home < away ? "L" : "D";
}
export default function MatchCentre() {
  const stats = getFootballStats();
  return (
    <section id="matches" className="bg-sand px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle index="05" eyebrow="Match centre">
            Every game
            <br />
            <span className="text-charcoal/35">has a story.</span>
          </SectionTitle>
          <div className="grid grid-cols-3 gap-5 border-y border-charcoal/20 py-4 md:min-w-[360px]">
            <div>
              <b className="font-display text-4xl">
                {pastFootballMatches.length}
              </b>
              <p className="text-[9px] font-bold uppercase tracking-wider text-charcoal/50">
                Played
              </p>
            </div>
            <div>
              <b className="font-display text-4xl">{stats.wins}</b>
              <p className="text-[9px] font-bold uppercase tracking-wider text-charcoal/50">
                Wins
              </p>
            </div>
            <div>
              <b className="font-display text-4xl">{stats.draws}</b>
              <p className="text-[9px] font-bold uppercase tracking-wider text-charcoal/50">
                Draws
              </p>
            </div>
          </div>
        </div>
        <p className="mt-6 max-w-xl text-xs leading-6 text-charcoal/60">
          Football results supplied for Mustafabad FC. The upcoming fixture rows
          are demo placeholders until dates, opponents and venues are confirmed.
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {upcomingMatches.map((match, index) => (
            <article
              key={`${match.sport}-${index}`}
              className="border border-charcoal/20 bg-paper/50 p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[9px] font-extrabold uppercase tracking-[.18em]">
                  {match.sport} / Upcoming
                </span>
               
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase">
                {match.team} <span className="text-charcoal/35">vs</span>{" "}
                {match.opponent}
              </h3>
              <p className="mt-2 text-[10px] font-semibold text-charcoal/55">
                {match.date} · {match.time} · {match.venue}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 hidden grid-cols-[1.5fr_1fr_100px] gap-4 border-b border-charcoal/30 pb-3 text-[9px] font-extrabold uppercase tracking-[.18em] text-charcoal/50 md:grid">
          <span>Fixture</span>
          <span>Date / venue</span>
          <span className="text-right">Full time</span>
        </div>
        <div>
          {pastFootballMatches.map((match, index) => {
            const type = resultType(match.result);
            return (
              <article
                key={`${match.date}-${index}`}
                className="grid gap-3 border-b border-charcoal/20 py-5 md:grid-cols-[1.5fr_1fr_100px] md:items-center md:gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 shrink-0 font-display text-lg text-charcoal/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <strong className="text-xs font-bold">{match.team1}</strong>
                    <span className="text-[9px] font-bold text-charcoal/35">
                      VS
                    </span>
                    <strong className="text-xs font-bold">{match.team2}</strong>
                  </div>
                </div>
                <div className="pl-10 md:pl-0">
                  <p className="text-xs font-semibold">{match.date}</p>
                  <p className="mt-1 flex items-center gap-1 text-[10px] text-charcoal/55">
                    <MapPin size={11} />
                    {match.venue}
                  </p>
                </div>
                <div className="flex items-center justify-between pl-10 md:justify-end md:pl-0">
                  <strong className="font-display text-3xl font-bold tracking-wide">
                    {match.result}
                  </strong>
                  <span
                    className={`ml-3 grid h-7 w-7 place-items-center text-[10px] font-black ${type === "W" ? "bg-olive" : type === "D" ? "bg-charcoal/10" : "bg-charcoal text-paper"}`}
                  >
                    {type}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
