"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const credentials = [
  {
    icon: "🎓",
    label: "Toshkent Tibbiyot Akademiyasi",
    sub: "Bakalavr va magistr",
  },
  {
    icon: "🏥",
    label: "AQSh — klinik rezidentura",
    sub: "Klinik amaliyot",
  },
  {
    icon: "🏛",
    label: "Harvard Medical School",
    sub: "Semizlikni davolash sertifikati",
    highlight: true,
  },
  {
    icon: "👨‍⚕️",
    label: "Shimoliy Karolina, AQSh",
    sub: "Oilaviy doktor — 7 yillik amaliyot",
  },
];

export default function Doctor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#060B1A] py-20 md:py-28 overflow-hidden"
    >
      <div className="grain-overlay" />

      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 w-64 h-64 rounded-full bg-amber-400/5 blur-[80px]"
      />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-10 bg-amber-400/40" />
              <span className="text-amber-400 text-xs uppercase tracking-[0.2em] font-semibold">
                Kim u?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4"
            >
              Doktor{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                Timur
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-slate-400 text-sm leading-relaxed mb-2"
            >
              AQShda oilaviy doktor · Semizlikni davolash mutaxassisi
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-slate-300 text-base leading-relaxed mb-8"
            >
              Men diетolog emasman. &#8220;O&#8217;zim ozdim — boshqalarga
              o&#8217;rgataman&#8221; degan bloger ham emasman.
              <br />
              <br />
              Men{" "}
              <strong className="text-white">
                Xalqaro Harvard Medical School&#8217;da
              </strong>{" "}
              semizlikni davolash bo&#8217;yicha sertifikat olgan{" "}
              <em className="text-amber-300">ilk o&#8217;zbek shifokorman.</em>
            </motion.p>

            {/* Credentials list */}
            <motion.div
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={{
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
              }}
              className="space-y-3"
            >
              {credentials.map((c, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className={`flex items-center gap-3.5 rounded-xl px-4 py-3 border transition-colors ${
                    c.highlight
                      ? "bg-amber-400/10 border-amber-400/30"
                      : "bg-white/[0.03] border-white/[0.07]"
                  }`}
                >
                  <span className="text-xl shrink-0">{c.icon}</span>
                  <div>
                    <p
                      className={`font-semibold text-sm ${
                        c.highlight ? "text-amber-300" : "text-white"
                      }`}
                    >
                      {c.label}
                    </p>
                    <p className="text-slate-500 text-xs">{c.sub}</p>
                  </div>
                  {c.highlight && (
                    <span className="ml-auto text-amber-400/60 text-xs font-bold uppercase tracking-wider">
                      ★
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-6 left-1/2 h-48 w-[88%] -translate-x-1/2 rounded-full bg-amber-400/20 blur-[72px]"
            />

            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="pointer-events-none absolute inset-0 translate-x-3 -translate-y-3 rounded-[1.75rem] border border-amber-300/25 bg-amber-300/10" />
              <div className="pointer-events-none absolute inset-0 -translate-x-2.5 translate-y-2.5 rounded-[1.75rem] border border-white/10" />

              {/* Decorative corner brackets */}
              {[
                "top-0 left-0 border-t border-l",
                "top-0 right-0 border-t border-r",
                "bottom-0 left-0 border-b border-l",
                "bottom-0 right-0 border-b border-r",
              ].map((cls, i) => (
                <div
                  key={i}
                  className={`absolute w-6 h-6 border-amber-400/50 ${cls} rounded-sm`}
                />
              ))}

              <Image
                src="/doctor2.jpeg"
                alt="Doktor Timur Akbarov, M.D."
                width={560}
                height={700}
                className="relative z-10 h-[460px] w-full object-cover object-[center_14%] rounded-[1.75rem] border border-white/10 shadow-2xl sm:h-[560px]"
                style={{ filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.5))" }}
              />

              <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-20 rounded-t-[1.75rem] bg-linear-to-b from-[#060B1A]/70 to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-28 rounded-b-[1.75rem] bg-linear-to-t from-[#060B1A] via-[#060B1A]/70 to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.65, duration: 0.45 }}
                className="absolute left-4 top-4 z-30 rounded-xl border border-white/10 bg-[#0F1830]/80 px-3 py-2 backdrop-blur"
              >
                <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400">AQSh amaliyoti</p>
                <p className="text-sm font-semibold text-white">Oilaviy doktor · Semizlik mutaxassisi</p>
              </motion.div>

              {/* Floating Harvard label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-amber-400/30 bg-[#0F1830] px-5 py-2.5 shadow-xl"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
                  <span className="text-white text-xs font-semibold">
                  Harvard Medical School — Sertifikat
                  </span>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}