import Link from "next/link";
import { churchInfo } from "../data/church";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-slate-950/70 px-6 py-4 shadow-2xl backdrop-blur-md">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-white md:text-xl"
        >
          {churchInfo.shortName}
          <span className="text-blue-400">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#accueil"
            className="text-sm font-medium text-slate-200 transition hover:text-white"
          >
            Accueil
          </a>
          <a
            href="#reseaux"
            className="text-sm font-medium text-slate-200 transition hover:text-white"
          >
            Plateformes
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-slate-200 transition hover:text-white"
          >
            Contact
          </a>
        </nav>

        <a
          href={churchInfo.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}