import type { Metadata } from "next";
import { Kanit, Nunito } from "next/font/google";

import "../globals.css";
import MainHeader from "../_components/header/MainHeader";
import Wrapper from "../_components/Wrapper";
import MainFooter from "../_components/footer/MainFooter";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "NextShōnen: Track, Discover, Share Anime & Manga",
  description:
    "Discover and track your favorite anime effortlessly with our sleek and modern platform. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${kanit.variable} antialiased bg-transparent h-dvh `}
      >
        <div className=" grid grid-rows-[1fr_auto] h-full">
          <MainHeader />
          <main className="pt-28 bg-slate-50 dark:bg-primary-950 pb-8 flex justify-center">
            <Wrapper>{children}</Wrapper>
          </main>
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
