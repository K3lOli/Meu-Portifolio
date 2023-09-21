"use client";

import Image from "next/image";
import perfil from "../../assets/fotoPerfil_5.svg";
import instagram from "../../assets/skill-icons_instagram.svg";
import github from "../../assets/fontisto_github.svg";
import linkedin from "../../assets/devicon_linkedin.svg";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../button";
import { Background } from "../background/feed_1";

interface Props {
  isDarkMode: boolean | undefined;
  screenWidth: number;
}

export function Body({ isDarkMode, screenWidth }: Props) {
  return (
    <div>
      {screenWidth <= 1024 ? (
        <div className="">
          <div className="flex-col items-center w-full h-full">
          <div className={`flex w-full justify-center`}>
          <Image
            src={perfil}
            alt="Picture of the author"
            className="w-72"
          />
          </div>
            <div className="flex flex-col w-full items-center">
              <h1 className={`text-[5rem] font-lSpartan font-lg ${isDarkMode ? "text-white" : "text-BlueH"} `}>Hello</h1>
              <h2
                className={`${isDarkMode ? "text-violet-800" : "text-BlueSH"} font-lSpartan font-sm`}
              >
                <p className="mt-[-2rem] text-[3rem]">I&apos;m Kelson</p>
              </h2>
              <div
                className={`${isDarkMode ? "text-violet-800" : "text-BlueH"}`}
              >
                <TypeAnimation
                  className={`min-[1600px]:text-[2rem] font-lSpartan font-md 
                }`}
                  sequence={[
                    "WEB DEVELOPER",
                    1000,
                    "DESING",
                    1000,
                    "DATA SCIENTIST",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>

              <p
                className={`${
                  isDarkMode ? "text-white" : "text-BlueH"
                } text-[1rem] font-lSpartan font-[500] h-min mt-8 text-center`}
              >
                I&apos;m an electrical engineering student passionate about
                technology and how it can improve the world.
              </p>
              <div className="flex gap-5 mt-14">
                <Button>CONTACT ME</Button>
                <Button>KNOW MORE</Button>
              </div>
              <div className="flex mt-8 gap-5">
                <Image
                  src={instagram}
                  alt="Instagram Logo"
                  className="w-7 transition-all duration-300 hover:scale-125"
                />
                <Image
                  src={github}
                  alt="Instagram Logo"
                  className="w-7 transition-all duration-300 hover:scale-125"
                />
                <Image
                  src={linkedin}
                  alt="Instagram Logo"
                  className="w-7 transition-all duration-300 hover:scale-125"
                />
              </div>
            </div>
          </div>
          <Background />
        </div>
      ) : (
        <div
          className="min-[1080px]:flex justify-between mr-[6rem] mt-40 max-[1080px]:flex-col max-[1080px]:w-full overflow-hidden"
          id="feed1"
        >
          <div className="flex justify-between ml-28 min-[1600px]:mt-20 min-[1080px]:mt-0 leading-none max-[1080px]:scale-[1.7] ">
            <div className="flex-col gap-10 relative max-[1080px]:mt-40 ">
              <h1
                className={`min-[1600px]:text-[9rem] font-lSpartan font-lg h-min min-[1080px]:text-[6rem] text-${
                  isDarkMode ? "white" : "BlueH"
                } max-[1080px]:text-[95px]`}
              >
                Hello
              </h1>
              <h2
                className={`min-[1600px]:text-[5rem] min-[1080px]:text-[3rem] font-lSpartan font-sm mb-8 ${
                  isDarkMode ? "text-violet-800" : "text-BlueSH"
                }`}
              >
                <p className="max-[1080px]:text-[4rem]">I &apos; m Kelson</p>
              </h2>
              <div
                className={`${isDarkMode ? "text-violet-800" : "text-BlueH"}`}
              >
                <TypeAnimation
                  className={`min-[1600px]:text-[2rem] font-lSpartan font-md 
                }`}
                  sequence={[
                    "WEB DEVELOPER",
                    1000,
                    "DESING",
                    1000,
                    "DATA SCIENTIST",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>

              <p
                className={`${
                  isDarkMode ? "text-white" : "text-BlueH"
                } text-[1.25rem] font-lSpartan font-[500] h-min w-[27.313rem] mt-8`}
              >
                I&apos;m an electrical engineering student passionate about
                technology and how it can improve the world.
              </p>
              <div className="flex gap-5 mt-14">
                <Button>CONTACT ME</Button>
                <Button>KNOW MORE</Button>
              </div>
              <div className="flex mt-8 w-full gap-5">
                <Image
                  src={instagram}
                  alt="Instagram Logo"
                  className="w-7 transition-all duration-300 hover:scale-125"
                />
                <Image
                  src={github}
                  alt="Instagram Logo"
                  className="w-7 transition-all duration-300 hover:scale-125"
                />
                <Image
                  src={linkedin}
                  alt="Instagram Logo"
                  className="w-7 transition-all duration-300 hover:scale-125"
                />
              </div>
            </div>
          </div>
          <Image
            src={perfil}
            alt="Picture of the author"
            className="min-[1080px]:w-[32rem] min-[1080px]:h-[32rem] min-[1600px]:w-[48.449rem] min-[1600px]:h-[43rem] absolute min-[1600px]:top-[8rem] min-[1600px]:right-20 min-[1080px]:top-[4rem] min-[1080px]:right-20"
          />
          <Background />
        </div>
      )}
    </div>
  );
}
