import { useEffect, useState } from "react";
import { ButtonComponent } from "../ButtonComponent";
import { InputComponent } from "../InputComponent";
import { LabelComponent } from "../LabelComponent";
import { BiTransfer } from 'react-icons/bi'
import { formatPrice } from "@/utils/formatPrice";

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

export function CurrencyCard() {

    const [dadosDolar,setDadosDolar] = useState<CotacaoDolaType>()
    const [valorReal,setValorReal] = useState('')
    const [impostoEstado,setImpostoEstado] = useState('')
    const [tipoConversao,setTipoConversao] = useState('dinheiro')
    const [resultadoFinal,setResultadoFinal] = useState('')

    console.log(resultadoFinal)
    async function returnCotacaoDolar(){

    const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
    const result = await response.json();
    setDadosDolar(result.USDBRL)
    }

    useEffect(()=>{
        returnCotacaoDolar()
    },[])

    function getValueDolarBrl(tipoCompra:string){
        function getValueCartao(){
          const result = Number(valorReal) * 
         ( (Number(dadosDolar?.bid) + ((Number(impostoEstado)/100) * Number(dadosDolar?.bid)) + (0.064 * Number(dadosDolar?.bid))) * Number(dadosDolar?.bid))

         setResultadoFinal(formatPrice(result))
        }
        function getValueDinheiro(){
            const result = Number(valorReal) * 
            (  (Number(dadosDolar?.bid) + ((Number(impostoEstado)/100) * Number(dadosDolar?.bid)) ) 
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

  return (
    <div className="absolute top-28 left-0">
      <div className="flex items-center gap-3">
        <div className="flex  gap-1 flex-col">
          <LabelComponent>Dólar</LabelComponent>
          <InputComponent value={valorReal} onChange={(e)=>setValorReal(e.target.value)} />
        </div>
        <div className="flex  gap-1 flex-col">
          <LabelComponent>Taxa do Estado</LabelComponent>
          <InputComponent value={impostoEstado} onChange={(e)=>setImpostoEstado(e.target.value)} />
        </div>
      </div>
      <div className="mt-5">
        <LabelComponent>Tipo de Compra</LabelComponent>
        <div className="flex items-center gap-5 mt-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              className="form-radio text-green-600 border-green-600 focus:ring-green-600"
              name="tipoCompra"
              checked={tipoConversao == 'dinheiro'}
              value={'dinheiro'}
              onChange={(e)=>setTipoConversao(e.target.value)}
            />
            <span className="text-gray-600 font-medium">Dinheiro</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="tipoCompra"
              checked={tipoConversao == 'cartao'}
              value={'cartao'}
              onChange={(e)=>setTipoConversao(e.target.value)}
            />
            <span className="text-gray-600 font-medium">Cartão</span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <ButtonComponent onClick={()=>getValueDolarBrl(tipoConversao)}> <BiTransfer size={19} /> Converter</ButtonComponent>
      </div>
    </div>
  );
}
