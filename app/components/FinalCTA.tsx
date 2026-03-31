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
        if (s < 0) {
          s = 59;
          m--;
        }
        if (m < 0) {
          m = 59;
          h--;
        }
        if (h < 0) {
          h = 4;
          m = 59;
          s = 59;
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-2 justify-center">
      {[
        { v: pad(time.h), l: "соат" },
        { v: pad(time.m), l: "дақиқа" },
        { v: pad(time.s), l: "сония" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-[#d94b9b]/60 text-2xl font-bold mb-3">:</span>}
          <div className="text-center">
            <motion.div
              key={item.v}
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="text-3xl sm:text-4xl font-display font-black text-[#442945] tabular-nums"
            >
              {item.v}
            </motion.div>
            <div className="text-[#8f708d] text-[10px] uppercase tracking-wider mt-0.5">{item.l}</div>
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
    <section ref={ref} className="relative bg-[#fff7fc] py-20 md:py-28 overflow-hidden">
      <div className="grain-overlay" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(217,75,155,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-[#d94b9b]/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#ffe4f3] border border-[#efb5d8] text-[#b13f84] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="w-1.5 h-1.5 rounded-full bg-[#d94b9b]"
          />
          ЛЕКИН ШОШИЛИНГ!
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#3f2540] leading-tight mb-6"
        >
          Ҳар ойда <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c43f8b] to-[#ef7bbc]">10 кг.</span>
          <br />
          Қайта семирмасдан.
          <br />
          <span className="text-[#8f708d] text-3xl sm:text-4xl">Бир умрга.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[#6e4f6d] text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto"
        >
          Видео чекланган вақт учун очиқ.
          <br />
          Ҳозир кўрмасангиз - эртага эсдан чиқади.
          <br />
          Яна бир йил ўтса - муаммо кучаяди.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white border border-[#efc2dc] rounded-2xl p-6 mb-8 inline-block shadow-sm"
        >
          <p className="text-[#8f708d] text-xs uppercase tracking-widest mb-4">Очиқ қолган вақт</p>
          <Countdown />
        </motion.div>

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
            className="group relative overflow-hidden bg-[#d94b9b] text-white font-black text-base sm:text-lg px-10 py-5 rounded-2xl transition-colors duration-300 flex items-center gap-3 shadow-[0_0_40px_rgba(217,75,155,0.32)]"
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
            <span className="relative">БЕПУЛ ВИДЕОНИ КЎРИНГ - ФОРМУЛАНИ ЎРГАНИНГ</span>
          </motion.a>

          <p className="text-[#8f708d] text-xs">Ҳар ойда 10 кг. Қайта семирмасдан. Бир умрга.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 p-5 rounded-2xl bg-white border border-[#efc2dc] text-left shadow-sm"
        >
          <p className="text-[#6e4f6d] text-sm leading-relaxed">
            <strong className="text-[#4a2f49]">П.С.</strong> Ҳамма нарсани синаб кўрган, лекин тиббий
            исботланган Америка формуласини синаб кўрмаган бўлсангиз - бу видео айнан сиз учун.
            Тугмани босинг. <span className="text-[#c43f8b] font-semibold">Ҳозир.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}