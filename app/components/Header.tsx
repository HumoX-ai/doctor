"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#070D1F]/90 backdrop-blur-md border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1450px] mx-auto px-5 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center">
            <span className="text-gray-900 font-black text-sm">DT</span>
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">Doktor Timur</p>
            <p className="text-slate-500 text-[10px] leading-tight">AQSh · Harvard · M.D.</p>
          </div>
        </div>

        <a
          href="https://t.me/yourbotname"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-amber-400 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-300"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z" />
          </svg>
          Bepul videoni ko&#8217;rish
        </a>

        <a
          href="https://t.me/yourbotname"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden bg-amber-400 text-gray-900 text-xs font-bold px-4 py-2.5 rounded-xl"
        >
          Bepul video
        </a>
      </div>
    </motion.header>
  );
}