import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "168 кг -> 89 кг | Ҳар ойда 10 кг",
  description:
    "Агар 5-50 кг орасида ортиқча вазнга эга бўлсангиз, бепул видеони кўринг. Ҳар ойда 10 кг вазн ташлаш ва натижани бир умрга сақлаш формуласи.",
  openGraph: {
    title: "168 кг -> 89 кг. 5 ойда. Дорисиз.",
    description: "Ҳар ойда 10 кг. Қайта семирмасдан. Бир умрга.",
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
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
