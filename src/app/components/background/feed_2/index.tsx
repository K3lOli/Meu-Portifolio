import Image from "next/image";
import elipse1 from "../../../assets/conjuntoDeBolas_1.svg";

export function Background_2() {
  return (
    <div>
        <Image
          src={elipse1}
          alt="Picture of the author"
          className="absolute top-[900px] right-10 z-[-10] animate-pulse overflow-hidden"
        />
    </div>
  );
}
