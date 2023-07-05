import { ReactNode } from "react";

interface LabelComponentProps{
    children:ReactNode
}

export function LabelComponent({children}:LabelComponentProps){
    return <label className="text-gray-600 font-medium">{children}</label>
}