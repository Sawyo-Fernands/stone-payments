import { useEffect, useState } from "react";
import { ButtonComponent } from "../ButtonComponent";
import { InputComponent } from "../InputComponent";
import { LabelComponent } from "../LabelComponent";
import { BiTransfer } from 'react-icons/bi'
import { formatPrice } from "@/utils/formatPrice";
import { useListResultDolar } from "@/hooks/useListResultDolar";

export function CurrencyCard() {

    const [valorReal,setValorReal] = useState('')
    const [impostoEstado,setImpostoEstado] = useState('')
    const [tipoConversao,setTipoConversao] = useState('dinheiro')

    const { getValueDolarBrl, resultadoFinal, resetResult } = useListResultDolar({valorReal,impostoEstado})
  return (
    <div className="absolute top-28 left-0">
      <div className="flex items-center gap-3 sm:flex-col sm:gap-3">
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
