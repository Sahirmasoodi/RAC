import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { galleryImages } from "../../data/site";
import SectionTitle from "../../components/ui/SectionTitle";

export default function GallerySection() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    ...new Set(galleryImages.map((image) => image.category)),
  ];
  const visible = useMemo(
    () =>
      filter === "All"
        ? galleryImages
        : galleryImages.filter((image) => image.category === filter),
    [filter],
  );
  return (
    <section id="gallery" className="bg-paper px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle index="06" eyebrow="The moments">
            Captured in
            <br />
            <span className="text-charcoal/35">the game.</span>
          </SectionTitle>
          <p className="max-w-sm text-xs leading-6 text-charcoal/55">
            The tackles, boundaries, training days and celebrations. Add your
            own photographs to make this gallery yours.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-2 border-y border-charcoal/15 py-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={`px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.14em] transition ${filter === category ? "bg-charcoal text-paper" : "border border-charcoal/20 text-charcoal/65 hover:border-charcoal"}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-8 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4 md:gap-5">
          {visible.map((item, index) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden bg-sand ${index === 0 ? "row-span-2" : ""} ${index === 3 ? "md:col-span-2" : ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent opacity-80" />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between text-paper">
                <span>
                  <span className="block text-[9px] font-bold uppercase tracking-[.18em] text-olive">
                    {item.category}
                  </span>
                  
                </span>
                <ArrowUpRight size={18} />
              </figcaption>
           
            </figure>
          ))}
        </div>
       
      </div>
    </section>
  );
}
