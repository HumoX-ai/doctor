import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doktor Timur — Ozish: Amerika Formulasi",
  description:
    "Semizlik — irodasizlik emas. Bu tibbiy kasallik. Harvard Medical School sertifikati bilan Doktor Timur Akbarov, M.D. dan bepul videoni ko'ring.",
  openGraph: {
    title: "Doktor Timur — Ozish: Amerika Formulasi",
    description: "168 kg → 89 kg. 5 oyda. Dori yo'q. Dieta yo'q. Haqiqiy bemor natijasi.",
    images: ["/doctor.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
