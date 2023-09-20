'use client'

import { Header } from "./components/header/index";
import { Body } from "./components/feed_1";
import { Body_2 } from "./components/feed_2";
import { Body_3 } from './components/feed3/index';
import { DarkModeButton } from "./components/darkModeButton";
import { useEffect, useState } from "react";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <body className={`h-auto w-auto ${
      isDarkMode
        ? "bg-black"
        : "bg-gradient-to-r from-[#9FB4E9] to-[#C6D5FC]]"
    }`}>
        <DarkModeButton isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <Header isDarkMode={isDarkMode}/>
        <Body isDarkMode={isDarkMode}/>
        <Body_2 isDarkMode={isDarkMode}/>
        <Body_3 isDarkMode={isDarkMode}/>
      </body>
  );
}
