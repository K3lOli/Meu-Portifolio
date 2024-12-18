import Image from "next/image";
import elipse1 from "../../../assets/Ellipse 19.svg";
import elipse2 from "../../../assets/Ellipse 20.svg";
import elipse3 from "../../../assets/Ellipse 21.svg";

export function Background() {
  return (
    <div className="">
      <Image
        src={elipse1}
        alt="Picture of the author"
        className="absolute top-10 lg:right-10 right-16 z-[-10] lg:animate-blob3 animate-pulse overflow-hidden"
      />
      <Image
        src={elipse2}
        alt="Picture of the author"
        className="absolute top-10 right-16 animate-pulse lg:bottom-6 lg:left-80 z-[-10] lg:animate-blob2 overflow-hidden"
      />
      <Image
        src={elipse3}
        alt="Picture of the author"
        className="absolute top-10 right-16 animate-pulse lg:right-10 lg:top-3 z-[-10] lg:animate-blob overflow-hidden"
      />
      <Image
        src={elipse3}
        alt="Picture of the author"
        className="absolute top-10 right-16 animate-pulse lg:top-6 lg:left-10 z-[-10] lg:animate-blob2 overflow-hidden"
      />
    </div>
  );
}
