"use client";

import { Header } from "@/components/Header";

export function MainPage() {
  return (
    <div className="w-full h-full p-16">
      <Header />

      <main className="w-full h-full flex gap-1">
        <div className="w-1/2 h-full"></div>
        <div className="w-1/2 h-full flex items-center justify-start">
          <div>
            <img src="Graph.svg" alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}
