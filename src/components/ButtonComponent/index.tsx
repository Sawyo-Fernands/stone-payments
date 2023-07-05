import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
}

export function ButtonComponent({children,...props}:ButtonComponentProps){

    return <button 
    className=" flex items-center gap-2 justify-center 
    border border-green-600 text-white shadow-md font-sharon-sans 
    font-medium text-base rounded-md bg-green-600 w-32 h-10"
     {...props}
     >
        {children}
        </button>
}
