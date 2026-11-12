import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  MapPin,
} from "lucide-react";
import logo from "../assets/rac-logo.jpg";
import Header from "../components/layout/Header";
import AboutSection from "../features/club/AboutSection";
import Achievements from "../features/club/Achievements";
import FootballSquad from "../features/football/FootballSquad";
import MatchCentre from "../features/football/MatchCentre";
import CricketSection from "../features/cricket/CricketSection";
import GallerySection from "../features/gallery/GallerySection";
import ContactForm from "../features/contact/ContactForm";
import { footballPlayers, pastFootballMatches } from "../data/football";
import { getFootballStats } from "../lib/footballStats";
import SectionTitle from "../components/ui/SectionTitle";

const heroImage =
  "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=2400&q=90";
const footballImage =
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1800&q=88";

function Hero() {
  const stats = getFootballStats();
  return (
    <section
      id="top"
      className="relative isolate min-h-[760px] overflow-hidden bg-charcoal text-paper md:min-h-[850px]"
    >
      <img
        src={heroImage}
        alt="Floodlit football stadium before a match"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/75 to-charcoal/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-transparent to-charcoal/25" />
      <Header />
      <div className="mx-auto flex min-h-[760px] max-w-[1440px] flex-col justify-center px-5 pb-24 pt-36 md:min-h-[850px] md:px-10 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <div className="mb-8 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.25em] text-olive">
            <span className="h-px w-10 bg-olive" />
            RIJAL ATHELETIC CLUB
          </div>
          <h1 className="font-display text-[clamp(4.6rem,12vw,11rem)] font-black uppercase leading-[.76] tracking-[-.04em]">
            One club.
            <br />
            <span className="text-olive">Two games.</span>
            <br />
            All heart.
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,400px)_1fr] md:items-end">
            <p className="max-w-sm text-sm leading-7 text-paper/70">
              A community built around the game. We play with pride, grow
              together, and carry the spirit of Mustafabad wherever we compete.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#about"
                className="inline-flex items-center gap-4 bg-olive px-6 py-4 text-[10px] font-extrabold uppercase tracking-[.16em] text-charcoal transition hover:bg-paper"
              >
                Explore our club <ArrowUpRight size={17} />
              </a>
              <a
                href="#squad"
                className="inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.16em] text-paper transition hover:text-olive"
              >
                Meet the squad <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
        <div className="mt-16 grid grid-cols-2 border-t border-white/25 pt-5 sm:grid-cols-4 md:mt-20">
          {[
            [String(stats.played).padStart(2, "0"), "Football matches"],
            [String(stats.wins).padStart(2, "0"), "Recorded wins"],
            [
              String(footballPlayers.length).padStart(2, "0"),
              "Football players",
            ],
            ["02", "Sports"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-r border-white/20 px-4 py-3 first:pl-0 last:border-0"
            >
              <strong className="font-display text-4xl font-bold md:text-5xl">
                {value}
                <span className="text-olive">.</span>
              </strong>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[.16em] text-paper/50">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 right-6 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[.2em] text-paper/60 md:right-10"
      >
        <ArrowDown size={15} /> Scroll to explore
      </a>
      <div className="absolute bottom-8 left-6 hidden font-display text-xs font-bold tracking-[.2em] text-paper/50 md:block">
        RAC / 001
      </div>
    </section>
  );
}

function Ticker() {
  return (
    <div className="overflow-hidden bg-olive py-4">
      <div className="flex min-w-max  gap-8 whitespace-nowrap font-display text-2xl font-black uppercase tracking-wide text-charcoal">
        {Array.from({ length: 4 }, (_, index) => (
          <span key={index}>
            ONE CLUB <b className="mx-5">✳</b> TWO SPORTS{" "}
            <b className="mx-5">✳</b> ONE COMMUNITY <b className="mx-5">✳</b>{" "}
            ALL HEART <b className="mx-5">✳</b>
          </span>
        ))}
      </div>
    </div>
  );
}

function FootballFeature() {
  return (
    <section
      id="football"
      className="grid bg-sand lg:min-h-[650px] lg:grid-cols-2"
    >
      <div className="relative min-h-[380px] overflow-hidden lg:min-h-full">
        <img
          src={footballImage}
          alt="Football players competing under stadium lights"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 to-transparent" />
        <span className="absolute bottom-5 left-6 font-display text-8xl font-black text-paper/90 md:bottom-10 md:left-10 md:text-[10rem]">
          01
        </span>
        <span className="absolute right-7 top-7 text-[10px] font-bold uppercase tracking-[.2em] text-paper">
          RAC / Football division
        </span>
      </div>
      <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16 lg:py-24">
        <SectionTitle index="02" eyebrow="The beautiful game">
          Play with
          <br />
          <span className="text-charcoal/35">purpose.</span>
        </SectionTitle>
        <p className="mt-8 max-w-lg text-sm leading-7 text-charcoal/65">
          The pitch is where we test our character, build our chemistry, and
          play for something bigger than ourselves. Explore the squad and the
          results recorded by the club.
        </p>
        <div className="mt-10 grid grid-cols-3 border-y border-charcoal/20 py-5">
          {[
            [String(footballPlayers.length).padStart(2, "0"), "Players"],
            [String(pastFootballMatches.length).padStart(2, "0"), "Matches"],
            [String(getFootballStats().wins).padStart(2, "0"), "Wins"],
          ].map(([n, label]) => (
            <div
              key={label}
              className="border-r border-charcoal/20 px-3 first:pl-0 last:border-0"
            >
              <strong className="font-display text-4xl font-bold">{n}</strong>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[.15em] text-charcoal/50">
                {label}
              </p>
            </div>
          ))}
        </div>
        <a
          href="#squad"
          className="mt-8 inline-flex w-fit items-center gap-3 border-b border-charcoal pb-2 text-[10px] font-extrabold uppercase tracking-[.17em] transition hover:gap-5"
        >
          Explore football squad <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="join" className="bg-sand px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1fr_.8fr]">
        <div>
          <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[.22em] text-charcoal/55">
            08 / Be part of it
          </p>
          <h2 className="font-display text-6xl font-black uppercase leading-[.85] sm:text-7xl md:text-8xl">
            Your game.
            <br />
            <span className="text-charcoal/35">Your people.</span>
          </h2>
          <p className="mt-8 max-w-md text-sm leading-7 text-charcoal/65">
            Whether you play, support, or simply love being around sport —
            there’s a place for you here. Send us a message to connect with the
            club.
          </p>
          <div className="mt-10 flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-[.15em] text-charcoal/65">
            <span className="flex items-center gap-2">
              <MapPin size={15} /> Mustafabad, Kashmir
            </span>
            <a
              href="#top"
              className="flex items-center gap-2 hover:text-charcoal"
            >
              <Instagram size={15} /> Club social links coming soon
            </a>
          </div>
        </div>
        <div className="bg-paper p-6 md:p-10">
          <div className="mb-8 border-b border-charcoal/15 pb-6">
            <p className="text-[9px] font-extrabold uppercase tracking-[.2em] text-charcoal/45">
              01 — Say hello
            </p>
            <h3 className="mt-3 font-display text-4xl font-bold uppercase leading-none">
              Let's get you
              <br />
              in the game.
            </h3>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-10 text-paper md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-10 md:flex-row md:items-center">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo}
              alt="RAC crest"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="font-display text-4xl font-black">
              RAC<span className="text-olive">.</span>
            </span>
          </a>
          <p className="font-display text-2xl font-bold uppercase leading-tight text-paper/75">
            One club. Two sports.
            <br />A whole lot of heart.
          </p>
          <a
            href="#top"
            className="text-[10px] font-extrabold uppercase tracking-[.18em] text-olive hover:text-paper"
          >
            Back to top ↑
          </a>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 text-[9px] font-bold uppercase tracking-[.14em] text-paper/40 sm:flex-row">
          <span>© {new Date().getFullYear()} RAC — Rijal Atheletic Club</span>
          <span>Made for the love of the game.</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <Ticker />
      <AboutSection />
      <FootballFeature />
      <FootballSquad />
      <CricketSection />
      <MatchCentre />
      <GallerySection />
      <Achievements />
      <ContactSection />
      <Footer />
    </>
  );
}
