import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function PlayerCard({ player, index = 0, sport = "Football" }) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = player.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.055 }}
      className="group "
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-sand shadow-sm shadow-sand">
        {player.img && !imageFailed ? (
          <img
            src={player.img}
            alt={`${player.name} — ${sport} player`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-charcoal text-olive">
            <span className="font-display text-7xl font-black">{initials}</span>
          </div>
        )}
        <span className="absolute left-3 top-3 bg-olive px-3 py-1 font-display text-xl font-bold text-charcoal">
          {String(player.number ?? "—").padStart(2, "0")}
        </span>
        <span className="absolute bottom-3 right-3 border border-white/50 bg-charcoal/70 px-2 py-1 text-[9px] font-bold uppercase tracking-[.16em] text-paper">
          {sport}
        </span>
      </div>
      <div className="flex items-start justify-between border-b border-charcoal/20 py-4">
        <div>
          <h3 className="font-display text-2xl font-bold uppercase leading-none">
            {player.name}
          </h3>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[.17em] text-charcoal/55">
            {player.position || player.role || "Player"}
          </p>
        </div>
        <ArrowUpRight
          size={18}
          className="mt-1 transition group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </div>
    </motion.article>
  );
}
