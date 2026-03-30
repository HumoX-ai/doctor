"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { useInView } from "motion/react";

const questions = [
  {
    q: "Hozir semizlik sizga qanchalik xalaqit beryapti?",
    opts: [
      { icon: "😔", label: "Har kuni — kiyim, oyna, nafas" },
      { icon: "😟", label: "Tez-tez — bayram, foto, ishlash" },
      { icon: "🙁", label: "Ba'zida — charchoq, og'riq" },
    ],
  },
  {
    q: "Oldin nima sinab ko'rdingiz?",
    opts: [
      { icon: "🥗", label: "Parhez / kaloriya hisoblash" },
      { icon: "🏃", label: "Sport / marafon" },
      { icon: "💊", label: "Choy / dorilar / ilovalar" },
    ],
  },
  {
    q: "Eng muhim maqsadingiz nima?",
    opts: [
      { icon: "❤️", label: "Sog'liq va uzoq umr" },
      { icon: "✨", label: "Ko'rinish va o'ziga ishonch" },
      { icon: "⚡", label: "Energiya va faollik" },
    ],
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  function pick(idx: number) {
    const next = [...answers, idx];
    setAnswers(next);
    if (step < questions.length - 1) {
      setTimeout(() => setStep((s) => s + 1), 300);
    } else {
      setTimeout(() => setDone(true), 300);
    }
  }

  return (
    <section ref={ref} className="relative bg-[#060B1A] py-20 md:py-28 overflow-hidden">
      <div className="grain-overlay" />

      {/* decorative circle */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-400/5 blur-[80px]"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-amber-400/10 border border-amber-400/25 text-amber-400 text-xs uppercase tracking-[0.2em] px-3 py-1.5 rounded-full font-semibold mb-4">
            3 ta savol · 30 soniya
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-white leading-tight">
            Sizning holatni{" "}
            <span className="text-amber-400">aniqlaymiz</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Natija darhol — hech qanday ro&#8217;yxatdan o&#8217;tish kerak emas
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 sm:p-8 backdrop-blur-sm"
        >
          {/* Progress */}
          <div className="flex items-center gap-3 mb-8">
            {questions.map((_, i) => (
              <div key={i} className="flex-1 h-1 rounded-full overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-amber-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: i < step ? "100%" : i === step && !done ? "100%" : done ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <p className="text-slate-400 text-xs uppercase tracking-widest mb-3">
                  Savol {step + 1} / {questions.length}
                </p>
                <h3 className="text-white text-xl sm:text-2xl font-semibold mb-6 leading-snug">
                  {questions[step].q}
                </h3>
                <div className="space-y-3">
                  {questions[step].opts.map((opt, i) => (
                    <motion.button
                      key={i}
                      onClick={() => pick(i)}
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      className="w-full text-left flex items-center gap-4 bg-white/[0.04] hover:bg-amber-400/10 border border-white/[0.08] hover:border-amber-400/30 rounded-2xl px-5 py-4 transition-all duration-200 group"
                    >
                      <span className="text-2xl shrink-0">{opt.icon}</span>
                      <span className="text-slate-200 group-hover:text-white text-sm sm:text-base font-medium transition-colors">
                        {opt.label}
                      </span>
                      <span className="ml-auto text-amber-400/0 group-hover:text-amber-400/60 transition-colors">
                        →
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center py-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                  className="w-20 h-20 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-4xl mx-auto mb-6"
                >
                  ✅
                </motion.div>
                <h3 className="text-white text-2xl font-display font-bold mb-3">
                  Tahlil tayyor!
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-8">
                  Sizning holatga to&#8217;g&#8217;ri keluvchi{" "}
                  <strong className="text-amber-400">Amerika tibbiy formulasi</strong> bepul
                  videoda batafsil tushuntirilgan.
                </p>
                <a
                  href="https://t.me/yourbotname"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-8 py-4 rounded-2xl transition-colors text-sm sm:text-base"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z" />
                  </svg>
                  Bepul videoni ko&#8217;rish
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}