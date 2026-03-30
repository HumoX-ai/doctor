"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

function Countdown() {
  const [time, setTime] = useState({ h: 4, m: 47, s: 23 });

  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 4; m = 59; s = 59; } // loop for demo
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-2 justify-center">
      {[
        { v: pad(time.h), l: "soat" },
        { v: pad(time.m), l: "daqiqa" },
        { v: pad(time.s), l: "soniya" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-amber-400/50 text-2xl font-bold mb-3">:</span>}
          <div className="text-center">
            <motion.div
              key={item.v}
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="text-3xl sm:text-4xl font-display font-black text-white tabular-nums"
            >
              {item.v}
            </motion.div>
            <div className="text-slate-500 text-[10px] uppercase tracking-wider mt-0.5">
              {item.l}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative bg-[#070D1F] py-20 md:py-28 overflow-hidden"
    >
      <div className="grain-overlay" />

      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(218,165,32,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-10 text-center">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="w-1.5 h-1.5 rounded-full bg-red-400"
          />
          Cheklangan vaqt uchun ochiq
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
        >
          Har oyda{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
            10 kg.
          </span>
          <br />
          Qayta semirmasdan.
          <br />
          <span className="text-white/60 text-3xl sm:text-4xl">Bir umrga.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto"
        >
          Hamma narsani sinab ko&#8217;rgan, lekin tibbiy isbotlangan Amerika formulasini
          sinab ko&#8217;rmagan bo&#8217;lsangiz — bu video{" "}
          <strong className="text-amber-300">aynan siz uchun.</strong>
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 mb-8 inline-block"
        >
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">
            Videogacha qolgan vaqt
          </p>
          <Countdown />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.a
            href="https://t.me/yourbotname"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden bg-amber-400 text-gray-900 font-black text-base sm:text-lg px-10 py-5 rounded-2xl transition-colors duration-300 flex items-center gap-3 shadow-[0_0_40px_rgba(251,191,36,0.30)]"
          >
            <motion.span
              className="absolute inset-0 bg-white/25"
              initial={{ x: "-100%", skewX: -20 }}
              whileHover={{ x: "130%" }}
              transition={{ duration: 0.55 }}
            />
            <svg className="w-5 h-5 relative" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z" />
            </svg>
            <span className="relative">Bepul videoni ko&#8217;rish →</span>
          </motion.a>

          <p className="text-slate-600 text-xs">
            Telegram botga qo&#8217;shiling — video darhol yuboriladi
          </p>
        </motion.div>

        {/* PS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left"
        >
          <p className="text-slate-400 text-sm leading-relaxed">
            <strong className="text-slate-300">P.S.</strong> Hamma narsani sinab
            ko&#8217;rgan, lekin tibbiy isbotlangan Amerika formulasini sinab
            ko&#8217;rmagan bo&#8217;lsangiz — bu video aynan siz uchun. Tugmani bosing.{" "}
            <span className="text-amber-400 font-semibold">Hozir.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}