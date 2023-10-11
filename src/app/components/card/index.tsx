import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import fotovolt from "../../assets/image 3.svg";
import siteSolar from "../../assets/image 4.svg";
import FMS from "../../assets/image 5.svg";
import padaria from "../../assets/padaria.png";
import Link from "next/link";

interface Props {
  screenWidth: number;
}

export function Card({ screenWidth }: Props) {
  return (
    <div>
      <div
        className={`flex ${
          screenWidth <= 1250
            ? "gap-10"
            : "gap-20 flex flex-wrap justify-center"
        } mb-64`}
      >
        <div
          className={`shadow-slate-700 shadow-2xl rounded transition-all duration-300 ${
            screenWidth <= 500 ? "scale-90 hover:scale-95" : ""
          } hover:scale-125 w-[22.5rem]`}
        >
          <Image src={padaria} alt="" className="rounded h-[276px]" />
          <div className="flex h-52 bg-white rounded p-4 ">
            <p>
              <p>
                {" "}
                Site built to monitor the temperature of solar panels with the
                aim of checking the brightness between temperature and
                generation efficiency. The website was created using React with
                Typescript and styled with Tailwind, while Prisma, PostgreSQL
                and Express were used on the server side.
              </p>
              <Link
                href={"https://padaria-project-bm85.vercel.app/"}
                target="_blank"
                className="text-blue-600 pb-4"
              >
                Link para o deploy
              </Link>
            </p>
          </div>
        </div>
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
                Site built to monitor the temperature of solar panels with the
                aim of checking the brightness between temperature and
                generation efficiency. The website was created using React with
                Typescript and styled with Tailwind, while Prisma, PostgreSQL
                and Express were used on the server side.
              </p>
              <Link
                href={"https://k3loli.github.io/Fotovolt/"}
                target="_blank"
                className="text-blue-600 pb-4"
              >
                Link para o deploy
              </Link>
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
                Landing page for a solar energy company that offers an easy and
                responsive interface for all devices. Concepts of UX design, CSS
                and HTML were used. This was one of my first freelance projects.
              </p>
              <Link
                href={"https://k3loli.github.io/LandingPageLurys/"}
                target="_blank"
                className="text-blue-600 pb-4"
              >
                Link para o deploy
              </Link>
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
              <p>
                The website is being developed as a redesign of the fms website
                here in my city, improving both the user interface and the API
                logic itself.
              </p>
              <Link
                href={"https://fms-repagination-g4xcmoc2g-k3loli.vercel.app/"}
                target="_blank"
                className="text-blue-600 pb-4"
              >
                Link para o deploy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
