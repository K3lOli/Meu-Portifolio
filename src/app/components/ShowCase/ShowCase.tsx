"use client";

import { Background_3 } from "../background/feed_3";
import { Projects } from "../card/index";

interface Props {
  isDarkMode: boolean | undefined;
}

export function ShowCase({ isDarkMode }: Props) {
  return (
    <div>
      <div>
        <div
          className="flex w-[100vw] justify-center mt-56 lg:mr-[20rem] lg:mr-[10rem] items-center overflow-hidden"
          id="feed3"
        >
          <div className="flex lg:mt-20 leading-none mb-20">
            <div className="flex flex-col items-center">
              <h1
                className={`${isDarkMode ? "text-violet-800" : "text-BlueH"
                  }  text-BlueH lg:text-[5rem] text-[3rem] font-lSpartan font-lg w-min`}
              >
                ShowCase
              </h1>
              <div
                className={`${isDarkMode ? "text-white" : "text-BlueH"
                  }  text-BlueH text-[1.25rem] font-lSpartan font-[500] h-min mt-8`}
              >
                Here are some of my projects.
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[100vw] lg:justify-center justify-start lg:overflow-hidden overflow-x-scroll gap-20 mb-64">
          <Projects />
        </div>
        <Background_3 />
      </div>
    </div>
  );
}
