import {ReactNode} from 'react'

interface Props{
    children: ReactNode,
    link: string,
    isDarkMode?: boolean
}

export function Item({children, link, isDarkMode}: Props){
    return(
        <a href={`#${link}`} className={`hover:border-b-4 ${isDarkMode?"text-white border-white":"text-BlueH border-BlueH"}  h-min font-lSpartan font-lg text-[1.3rem]`}>{children}</a>
    )
}