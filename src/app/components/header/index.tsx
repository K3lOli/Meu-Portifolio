import { Item } from './item/index'

interface Props{
  isDarkMode: boolean;
}

export function Header({ isDarkMode }: Props) {
    return (
      <div>
      <header className={`flex justify-between w-1/2 pl-10 pr-10 ml-28 mt-10 font-lSpartan text-7 box-border h-20 fixed top-0 left-0 ${isDarkMode?"bg-violet-900 bg-opacity-30":"bg-white bg-opacity-30"}   items-center  backdrop-blur-3xl  rounded-full z-20`}>
        <Item isDarkMode={isDarkMode} link='inicio'>HOME</Item>
        <Item isDarkMode={isDarkMode} link='feed2'>ABOUT ME</Item>
        <Item isDarkMode={isDarkMode} link='feed3'>SHOWCASE</Item>
        {/* <Item isDarkMode={isDarkMode} link='#feed1'>CONTACT ME</Item> */}
      </header>
      </div>
    )
  }