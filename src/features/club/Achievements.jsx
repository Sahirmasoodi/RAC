import { Award } from "lucide-react";
import { achievements } from "../../data/site";
import SectionTitle from "../../components/ui/SectionTitle";

export default function Achievements() {
  return (
    <section className="bg-olive px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle index="07" eyebrow="The honours">
            Earned with
            <br />
            <span className="text-charcoal/40">every effort.</span>
          </SectionTitle>
          <p className="max-w-sm text-xs leading-6 text-charcoal/65">
            A place for the club's verified milestones, tournament honours and
            individual awards. Sample entries below are placeholders, not
            claimed achievements.
          </p>
        </div>
        <div className="mt-10 grid gap-0 border-y border-charcoal/25 md:grid-cols-3 md:divide-x md:divide-charcoal/25">
          {achievements.map((item, index) => (
            <article
              key={`${item.category}-${index}`}
              className="flex min-h-48 gap-5 border-b border-charcoal/25 py-7 last:border-0 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <Award className="mt-1 shrink-0" size={22} />
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[.2em] text-charcoal/55">
                  {item.category} / {item.year}
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold uppercase leading-none">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xs text-xs leading-5 text-charcoal/65">
                  {item.description}
                </p>
                <span className="mt-4 inline-block border border-charcoal/35 px-2 py-1 text-[8px] font-bold uppercase tracking-wider">
                  Demo placeholder
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
