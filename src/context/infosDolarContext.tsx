'use client'

import { ReactNode, createContext, useState } from "react"

interface dolarContextProps{
    dadosDolar:inforDola;
    setDadosDolar:(value:inforDola) => void;
    tipoConversao:string;
    setTipoConversao:(value:string) => void;
}

type inforDola = {
    code: string,
    codein: string,
    name: string,
    high: string,
    low: string,
    varBid: string,
    pctChange: string,
    bid: string,
    ask: string,
    timestamp: string,
    create_date: string
}

export const DolarContext = createContext({} as dolarContextProps)

interface dolarContextprops{
    children:ReactNode;
}


export function DolarContextProvider({children}:dolarContextprops){
            const [dadosDolar,setDadosDolar] = useState<inforDola>({ } as inforDola)
            const [tipoConversao,setTipoConversao] = useState("dinheiro")

    return (
        <DolarContext.Provider value={{dadosDolar,setDadosDolar,setTipoConversao,tipoConversao}}>
            {children}
        </DolarContext.Provider>
    )
}