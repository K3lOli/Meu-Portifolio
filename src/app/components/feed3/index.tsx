"use client";

import { Background_3 } from '../background/feed_3';
import { Card } from './../card/index';

interface Props {
  isDarkMode: boolean | undefined;
}

export function Body_3({isDarkMode}:Props) {
  return (
    <div>
      <div
        className="flex w-[99vw] justify-center mt-56 min-[1600px]:mr-[20rem] min-[1080px]:mr-[10rem] items-center"
        id="feed3"
      >
        <div className="flex min-[1600px]:mt-20 min-[1080px]:mt-0 leading-none mb-20"> 
          <div className="flex flex-col items-center">
            <h1 className={`${isDarkMode?"text-violet-800":"text-BlueH"}  text-BlueH min-[1600px]:text-[5rem] font-lSpartan font-lg min-[1080px]:text-[3rem] w-min`}>
              ShowCase
            </h1>
            <p className={`${isDarkMode?"text-white":"text-BlueH"}  text-BlueH text-[1.25rem] font-lSpartan font-[500] h-min mt-8`}>
              Here are some of my projects.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-[99vw] justify-center gap-20">
        <Card />
      </div>
      <Background_3 />
    </div>
  );
}
