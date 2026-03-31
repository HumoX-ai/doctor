"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const benefits = [
  {
    num: "01",
    title: "Америка формуласи",
    desc: "Ҳар ойда 10 кг вазн ташлашнинг Америка формуласини ўрганасиз.",
  },
  {
    num: "02",
    title: "Натижани сақлаш",
    desc: "Қайта семирмасдан, натижани бир умрга сақлаш усулини билиб оласиз.",
  },
];

export default function VideoOffer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative bg-[#fff7fc] py-20 md:py-28 overflow-hidden"
    >
      <div className="grain-overlay" />

      {/* Top divider */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-[#d94b9b]/30 to-transparent" />

      {/* Big BG text */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <span
          className="font-display font-black text-[20vw] leading-none text-[#d94b9b]/[0.06] whitespace-nowrap"
          style={{ letterSpacing: "-0.05em" }}
        >
          БЕПУЛ
        </span>
      </div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Video mockup card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#fff0f8] to-[#ffe6f4] border border-[#efc2dc] aspect-[4/3] flex items-center justify-center shadow-[0_20px_45px_rgba(188,90,147,0.18)]">
              {/* Animated scan lines */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 4px)",
                }}
              />

              {/* Content */}
              <div className="text-center px-8 z-10">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-full bg-[#f8d0e7] border-2 border-[#e38dbf] flex items-center justify-center mx-auto mb-5 shadow-[0_0_40px_rgba(217,75,155,0.24)]"
                >
                  <svg
                    className="w-8 h-8 text-[#c6408d] translate-x-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
                <p className="text-[#4a2f49] font-display text-xl font-bold mb-1">
                  БЕПУЛ ВИДЕО
                </p>
                <p className="text-[#7d607c] text-sm">Барча сирлар шу видеода очилади</p>
              </div>

              {/* Corner badge */}
              <div className="absolute top-4 right-4 bg-[#d94b9b] text-white text-xs font-black px-2.5 py-1 rounded-lg">
                БЕПУЛ
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d94b9b]/0 via-[#d94b9b] to-[#d94b9b]/0">
                <motion.div
                  className="h-full bg-white/60 w-8"
                  animate={{ x: ["-8%", "108%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[#f4b6d9]/45 blur-2xl pointer-events-none" />
          </motion.div>

          {/* RIGHT — content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-10 bg-[#d94b9b]/40" />
              <span className="text-[#b13f84] text-xs uppercase tracking-[0.2em] font-semibold">
                Видео нима беради
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl text-[#3f2540] leading-tight mb-8"
            >
              Бепул видеони кўриб{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c43f8b] to-[#ef7bbc]">
                қуйидагиларни билиб оласиз
              </span>
            </motion.h2>

            <motion.div
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={{
                show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
              }}
              className="space-y-5 mb-8"
            >
              {benefits.map((b) => (
                <motion.div
                  key={b.num}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="flex gap-5 group"
                >
                  <span className="font-display text-4xl font-black text-[#d94b9b]/30 group-hover:text-[#d94b9b]/55 leading-none transition-colors shrink-0 mt-0.5">
                    {b.num}
                  </span>
                  <div>
                    <h3 className="text-[#3f2540] font-semibold mb-1">✓ {b.title}</h3>
                    <p className="text-[#745774] text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 items-start sm:items-center"
            >
              <a
                href="https://t.me/yourbotname"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-[#d94b9b] hover:bg-[#c43f8b] text-white font-bold text-sm sm:text-base px-7 py-4 rounded-2xl transition-colors duration-300 flex items-center gap-2 shadow-sm"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%", skewX: -15 }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.5 }}
                />
                <svg className="w-4 h-4 relative" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z" />
                </svg>
                <span className="relative">БЕПУЛ ВИДЕОНИ КЎРИШ -&gt;</span>
              </a>
              <p className="text-[#8d6f8a] text-xs">
                Бепул видео. Дарҳол кўриш мумкин.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}