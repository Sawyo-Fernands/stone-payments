import { ButtonComponent } from "../ButtonComponent";
import { InputComponent } from "../InputComponent";
import { LabelComponent } from "../LabelComponent";
import { BiTransfer } from 'react-icons/bi'
export function CurrencyCard() {
  return (
    <div className="absolute top-28 left-0">
      <div className="flex items-center gap-3">
        <div className="flex  gap-1 flex-col">
          <LabelComponent>Dólar</LabelComponent>
          <InputComponent />
        </div>
        <div className="flex  gap-1 flex-col">
          <LabelComponent>Taxa do Estado</LabelComponent>
          <InputComponent />
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
            />
            <span className="text-gray-600 font-medium">Dinheiro</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="tipoCompra"
            />
            <span className="text-gray-600 font-medium">Cartão</span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <ButtonComponent> <BiTransfer size={19} /> Converter</ButtonComponent>
      </div>
    </div>
  );
}
