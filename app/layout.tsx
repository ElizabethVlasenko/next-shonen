import type { Metadata } from "next";
import { Kanit, Nunito } from "next/font/google";

import { cookies } from "next/headers";
import ApolloProviderWrapper from "./_components/ApolloProviderWrapper";
import MainFooter from "./_components/footer/MainFooter";
import GuestHeader from "./_components/header/GuestHeader";
import MainHeader from "./_components/header/MainHeader";
import Wrapper from "./_components/Wrapper";
import { DarkModeProvider } from "./_lib/Context/DarkModeContext";
import { SearchProvider } from "./_lib/Context/SearchContext";
import "./globals.css";

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
  title: "Home | NextShōnen",
  description:
    "Discover and track your favorite anime effortlessly with our sleek and modern platform. ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");

  const isLoggedIn = true;

  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${kanit.variable} h-dvh bg-transparent antialiased ${theme?.value === "dark" ? "dark" : ""}`}
      >
        <ApolloProviderWrapper>
          <SearchProvider>
            <DarkModeProvider>
              <div className="grid h-full grid-rows-[1fr_auto]">
                {isLoggedIn ? <MainHeader /> : <GuestHeader />}
                <main className="flex justify-center bg-slate-100 pb-8 pt-28 dark:bg-primary-950">
                  <Wrapper>{children}</Wrapper>
                </main>
                <MainFooter />
              </div>
            </DarkModeProvider>
          </SearchProvider>
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
