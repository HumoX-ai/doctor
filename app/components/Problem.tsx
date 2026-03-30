"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const failures = [
  { icon: "🥗", text: "Parhez qildingiz — ozdingiz, keyin qayta semirdingiz" },
  { icon: "🍵", text: "Choy ichdingiz — pul ketdi, vazn ketmadi" },
  { icon: "🏃", text: "Marafonga yozildingiz — bir oylik quruq motivatsiya" },
  { icon: "🏋️", text: "Sport zaliga bordingiz — bir hafta, keyin to'xtadingiz" },
];

const reasons = [
  {
    title: "Mexanizm",
    desc: "Organizmda yog' yig'ilishiga sabab bo'luvchi fiziologik mexanizmlar ishlaydi.",
  },
  {
    title: "Gormonal",
    desc: "Leptin va grelin gormonal muvozanati buzilgan — och qolsangiz ham to'ymaysiz.",
  },
  {
    title: "Metabolik",
    desc: "Qattiq parhez metabolizmni sekinlashtiradi — bu nima uchun qaytar semirish kelib chiqishini tushuntiradi.",
  },
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
    <section ref={ref} className="relative bg-[#070D1F] py-20 md:py-28 overflow-hidden">
      <div className="grain-overlay" />

      {/* Accent line */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 md:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px flex-1 max-w-[48px] bg-amber-400/40" />
          <span className="text-amber-400 text-xs uppercase tracking-[0.2em] font-semibold">
            Tanish holatmi?
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-8"
            >
              Nima uchun{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                natija yo&#8217;q?
              </span>
            </motion.h2>

            <motion.div
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={{
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
              }}
              className="space-y-3"
            >
              {failures.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-red-400/20 rounded-2xl px-4 py-3.5 transition-all duration-300"
                >
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <p className="text-slate-300 text-sm leading-snug">
                    <span className="text-red-400/70 font-bold mr-2">✗</span>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-amber-400/10 to-amber-600/5 border border-amber-400/20"
            >
              <p className="text-amber-200/90 text-sm leading-relaxed">
                <span className="block text-amber-400 font-bold text-base mb-1">
                  Muhim haqiqat:
                </span>
                Siz dangasa emassiz. Irodangiz yetarli. Shunchaki{" "}
                <strong>to&#8217;g&#8217;ri tibbiy yondashuv</strong> yo&#8217;q edi.
              </p>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8"
            >
              Semizlik — bu irodaning muammosi emas. Bu{" "}
              <strong className="text-white">tibbiy kasallik</strong> bo&#8217;lib, uning
              aniq fiziologik sabablari bor.
            </motion.p>

            <motion.div
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={{
                show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
              }}
              className="space-y-4"
            >
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-px before:h-[calc(100%-8px)] before:bg-amber-400/30"
                >
                  <span className="absolute left-0 top-2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                  <h3 className="text-white font-semibold text-sm mb-1">{r.title} sababi</h3>
                  <p className="text-slate-400 text-sm leading-snug">{r.desc}</p>
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
                className="absolute -top-4 -left-2 text-7xl font-serif text-amber-400/10 leading-none select-none"
              >
                &#8220;
              </div>
              <p className="text-2xl sm:text-3xl font-display text-white leading-snug pl-4">
                O&#8217;zingizni ayblashni{" "}
                <span className="text-amber-400">to&#8217;xtating.</span>
              </p>
              <footer className="mt-3 pl-4 text-slate-500 text-sm">— Doktor Timur Akbarov</footer>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}