"use client";

import { CurrencyCard } from "@/components/CurrencyCard";
import { Header } from "@/components/Header";

export function MainPage() {
  return (
    <div className="w-full h-full p-16 sm:p-5 md:p-10">
      <Header />

      <main className="w-full h-full flex gap-1 relative">
        <div className="w-1/2 h-full">
          <CurrencyCard />
        </div>
        <div className="w-1/2 h-full flex items-center justify-start">
          <div>
            <img src="Graph.svg" alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}
