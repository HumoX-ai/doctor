"use client";
export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-[#f3c5df] py-10">
      <div className="grain-overlay opacity-50" />
      <div className="relative z-10 max-w-[1450px] mx-auto px-5 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#d94b9b] flex items-center justify-center">
            <span className="text-white font-black text-xs">ДТ</span>
          </div>
          <span className="text-[#845f80] text-sm">Ҳар ойда 10 кг · Қайта семирмасдан · Бир умрга</span>
        </div>
        <p className="text-[#9a7f99] text-xs text-center sm:text-right">
          © 2026 Барча ҳуқуқлар ҳимояланган
        </p>
      </div>
    </footer>
  );
}