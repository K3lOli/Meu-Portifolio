import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import fotovolt from "../../assets/image 3.svg";
import siteSolar from "../../assets/image 4.svg";
import FMS from "../../assets/image 5.svg";

interface Props {
  screenWidth: number;
}

export function Card({ screenWidth }: Props) {
  return (
    <div>
      <div className={`flex ${screenWidth <= 1250 ? "gap-10" : "gap-20"} mb-64`}>
        <div
          className={`shadow-slate-700 shadow-2xl rounded transition-all duration-300 ${
            screenWidth <= 500 ? "scale-90 hover:scale-95" : ""
          } hover:scale-125 w-[22.5rem]`}
        >
          <Image src={fotovolt} alt="" className="rounded" />
          <div className="flex h-52 bg-white rounded p-4 ">
            <p>
              <p>
                {" "}
                Site built to monitor the temperature of solar panels with the aim of checking the brightness between temperature and generation efficiency. The website was created using React with Typescript and styled with Tailwind, while Prisma, PostgreSQL and Express were used on the server side.
              </p>
            </p>
          </div>
        </div>
        <div
          className={`shadow-slate-700 shadow-2xl rounded transition-all duration-300 ${
            screenWidth <= 500 ? "scale-90 hover:scale-95" : ""
          } hover:scale-125 w-[22.5rem]`}
        >
          <Image src={siteSolar} alt="" className="rounded" />
          <div className="flex h-52 bg-white rounded p-4 ">
            <p>
              <p>
                {" "}
                Landing page for a solar energy company that offers an easy and responsive interface for all devices. Concepts of UX design, CSS and HTML were used. This was one of my first freelance projects.
              </p>
            </p>
          </div>
        </div>
        <div
          className={`shadow-slate-700 shadow-2xl rounded transition-all duration-300 ${
            screenWidth <= 500 ? "scale-90 hover:scale-95" : ""
          } hover:scale-125 w-[22.5rem]`}
        >
          <Image src={FMS} alt="" className="rounded" />
          <div className="flex h-52 bg-white rounded p-4 ">
            <p>
            The website is being developed as a redesign of the fms website here in my city, improving both the user interface and the API logic itself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
