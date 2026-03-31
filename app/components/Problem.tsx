"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const failures = [
  { icon: "🥗", text: "Парҳез қилдингиз — оздингиз, кейин қайта семирдингиз" },
  { icon: "🍵", text: "Чой ичдингиз — пул кетди, вазн кетмади" },
  { icon: "🏃", text: "Марафонга ёзилдингиз — бир ойлик қуруқ мотивация" },
  { icon: "🏋️", text: "Спорт залига бордингиз — бир ҳафта, кейин тўхтадингиз" },
];

const positioning = [
  "Семизлик - иродасизлик эмас. Бу тиббий касаллик.",
  "Қаттиқ парҳезлар, оздирувчи чойлар, марафонлар, нафс билан курашиш - буларнинг ҳеч қайси бири ишламайди!",
  "Сиздаги семизликнинг сабабини тушунинг - ўзингизни айблашни тўхтатинг!",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative bg-[#fff9fd] py-20 md:py-28 overflow-hidden">
      <div className="grain-overlay" />

      {/* Accent line */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-[#d94b9b]/35 to-transparent" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 md:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px flex-1 max-w-[48px] bg-[#d94b9b]/40" />
          <span className="text-[#b13f84] text-xs uppercase tracking-[0.2em] font-semibold">
            Таниш ҳолатми?
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#3f2540] leading-tight mb-8"
            >
              Семизлик ҳақида{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c53f8c] to-[#ef7bbc]">
                тўғри ҳақиқат
              </span>
            </motion.h2>

            <motion.div
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={{
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
              }}
              className="space-y-4"
            >
              {positioning.map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl border border-[#efc2dc] bg-white px-4 py-4 shadow-sm"
                >
                  <p className="text-[#5f4560] text-sm leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-[#ffe4f3] to-[#fff3fa] border border-[#efc2dc]"
            >
              <p className="text-[#6a4b68] text-sm leading-relaxed">
                <span className="block text-[#b13f84] font-bold text-base mb-1">Позициям:</span>
                Семизликни тўғри тиббий ёндашув билан даволаш мумкин.
              </p>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[#5f4560] text-base sm:text-lg leading-relaxed mb-8"
            >
              Кўпчилик айнан шу хатоларни такрорлайди ва натижа йўқ деб ўйлайди.
            </motion.p>

            <motion.div
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={{
                show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
              }}
              className="space-y-4"
            >
              {failures.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group flex items-center gap-4 bg-white hover:bg-[#fff1f8] border border-[#efc2dc] hover:border-[#df7ab5] rounded-2xl px-4 py-3.5 transition-all duration-300 shadow-sm"
                >
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <p className="text-[#5f4560] text-sm leading-snug">
                    <span className="text-[#db5e9f] font-bold mr-2">✗</span>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Big quote */}
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-10 relative"
            >
              <div
                aria-hidden
                className="absolute -top-4 -left-2 text-7xl font-serif text-[#d94b9b]/15 leading-none select-none"
              >
                &#8220;
              </div>
              <p className="text-2xl sm:text-3xl font-display text-[#3f2540] leading-snug pl-4">
                Ўзингизни айблашни <span className="text-[#c6418d]">тўхтатинг.</span>
              </p>
              <footer className="mt-3 pl-4 text-[#8f708d] text-sm">- Доктор Тимур</footer>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}