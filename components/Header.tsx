"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#e8e8e8] text-[#111827] border-b-8 border-b-[#2563eb]">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="text-xl font-bold leading-none text-[#111827] no-underline"
        >
          Bet Tools
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded border border-gray-300 bg-white text-[#111827] md:hidden"
        >
          <span className="text-xl leading-none">☰</span>
        </button>

        <nav className="hidden md:flex md:flex-wrap md:items-center md:justify-end md:gap-4">
          <Link href="/" className="text-[#111827] no-underline hover:underline">
            Home
          </Link>

          <Link
            href="/calculators"
            className="text-[#111827] no-underline hover:underline"
          >
            Calculators
          </Link>

          <Link
            href="/compare-bookmakers"
            className="text-[#111827] no-underline hover:underline"
          >
            Compare Bookmakers
          </Link>
          <Link
            href="/arbitrage-bets"
            className="text-[#111827] no-underline hover:underline"
          >
            Live Arbitrage Bets
          </Link>
        </nav>
      </div>

      {menuOpen && (
        <nav className="border-t border-gray-300 px-4 pb-4 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 pt-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-[#111827] no-underline hover:underline"
            >
              Home
            </Link>

            <Link
              href="/calculators/odds-converter"
              onClick={() => setMenuOpen(false)}
              className="text-[#111827] no-underline hover:underline"
            >
              Odds Converter
            </Link>

            <Link
              href="/calculators/fair-probability"
              onClick={() => setMenuOpen(false)}
              className="text-[#111827] no-underline hover:underline"
            >
              Fair Probability
            </Link>

            <Link
              href="/calculators/arbitrage-calculator"
              onClick={() => setMenuOpen(false)}
              className="text-[#111827] no-underline hover:underline"
            >
              Arbitrage Calculator
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}