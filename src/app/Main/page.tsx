'use client'

import { Header } from "@/components/Header"


export function MainPage(){

    return(
        <>
        <Header />

        <main className="w-full h-full flex gap-1">
            <div className="w-1/2 h-full">
                asdasdasd
            </div>
            <div className="w-1/2 h-full flex items-center justify-start">
                <div>
                <img src="Graph.svg" alt="" />
                </div>
            </div>
        </main>
        </>
    )
}