import Image from "next/image";
import elipse1 from "../../../../assets/Ellipse 19.svg";
import elipse2 from "../../../../assets/Ellipse 20.svg";
import elipse3 from "../../../../assets/Ellipse 21.svg";

export function Background_mobile() {
  return (
    <div className="">
      <Image
        src={elipse1}
        alt="Picture of the author"
        className="absolute top-10 right-16 z-[-10] animate-pulse overflow-hidden"
      />
      <Image
        src={elipse2}
        alt="Picture of the author"
        className="absolute top-10 right-16 z-[-10] animate-pulse overflow-hidden"
      />
      <Image
        src={elipse3}
        alt="Picture of the author"
        className="absolute top-10 right-16 z-[-10] animate-pulse overflow-hidden"
      />
      <Image
        src={elipse3}
        alt="Picture of the author"
        className="absolute top-10 right-16 z-[-10] animate-pulse overflow-hidden"
      />
    </div>
  );
}
