import { InputHTMLAttributes } from "react";

interface InputComponentProps extends InputHTMLAttributes<HTMLInputElement>{
    name?:string;
}

export function InputComponent({name,...props}:InputComponentProps){

    return <input name={name} {...props} className="
    p-5 h-12
    text-gray-600
     outline-none
      border border-slate-200
      rounded
      shadow-md ring-1 ring-gray-200 ring-opacity-25
      
      " />
}