

interface Resultprops{
    resetResult:()=>void;
    resultadoFinal:string;
}
export function Result({resultadoFinal,resetResult}:Resultprops){

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
                Compra no dinheiro e taxa de 5.3%
                </span>
                <span className="font-bold text-gray-400 text-sm">
                Cotação do dólar: $1,00 = R$ 5,20
                </span>
              </div>

            </div>
        </div>
    )
}