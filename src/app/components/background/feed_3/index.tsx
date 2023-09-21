import Image from "next/image";
import elipse1 from "../../../assets/Ellipse 19.svg";
import elipse2 from "../../../assets/Ellipse 20.svg";
import elipse3 from "../../../assets/Ellipse 21.svg";

export function Background_3() {
  return (
    <div>
        <Image
          src={elipse2}
          alt="Picture of the author"
          className="absolute w-3/4 bottom-[-2000px] right-10 z-[-10] animate-pingPing overflow-hidden"
        />
        <Image
          src={elipse1}
          alt="Picture of the author"
          className="absolute w-3/4 bottom-[-2000px] right-10 z-[-10] animate-pingPing2 overflow-hidden"
        />
        <Image
          src={elipse3}
          alt="Picture of the author"
          className="absolute w-3/4 bottom-[-2000px] right-10 z-[-10] animate-pingPing3 overflow-hidden"
        />
    </div>
  );
}
