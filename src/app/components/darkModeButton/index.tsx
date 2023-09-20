"use client";

import { SetStateAction } from "react";
import { useDarkMode } from "../darkMode";

interface Props{
  isDarkMode: boolean,
  setIsDarkMode: React.Dispatch<SetStateAction<boolean>>;
}

export function DarkModeButton({isDarkMode, setIsDarkMode }: Props) {
  return (
    <div>
      <div id="darkModeButton" className="flex justify-end right-7 top-10 z-10 fixed">
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={isDarkMode}
              onChange={() => {
                setIsDarkMode(!isDarkMode);
              }}
            />
            <div className="w-10 h-6 bg-gray-300 rounded-full shadow-inner"></div>
            <div
              className={`dot absolute left-1 top-1 transition-transform duration-300 ease-in-out ${
                isDarkMode ? "translate-x-4" : "translate-x-0"
              }`}
            >
              <div
                className={`w-4 h-4 ${
                  isDarkMode ? "bg-black" : "bg-white"
                } rounded-full shadow-md`}
              ></div>
            </div>
          </div>
          <span
            className={`ml-3 text-${isDarkMode ? "white" : "black"}`}
          ></span>
        </label>
      </div>
    </div>
  );
}
