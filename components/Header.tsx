"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const desktopLinks = [
  { label: "Calculators", href: "/calculators" },
  { label: "Live Arbitrage", href: "/arbitrage-bets" },
  { label: "Bookmakers", href: "/bookmaker-reviews" },
  { label: "Casinos", href: "/casino-reviews" },
];

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "Calculators", href: "/calculators" },
  { label: "Odds Converter", href: "/calculators/odds-converter" },
  { label: "Fair Probability Calculator", href: "/calculators/fair-probability" },
  { label: "Arbitrage Calculator", href: "/calculators/arbitrage-calculator" },
  { label: "Live Arbitrage Bets", href: "/arbitrage-bets" },
  { label: "Bookmaker Reviews", href: "/bookmaker-reviews" },
  { label: "Casino Reviews", href: "/casino-reviews" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center no-underline"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/headerlogo.png"
            alt="Bet Tools"
            width={155}
            height={42}
            priority
            className="h-auto w-33.75 sm:w-38.75"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {desktopLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-xl font-medium text-slate-700 no-underline transition hover:bg-slate-100 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 md:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
          {mobileLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 no-underline transition hover:bg-slate-100 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="h-1 bg-blue-600" />
    </header>
  );
}