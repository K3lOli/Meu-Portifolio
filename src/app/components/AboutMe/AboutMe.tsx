"use client";

import Image from "next/image";
import aboutMe from "../../assets/aboutMe.svg";
import react from "../../assets/skill-icons_react-dark.svg";
import node from "../../assets/Group 13.svg";
import python from "../../assets/devicon_python.svg";
import figma from "../../assets/logos_figma.svg";
import { Background_2 } from "../background/feed_2";
import { Background_2_mobile } from '../background/feed_2/mobile/index';

interface Props {
  isDarkMode: boolean | undefined;
}

export function AboutMe({ isDarkMode }: Props) {
  return (
    <div>
      <div>
        <div
          className="flex flex-col lg:flex-row lg:justify-between mt-60 lg:mr-[20rem] lg:mr-[10rem] items-center overflow-hidden"
          id="feed2"
        >
          <div className="flex justify-between items-center lg:ml-28 min-[1600px]:mt-20 min-[1080px]:mt-0 leading-none">
            <div className="flex flex-col lg:gap-10 items-center justify-center">
              <h1
                className={`${isDarkMode ? "text-violet-800" : "text-BlueH"
                  } lg:text-[5rem] text-[2rem] font-lSpartan font-lg h-min lg:text-[3rem] w-fit`}
              >
                Aboute Me
              </h1>
              <p
                className={`${isDarkMode ? "text-white" : "text-BlueH"
                  } text-[1rem] lg:text-[1.25rem] text-justify mt-8 font-lSpartan mx-7 font-[500] h-min lg:w-[40rem]`}
              >
                Hello! I&apos;m an Electrical Engineering student with a
                lifelong passion for programming, a passion that began in high
                school and evolved into a promising career. My current
                specialization is in software development, and my favorite
                terrain is the JavaScript environment. With solid experience
                in React and Node.js, I have worked on creating innovative and
                functional web applications. This intersection between
                electrical engineering and programming offers exciting
                opportunities for innovation, and I look forward to continuing
                to explore the boundaries of this incredible interconnection.
                If you share this enthusiasm or want to exchange ideas,
                I&apos;m always open to connections and new learning
                adventures in this ever-evolving world.
              </p>
            </div>
          </div>
          <Image src={aboutMe} alt="Picture of the author" className="lg:flex hidden mt-0 w-80 mr-40" />
        </div>
        <div
          className={`${isDarkMode ? "text-violet-400" : "text-BlueH"
            }  w-[100vw] flex justify-center font-lSpartan text-[2rem] mt-14`}
        >
          Tecnologies I use
        </div>
        <div className="flex lg:w-[100vw] justify-center">
          <div className="
                flex items-center w-auto lg:w-11/12 h-auto justify-center lg:gap-40 gap-5 bg-green-500 
                bg-opacity-20 backdrop-blur-2xl rounded rounded-full text-white p-6 mt-10"
          >
            <Image
              src={react}
              alt="Instagram Logo"
              className="w-24 transition-all duration-300 hover:scale-125"
            />
            <div className="flex lg:flex-row flex-col gap-40 items-center">
              <Image
                src={node}
                alt="Instagram Logo"
                className="w-24 lg:mb-0 mb-10 transition-all duration-300 hover:scale-125"
              />
              <Image
                src={python}
                alt="Instagram Logo"
                className="w-24 lg:mt-0 mt-10 transition-all duration-300 hover:scale-125"
              />
            </div>
            <Image
              src={figma}
              alt="Instagram Logo"
              className="w-16 transition-all duration-300 hover:scale-125"
            />
          </div>
        </div>
        <Background_2 />
      </div>
    </div>
  );
}
