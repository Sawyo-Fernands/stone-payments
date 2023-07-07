"use client";

import { ButtonComponent } from "@/components/ButtonComponent";
import { InputComponent } from "@/components/InputComponent";
import { LabelComponent } from "@/components/LabelComponent";
import { useListResultDolar } from "@/hooks/useListResultDolar";
import { BiTransfer } from "react-icons/bi";

interface FormProps {
  valorReal: string;
  impostoEstado: string;
  tipoConversao: string;
  setValorReal: (value: string) => void;
  setImpostoEstado: (value: string) => void;
  setTipoConversao: (value: string) => void;
  getValueDolarBrl: (tipoCompra: string) => void;
}

export function Form({
  valorReal,
  impostoEstado,
  tipoConversao,
  setTipoConversao,
  getValueDolarBrl,
  setImpostoEstado,
  setValorReal,
}: FormProps) {
  return (
    <>
      <div className="flex items-center gap-3 sm:flex-col sm:gap-3">
        <div className="flex  gap-1 flex-col">
          <LabelComponent>Dólar</LabelComponent>
          <InputComponent
            value={valorReal}
            onChange={(e) => setValorReal(e.target.value)}
          />
        </div>
        <div className="flex  gap-1 flex-col">
          <LabelComponent>Taxa do Estado</LabelComponent>
          <InputComponent
            value={impostoEstado}
            onChange={(e) => setImpostoEstado(e.target.value)}
          />
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
              checked={tipoConversao == "dinheiro"}
              value={"dinheiro"}
              onChange={(e) => setTipoConversao(e.target.value)}
            />
            <span className="text-gray-600 font-medium">Dinheiro</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="tipoCompra"
              checked={tipoConversao == "cartao"}
              value={"cartao"}
              onChange={(e) => setTipoConversao(e.target.value)}
            />
            <span className="text-gray-600 font-medium">Cartão</span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <ButtonComponent onClick={() => getValueDolarBrl(tipoConversao)}>
          {" "}
          <BiTransfer size={19} /> Converter
        </ButtonComponent>
      </div>
    </>
  );
}
