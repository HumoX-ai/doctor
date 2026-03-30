"use client";
export default function Footer() {
  return (
    <footer className="relative bg-[#040810] border-t border-white/[0.05] py-10">
      <div className="grain-overlay opacity-50" />
      <div className="relative z-10 max-w-[1450px] mx-auto px-5 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center">
            <span className="text-gray-900 font-black text-xs">DT</span>
          </div>
          <span className="text-slate-500 text-sm">Doktor Timur · Ozish: Amerika Formulasi</span>
        </div>
        <p className="text-slate-700 text-xs text-center sm:text-right">
          © 2026 Barcha huquqlar himoyalangan
        </p>
      </div>
    </footer>
  );
}