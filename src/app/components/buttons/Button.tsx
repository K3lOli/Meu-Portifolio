import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"

interface Props{
    children: ReactNode
}


export function Button({children}: Props){
    return(
        <button  className="rounded-2xl pl-7 pr-7 pt-6 pb-6 text-md font-[600] transition-all duration-300 bg-gradient-to-tl via-[#96559B] from-pink-500 to-white bg-size-200 bg-pos-0 hover:bg-pos-100  text-BlueH ease-in delay-50 bg-[#F7F5F6] hover:text-white hover:shadow-2xl hover:shadow-pink-500 ">
            {children}
        </button>
    )
}