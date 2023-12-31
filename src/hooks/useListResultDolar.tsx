'use client'

import { DolarContext } from "@/context/infosDolarContext";
import { formatPrice } from "@/utils/formatPrice";
import { useContext, useEffect, useState } from "react";

export interface CotacaoDolaType {
    code:        string;
    codein:      string;
    name:        string;
    high:        string;
    low:         string;
    varBid:      string;
    pctChange:   string;
    bid:         string;
    ask:         string;
    timestamp:   string;
    create_date: Date;
}

interface useListResultDolarProps {
    valorReal:string;
    impostoEstado:string ;
}

export function useListResultDolar({valorReal,impostoEstado}:useListResultDolarProps) {

    const {dadosDolar,setDadosDolar} = useContext(DolarContext)
    const [resultadoFinal,setResultadoFinal] = useState('')

    async function returnCotacaoDolar(){
        const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
        const result = await response.json();
        console.log(result)
        setDadosDolar(result.USDBRL)
        }

        function getValueDolarBrl(tipoCompra:string){
            function getValueCartao(){
              const result = Number(valorReal.replace(",",'.')) * 
             ( (Number(dadosDolar?.bid) + ((Number(impostoEstado.replace(",",'.'))/100) * Number(dadosDolar?.bid)) + (0.064 * Number(dadosDolar?.bid))) * Number(dadosDolar?.bid))
    
             setResultadoFinal(formatPrice(result))
            }
            function getValueDinheiro(){
                const result = Number(valorReal.replace(",",'.')) * 
                (  (Number(dadosDolar?.bid) + ((Number(impostoEstado.replace(",",'.'))/100) * Number(dadosDolar?.bid)) ) 
                * (Number(dadosDolar?.bid) + (0.011 * Number(dadosDolar?.bid)) ) )
    
                setResultadoFinal(formatPrice(result))
            }
    
            const objOptions : {[key:string] : ()=>void}= {
                'dinheiro' : () =>getValueDinheiro(),
                'cartao' : () =>getValueCartao()
            }
            const execFunction = objOptions[tipoCompra]
    
            execFunction()
        }
        function resetResult(){
            setResultadoFinal('')
        }

    useEffect(()=>{
        returnCotacaoDolar()
    },[])


    return { getValueDolarBrl, resultadoFinal, resetResult, dadosDolar }
}




