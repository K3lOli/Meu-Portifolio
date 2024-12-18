"use client";

import Image from "next/image";
import perfil from "../../assets/fotoPerfil_5.svg";
import instagram from "../../assets/skill-icons_instagram.svg";
import github from "../../assets/fontisto_github.svg";
import linkedin from "../../assets/devicon_linkedin.svg";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../button";
import { Background } from "../background/feed_1/BackgoundInitialSection";

interface Props {
  isDarkMode: boolean | undefined;
}

export function InitialApresentation({ isDarkMode }: Props) {
  return (
    <div
      className="flex flex-col lg:flex lg:items-start items-center w-full"
      id="feed1"
    >
      <Image
        src={perfil}
        alt="Picture of the author"
        className="lg:right-20 lg:top-[8rem] lg:w-[40rem] lg:h-[35rem] lg:absolute w-[300px]"
      />
      <Background />
      <div className="flex x-14 lg:mt-20 lg:mt-0 leading-none lg:ml-28">
        <div className="flex flex-col lg:mt-40 lg:items-start items-center">
          <h1
            className={`lg:text-[9rem] text-[95px] font-lSpartan font-lg h-min text-${isDarkMode ? "white" : "BlueH"}`}
          >
            Hello
          </h1>
          <h2
            className={`min-[1600px]:text-[5rem] min-[1080px]:text-[3rem] font-lSpartan font-sm mb-8 ${isDarkMode ? "text-violet-800" : "text-BlueSH"
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
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>

          <p
            className={`${isDarkMode ? "text-white" : "text-BlueH"
              } text-[1.25rem] font-lSpartan font-[500] h-min w-[27.313rem] mt-8`}
          >
            I&apos;m an electrical engineering student passionate about
            technology and how it can improve the world.
          </p>
          <div className="flex gap-5 mt-14">

            <Button><a href="https://api.whatsapp.com/send?phone=5586981296314" target="_blank">CONTACT ME</a></Button>
            <Button><a href="#feed2">KNOW MORE</a></Button>
          </div>
          <div className="flex lg:items-start mt-8 gap-5">
            <a href="https://www.instagram.com/kelson_vict0r/" target="_blank"><Image
              src={instagram}
              alt="Instagram Logo"
              className="w-7 transition-all duration-300 hover:scale-125"
            /></a>
            <a href="https://github.com/K3lOli" target="_blank"><Image
              src={github}
              alt="Instagram Logo"
              className="w-7 transition-all duration-300 hover:scale-125"
            /></a>
            <a href="https://www.linkedin.com/in/kelson-victor/" target="_blank"><Image
              src={linkedin}
              alt="Instagram Logo"
              className="w-7 transition-all duration-300 hover:scale-125"
            /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
