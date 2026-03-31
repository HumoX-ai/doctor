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
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#fff7fc]">
      <div className="grain-overlay" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 16% 24%, rgba(217,75,155,0.16) 0%, transparent 34%), radial-gradient(circle at 84% 72%, rgba(244,164,209,0.22) 0%, transparent 42%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,75,155,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(217,75,155,0.08) 1px, transparent 1px)",
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
     

          <motion.h1
            variants={fadeUp}
            className="max-w-2xl font-display text-4xl leading-[1.02] tracking-tight text-[#3f2540] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            168 кг -&gt; 89 кг
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#c43f8b] via-[#e564ae] to-[#f39dcb]">
              5 ойда. Дорисиз. Марафонсиз. Диетасиз.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-xl text-base leading-relaxed text-[#6f4e6f] sm:text-lg">
            Қандай қилиб ҳар ой 10 кг вазн ташлаб, қайта семирмасдан, натижани бир умрга сақлаб қолиш мумкин?
            <br />
            <br />
            Сиз учун махсус <strong className="text-[#c43f8b]">БЕПУЛ ВИДЕО</strong> тайёрладим.
            <br />
            <strong className="text-[#4a2f49]">МАНА ШУ БЕПУЛ ВИДЕОДА БАРЧА СИРЛАР ОЧИЛАДИ!</strong>
          </motion.p>

          <motion.div variants={fadeUp} className="grid max-w-xl grid-cols-3 gap-3">
            {[
              { value: "168", label: "Бошланғич кг" },
              { value: "89", label: "Якуний кг" },
              { value: "5", label: "Ой" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[#f0c0dc] bg-white px-3 py-3 text-center shadow-sm"
              >
                <p className="font-display text-3xl leading-none text-[#452a46] sm:text-4xl">{item.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#927090]">{item.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://t.me/yourbotname"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-[#d94b9b] px-7 py-4 text-center text-sm font-bold text-white transition-colors duration-300 hover:bg-[#c43f8b] sm:text-base shadow-sm"
            >
              <motion.span
                className="absolute inset-0 bg-white/25"
                initial={{ x: "-100%", skewX: -15 }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative">БЕПУЛ ВИДЕОНИ КЎРИШ -&gt;</span>
            </a>

            <a
              href="#about"
              className="rounded-2xl border border-[#e7b4d3] bg-white px-7 py-4 text-center text-sm text-[#714f70] transition-all duration-300 hover:border-[#d94b9b] hover:text-[#3f2540] sm:text-base"
            >
              Доктор ҳақида
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#8a6a87]">
            {["Ҳар ойда 10 кг", "Қайта семирмасдан", "Бир умрга натижа"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[#d94b9b]" />
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
            <div className="pointer-events-none absolute -bottom-8 left-1/2 h-52 w-[88%] -translate-x-1/2 rounded-full bg-[#f4b7d9]/50 blur-[72px]" />
            <div className="pointer-events-none absolute inset-0 translate-x-3 -translate-y-3 rounded-4xl border border-[#efb9d8] bg-[#fbe4f1]" />
            <div className="pointer-events-none absolute inset-0 -translate-x-2.5 translate-y-2.5 rounded-4xl border border-[#efc7de]" />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, rotate: -1.5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: cinematicEase }}
              className="relative overflow-hidden rounded-4xl border border-[#efc7de] shadow-[0_20px_45px_rgba(179,80,137,0.22)]"
            >
              <div className="absolute left-0 right-0 top-0 z-20 h-20 bg-linear-to-b from-[#ffffff]/50 to-transparent" />
              <Image
                src="/doctor.png"
                alt="Доктор Тимур Акбаров"
                width={720}
                height={920}
                priority
                className="h-[450px] w-full object-cover object-[center_12%] saturate-[0.93] contrast-[1.06] sm:h-[590px]"
              />
              <div className="absolute inset-0 z-10 bg-linear-to-t from-[#ffffff]/5 via-transparent to-transparent" />
              <div className="hidden lg:block absolute bottom-0 left-0 right-0 z-20 h-32 bg-linear-to-t from-[#fff3f9] via-[#fff3f9]/80 to-transparent" />

             
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4 z-30 hidden rounded-2xl border border-[#f1bfdc] bg-white/90 p-3 backdrop-blur sm:block"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#8d6d8a]">Ҳақиқий натижа</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <p className="font-display text-3xl leading-none text-[#442945]">
                    168 <span className="text-base text-[#8f708d]">кг</span>
                    <span className="mx-2 text-[#d94b9b]">→</span>
                    89 <span className="text-base text-[#8f708d]">кг</span>
                  </p>
                  <p className="rounded-lg border border-[#e8b5d5] bg-[#fbe6f2] px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-[#b53f88]">
                    5 ой назорат
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
          

              <div className="rounded-2xl border border-[#efc3dd] bg-white/95 p-3 backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#947391]">Ҳақиқий натижа</p>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <p className="font-display text-2xl leading-none text-[#442945]">
                    168 <span className="text-sm text-[#8f708d]">кг</span>
                    <span className="mx-1.5 text-[#d94b9b]">→</span>
                    89 <span className="text-sm text-[#8f708d]">кг</span>
                  </p>
                  <p className="rounded-lg border border-[#e8b5d5] bg-[#fbe6f2] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-[#b53f88]">
                    5 ой
                  </p>
                </div>
              </div>
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
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#9c7a97]">Пастга</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-[#e5b6d3] pt-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-[#d94b9b]" />
        </motion.div>
      </motion.div>
    </section>
  );
}