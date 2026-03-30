"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const cinematicEase = [0.22, 1, 0.36, 1] as const;

  const badge = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: cinematicEase },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#070D1F]">
      <div className="grain-overlay" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 16% 24%, rgba(251,191,36,0.14) 0%, transparent 34%), radial-gradient(circle at 84% 72%, rgba(59,130,246,0.12) 0%, transparent 42%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
          maskImage: "linear-gradient(to bottom, black 35%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1450px] grid-cols-1 items-center gap-10 px-5 pb-10 pt-16 md:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pt-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="order-2 flex flex-col gap-5 lg:order-1 lg:gap-6"
        >
          <motion.div variants={badge}>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300" />
              Klinika Format · 2026
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-2xl font-display text-4xl leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Semizlik muammosi
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              tashqi ko&apos;rinish emas,
            </span>
            tibbiy holat.
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            JPEG kadr ortida ham aynan bir haqiqat bor: organizmga qarshi kurash emas,
            organizmni tushunish kerak. Doktor Timur real bemorlar bilan ishlagan
            klinik yondashuvni sodda qilib tushuntiradi.
          </motion.p>

          <motion.div variants={fadeUp} className="grid max-w-xl grid-cols-3 gap-3">
            {[
              { value: "168", label: "Boshlang'ich kg" },
              { value: "89", label: "Yakuniy kg" },
              { value: "5", label: "Oy" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center backdrop-blur-sm"
              >
                <p className="font-display text-3xl leading-none text-white sm:text-4xl">{item.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://t.me/yourbotname"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-amber-400 px-7 py-4 text-center text-sm font-bold text-gray-900 transition-colors duration-300 hover:bg-amber-300 sm:text-base"
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%", skewX: -15 }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative">Bepul videoni ko&apos;rish</span>
            </a>

            <a
              href="#about"
              className="rounded-2xl border border-white/15 px-7 py-4 text-center text-sm text-slate-300 transition-all duration-300 hover:border-white/30 hover:text-white sm:text-base"
            >
              Doktor haqida
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
            {["Harvard Medical School", "7 yillik amaliyot", "1000+ bemor"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-amber-400" />
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY, opacity }}
          className="order-1 flex w-full items-center justify-center pt-6 sm:pt-8 lg:order-2 lg:justify-end lg:pt-0"
        >
          <div className="relative w-[86vw] max-w-sm sm:max-w-md lg:max-w-[34rem]">
            <div className="pointer-events-none absolute -bottom-8 left-1/2 h-52 w-[88%] -translate-x-1/2 rounded-full bg-amber-300/20 blur-[72px]" />
            <div className="pointer-events-none absolute inset-0 translate-x-3 -translate-y-3 rounded-4xl border border-amber-300/25 bg-amber-300/10" />
            <div className="pointer-events-none absolute inset-0 -translate-x-2.5 translate-y-2.5 rounded-4xl border border-white/10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, rotate: -1.5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: cinematicEase }}
              className="relative overflow-hidden rounded-4xl border border-white/15 bg-[#0F1830] shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
            >
              <div className="absolute left-0 right-0 top-0 z-20 h-20 bg-linear-to-b from-[#070D1F]/80 to-transparent" />
              <Image
                src="/doctor.jpeg"
                alt="Doktor Timur Akbarov"
                width={720}
                height={920}
                priority
                className="h-[450px] w-full object-cover object-[center_12%] saturate-[0.93] contrast-[1.06] sm:h-[590px]"
              />
              <div className="absolute inset-0 z-10 bg-linear-to-t from-[#070D1F]/15 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-linear-to-t from-[#070D1F] via-[#070D1F]/75 to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="absolute left-4 top-4 z-30 hidden rounded-xl border border-amber-300/40 bg-[#0B1128]/78 px-3 py-2 backdrop-blur sm:block"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-amber-200/80">Clinical Note</p>
                <p className="font-display text-xl text-white">Obesity Care</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.45 }}
                className="absolute right-4 top-4 z-30 hidden rounded-xl border border-white/15 bg-[#0B1128]/78 px-2.5 py-2 text-right backdrop-blur sm:block"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Harvard</p>
                <p className="text-sm font-semibold text-amber-200">Medical certified</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4 z-30 hidden rounded-2xl border border-white/10 bg-[#0B1128]/78 p-3 backdrop-blur sm:block"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Haqiqiy natija</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <p className="font-display text-3xl leading-none text-white">
                    168 <span className="text-base text-slate-400">kg</span>
                    <span className="mx-2 text-amber-300">→</span>
                    89 <span className="text-base text-slate-400">kg</span>
                  </p>
                  <p className="rounded-lg border border-amber-300/30 bg-amber-300/10 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-amber-200">
                    5 oy nazorat
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.45 }}
              className="mt-3 grid gap-2 sm:hidden"
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-amber-300/35 bg-[#0B1128]/80 px-3 py-2 backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-amber-200/80">Clinical Note</p>
                  <p className="font-display text-lg leading-none text-white">Obesity Care</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-[#0B1128]/80 px-3 py-2 text-right backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Harvard</p>
                  <p className="text-xs font-semibold text-amber-200">Medical certified</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0B1128]/80 p-3 backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Haqiqiy natija</p>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <p className="font-display text-2xl leading-none text-white">
                    168 <span className="text-sm text-slate-400">kg</span>
                    <span className="mx-1.5 text-amber-300">→</span>
                    89 <span className="text-sm text-slate-400">kg</span>
                  </p>
                  <p className="rounded-lg border border-amber-300/30 bg-amber-300/10 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-amber-200">
                    5 oy
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.55 }}
              className="absolute -left-2 top-1/2 z-40 hidden -translate-y-1/2 rounded-xl border border-white/10 bg-[#0B1128]/90 p-3 shadow-xl backdrop-blur sm:block"
            >
              <p className="font-display text-2xl leading-none text-amber-300">7+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-400">yil tajriba</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600">Pastga</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 pt-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-amber-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}