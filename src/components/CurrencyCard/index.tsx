'use client'

import { useListResultDolar } from "@/hooks/useListResultDolar"
import { ReactNode, useState } from "react"
import { Form } from "./Form"
import { Result } from "./Result"

export function CurrencyCard() {

  const [valorReal,setValorReal] = useState('')
  const [impostoEstado,setImpostoEstado] = useState('')
  const [tipoConversao,setTipoConversao] = useState('dinheiro')

  const { getValueDolarBrl, resultadoFinal, resetResult } = useListResultDolar({valorReal,impostoEstado})

  const render : {[ key:string ] : ReactNode }= {
    false:<Form 
    getValueDolarBrl={getValueDolarBrl} 
    impostoEstado={impostoEstado} 
    setImpostoEstado={setImpostoEstado}
    setTipoConversao={setTipoConversao}
    setValorReal={setValorReal}
    tipoConversao={tipoConversao}
    valorReal={valorReal}
     />,
     true:<Result resetResult={resetResult} resultadoFinal={resultadoFinal} />
  }
 ''
  return (
    <div className="absolute top-28 left-0 sm:top-14">
        {
          render[String(!!resultadoFinal)] 
        }
    </div>
  );
}
