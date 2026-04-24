"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { churchInfo } from "../data/church";
import { socialLinks } from "../data/socialLinks";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
const slides = [
  {
    image: "/images/story/slide-1.jpg",
    eyebrow: "Avant",
    title: "Je vivais sans repère.",
    text: "Je cherchais la paix dans beaucoup de choses, mais rien ne remplissait vraiment mon cœur.",
  },
  {
    image: "/images/story/slide-2.jpg",
    eyebrow: "Combat",
    title: "Je portais des luttes silencieuses.",
    text: "À l’extérieur tout semblait normal, mais à l’intérieur j’étais fatigué, perdu et sans direction.",
  },
  {
    image: "/images/story/slide-3.jpg",
    eyebrow: "Rencontre",
    title: "Puis quelque chose a changé.",
    text: "J’ai découvert une présence, une vérité et une paix que je n’avais jamais connues auparavant.",
  },
  {
    image: "/images/story/slide-4.jpg",
    eyebrow: "Transformation",
    title: "Ma vie a commencé à prendre sens.",
    text: "Petit à petit, je suis passé de l’errance à une vie restaurée, alignée et plus profonde.",
  },
  {
    image: "/images/story/slide-5.jpg",
    eyebrow: "Aujourd’hui",
    title: "J’avance avec foi et espérance.",
    text: "Ce n’est pas seulement une nouvelle habitude. C’est une nouvelle vie, une nouvelle identité, une nouvelle direction.",
  },
];

function getSocialBadge(name: string) {
  const lower = name.toLowerCase();

  if (lower === "whatsapp") return "WA";
  if (lower === "youtube") return "YT";
  if (lower === "facebook") return "FB";
  if (lower === "instagram") return "IG";
  if (lower === "tiktok") return "TT";

  return name.slice(0, 2).toUpperCase();
}

export default function HomeExperience() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.load();
  }, []);

  const currentSlide = useMemo(() => slides[active], [active]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (!audio.currentSrc) {
        audio.load();
      }

      if (audio.paused) {
        await audio.play();
        setPlaying(true);
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch (error) {
      console.error("Erreur audio :", error);
      setPlaying(false);
      alert(
        "Le lecteur audio n’a pas réussi à démarrer. Recharge la page puis réessaie."
      );
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextMuted = !muted;
    audio.muted = nextMuted;
    setMuted(nextMuted);
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/theme.mp3" type="audio/mpeg" />
        Votre navigateur ne supporte pas l’audio HTML5.
      </audio>

      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <section
          id="accueil"
          className="relative overflow-hidden bg-[#071918] text-white"
        >
          <div className="absolute inset-0">
            <div className="absolute left-[-8rem] top-[-4rem] h-72 w-72 rounded-full bg-[#065156]/60 blur-3xl" />
            <div className="absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-[#FF5B04]/20 blur-3xl" />
            <div className="absolute bottom-[-8rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0b6a70]/40 blur-3xl" />
          </div>

          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `linear-gradient(
                to right,
                rgba(3,17,15,0.72),
                rgba(6,52,54,0.48),
                rgba(255,91,4,0.14)
              ), url(${currentSlide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <header className="relative z-20 px-4 pt-4 md:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#082321]/70 px-5 py-4 text-white backdrop-blur-xl md:px-8">
              <a href="#accueil" className="text-xl font-extrabold tracking-tight">
                {churchInfo.shortName}
                <span className="text-[#FF5B04]">.</span>
              </a>

              <nav className="hidden items-center gap-8 md:flex">
                <a
                  href="#histoire"
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  Histoire
                </a>
                <a
                  href="#plateformes"
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  Plateformes
                </a>
                <a
                  href="#contact"
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  Contact
                </a>
              </nav>

              <a
                href={churchInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#FF5B04] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                WhatsApp
              </a>
            </div>
          </header>

          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-8 md:pt-28">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="max-w-4xl">
                <p className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-white/80">
                  {currentSlide.eyebrow}
                </p>

                <h1 className="mt-7 text-5xl font-extrabold leading-[0.95] md:text-7xl xl:text-[6rem]">
                  {currentSlide.title}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                  {currentSlide.text}
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="#plateformes"
                    className="rounded-full bg-white px-7 py-4 font-semibold text-[#063336] transition hover:scale-[1.02]"
                  >
                    Découvrir l’église
                  </a>

                  <a
                    href="#contact"
                    className="rounded-full border border-white/14 bg-white/10 px-7 py-4 font-semibold text-white transition hover:bg-white/15"
                  >
                    Nous contacter
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <button
                    onClick={togglePlay}
                    className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    {playing ? "Mettre la musique en pause" : "Lancer la musique"}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    {muted ? "Activer le son" : "Couper le son"}
                  </button>
                </div>
              </div>

              <div className="glass hero-shadow rounded-[2rem] border border-white/10 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                  Témoignage visuel
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight">
                  {churchInfo.slogan}
                </h2>

                <p className="mt-5 text-base leading-7 text-white/75">
                  Cette séquence d’images illustre un chemin intérieur : 
                  la recherche, la fatigue, la rencontre, puis la transformation.
                </p>

                <div className="mt-8 flex gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActive(index)}
                      className={`h-2 rounded-full transition-all ${
                        active === index ? "w-12 bg-[#FF5B04]" : "w-6 bg-white/30"
                      }`}
                      aria-label={`Aller au slide ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="mt-8 rounded-[1.5rem] bg-white/10 p-5">
                  <p className="text-sm text-white/60">Slide actuel</p>
                  <p className="mt-2 text-lg font-semibold">
                    {currentSlide.eyebrow}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="histoire" className="relative px-6 py-20 md:px-8">
          <div className="mx-auto max-w-7xl story-section-shell">
            <div className="story-section-inner">
              <div className="story-header">
                <div className="max-w-4xl">
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
                    Une histoire
                  </p>

                  <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--primary)] md:text-6xl">
                    Une transformation intérieure, racontée avec vérité et espérance
                  </h2>

                  <p className="mt-6 max-w-5xl text-lg leading-8 text-slate-600 md:text-[1.35rem]">
                    Chaque étape traduit une réalité du cœur humain : l’errance, le combat, 
                    la rencontre avec la lumière, puis la restauration. 
                    Ces images accompagnent un chemin de transformation profonde.
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    title: "Avant",
                    text: "Une vie sans repère, sans paix profonde, sans direction stable.",
                    image: "/images/story-cards/avant.jpg",
                  },
                  {
                    title: "Combat",
                    text: "Des luttes intérieures, du bruit, de la fatigue, une recherche réelle.",
                    image: "/images/story-cards/combat.jpg",
                  },
                  {
                    title: "Rencontre",
                    text: "Un moment de vérité, de lumière, d’ouverture intérieure.",
                    image: "/images/story-cards/rencontre.jpg",
                  },
                  {
                    title: "Transformation",
                    text: "Une vie restaurée, une espérance retrouvée, une nouvelle marche.",
                    image: "/images/story-cards/transformation.jpg",
                  },
                ].map((item) => (
                  <div key={item.title} className="story-card-lite group">
                    <div
                      className="story-card-lite-image"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />

                    <div className="story-chip">{item.title}</div>

                    <div className="story-card-panel">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

       <section id="plateformes" className="px-6 py-24 md:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
        Plateformes officielles
      </p>

      <h2 className="mt-4 text-4xl font-extrabold text-[var(--primary)] md:text-5xl">
        Suivez la vie de l’église
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Une présence digitale cohérente, sobre et actuelle pour rester connecté
        à la communauté.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          name: "Facebook",
          href: "https://www.facebook.com/profile.php?id=61556075159114",
          description:
            "Retrouvez nos annonces, événements et moments de vie.",
          icon: FaFacebookF,
        },
        {
          name: "Instagram",
          href: "https://instagram.com/ton-eglise",
          description:
            "Découvrez l’atmosphère de notre communauté en images.",
          icon: FaInstagram,
        },
        {
          name: "TikTok",
          href: "https://www.tiktok.com/@eglise_dieu_vivant?_r=1&_t=ZS-95jW4UB2lEG",
          description:
            "Vidéos courtes, messages forts et extraits inspirants.",
          icon: FaTiktok,
        },
        {
          name: "WhatsApp",
          href: "https://wa.me/243000000000",
          description:
            "Écrivez-nous directement pour toute information utile.",
          icon: FaWhatsapp,
        },
        {
          name: "YouTube",
          href: "http://www.youtube.com/@DieuVivantTV",
          description:
            "Messages, temps forts et contenus vidéo plus complets.",
          icon: FaYoutube,
        },
      ].map((platform) => {
        const Icon = platform.icon;

        return (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-[2rem] border border-slate-200 bg-white p-9 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]"
          >
            <div className="mb-8 flex h-18 w-18 items-center justify-center rounded-[1.25rem] bg-[#065156] text-white">
              <Icon className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-semibold text-slate-950">
              {platform.name}
            </h3>

            <p className="mt-5 text-lg leading-9 text-slate-600">
              {platform.description}
            </p>

            <span className="mt-8 inline-flex items-center text-lg font-semibold text-[#FF5B04] transition group-hover:translate-x-1">
              Ouvrir la plateforme →
            </span>
          </a>
        );
      })}
    </div>
  </div>
</section>

        <section id="contact" className="px-6 pb-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="hero-shadow rounded-[2rem] bg-[var(--primary)] p-8 text-white md:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/70">
                  Contact
                </p>

                <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                 Un pas peut tout changer.
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">
                  Besoin de parler, de prier, d’être orienté 
                  ou simplement de nous rencontrer ?
                   Nous sommes là pour vous accueillir, 
                   vous écouter et marcher avec vous.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={churchInfo.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[var(--accent)] px-7 py-4 font-semibold text-white transition hover:scale-[1.02]"
                  >
                   Nous écrire sur WhatsApp
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                {[
                  { label: "Adresse", value: churchInfo.address },
                  { label: "Téléphone", value: churchInfo.phone },
                  { label: "Email", value: churchInfo.email },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="soft-card rounded-[1.5rem] border border-[#dce6e2] bg-white p-6"
                  >
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-2 break-words text-lg font-semibold text-slate-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}