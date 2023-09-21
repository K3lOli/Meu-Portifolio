import Image from "next/image";
import elipse1 from "../../../../assets/conjuntoDeBolas_1.svg";

export function Background_2_mobile() {
  return (
    <div>
        <Image
          src={elipse1}
          alt="Picture of the author"
          className="absolute top-[1500px] right-10 z-[-10] animate-pulse overflow-hidden"
        />
    </div>
  );
}
