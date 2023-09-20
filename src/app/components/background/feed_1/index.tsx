import Image from "next/image";
import elipse1 from "../../../assets/Ellipse 19.svg";
import elipse2 from "../../../assets/Ellipse 20.svg";
import elipse3 from "../../../assets/Ellipse 21.svg";

export function Background() {
  return (
    <div>
      <Image
        src={elipse1}
        alt="Picture of the author"
        className="absolute top-10 right-10 z-[-10] animate-blob3 overflow-hidden"
      />
      <Image
        src={elipse2}
        alt="Picture of the author"
        className="absolute bottom-6 left-80 z-[-10] animate-blob2 overflow-hidden"
      />
      <Image
        src={elipse3}
        alt="Picture of the author"
        className="absolute right-10 top-3 z-[-10] animate-blob overflow-hidden"
      />
      <Image
        src={elipse3}
        alt="Picture of the author"
        className="absolute top-6 left-10 z-[-10] animate-blob2 overflow-hidden"
      />
    </div>
  );
}
