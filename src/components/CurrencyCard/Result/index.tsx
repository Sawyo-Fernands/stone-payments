import { DolarContext } from "@/context/infosDolarContext";
import { useContext } from "react";


interface Resultprops{
    resetResult:()=>void;
    resultadoFinal:string;
    impostoEstado:string;
    valorReal:string;
}
export function Result({resultadoFinal,resetResult,impostoEstado,valorReal}:Resultprops){

    const {tipoConversao,dadosDolar} = useContext(DolarContext)
    const valorDolar = Number(dadosDolar?.bid).toFixed(2)
    return (
        <div className="flex  gap-10 flex-col sm:gap-3">
            <div>
                <button className="
                shadow-lg ring-1
                 ring-gray-200 ring-opacity-25
                  text-gray-600 font-medium 
                  px-4 py-2 rounded
                  "
                  onClick={resetResult}
                  >Voltar</button>
            </div>
            <div className="flex  gap-5 flex-col sm:gap-3">
                <span className="font-bold text-gray-600 text-md">O resultado do calculo é </span>

                <span className="font-bold text-green-600 text-6xl">{resultadoFinal}</span>

              <div className="flex  gap-1 flex-col mt-3 sm:gap-3">
              <span className="font-bold text-gray-400 text-sm">
                Compra no {tipoConversao} e taxa de {impostoEstado}%
                </span>
                <span className="font-bold text-gray-400 text-sm">
                Cotação do dólar: ${valorReal} = R$ ${valorDolar?.replace(".",',')}
                </span>
              </div>

            </div>
        </div>
    )
}