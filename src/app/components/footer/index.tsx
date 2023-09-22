import instagram from "../../assets/skill-icons_instagram.svg";
import github from "../../assets/fontisto_github.svg";
import linkedin from "../../assets/devicon_linkedin.svg";
import { Button } from "../button";
import Image from 'next/image'

interface Props {
  isDarkMode: boolean | undefined;
}

export function Footer({ isDarkMode }: Props) {
  return (
    <div className="w-full flex justify-center" id="footer">
<div className="w-full flex flex-col items-center bottom-0">
      <div className="flex flex-col items-center font-lSpartan">
        <h1
          className={`font-lg ${
            isDarkMode ? "text-violet-50" : "text-BlueH"
          } text-[3rem] w-auto text-center mb-4`}
        >
          Let&apos;s Talk?
        </h1>
        <Button><a href="https://api.whatsapp.com/send?phone=5586994783119" target="_blank">CONTACT ME</a></Button>
      </div>
      <div className="mt-60 flex flex-col justify-center bg-violet-100 backdrop-blur-lg w-full">
          <div className="flex mt-8 gap-5 justify-center">
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
        <p className="mt-4 mb-6 text-center">© 2023 Kelson Victor. All rights reserved.</p>
      </div>
    </div>
    </div>
    
  );
}
