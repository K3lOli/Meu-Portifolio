import Image from "next/image";
import fotovolt from "../../assets/image 3.svg";
import siteSolar from "../../assets/image 4.svg";
import FMS from "../../assets/image 5.svg";
import padaria from "../../assets/padaria.png";
import orangePortfolio from "../../assets/orangePortfolio.png"
import Link from "next/link";

export function Projects() {
  return (
    <div>
      <div
        className={"flex gap-10 lg:gap-20 flex lg:flex-wrap lg:justify-center my-20 mx-10"}
      >
        <div
          className={`shadow-slate-700 shadow-2xl rounded transition-all duration-300 scale-90 hover:scale-95 sm:hover:scale-125 w-[22.5rem]`}
        >
          <Image src={padaria} alt="" className="rounded h-[276px]" />
          <div className="flex h-52 bg-white rounded p-4 ">
            <div>
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
            </div>
          </div>
        </div>
        <div
          className={`shadow-slate-700 shadow-2xl rounded transition-all duration-300 scale-90 hover:scale-95 sm:hover:scale-125 w-[22.5rem]`}

        >
          <Image src={fotovolt} alt="" className="rounded" />
          <div className="flex h-52 bg-white rounded p-4 ">
            <div>
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
            </div>
          </div>
        </div>
        <div
          className={`shadow-slate-700 shadow-2xl rounded transition-all duration-300 scale-90 hover:scale-95 sm:hover:scale-125 w-[22.5rem]`}
        >
          <Image src={siteSolar} alt="" className="rounded" />
          <div className="flex h-52 bg-white rounded p-4 ">
            <div>
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
            </div>
          </div>
        </div>
        <div
          className={`shadow-slate-700 shadow-2xl rounded transition-all duration-300 scale-90 hover:scale-95 sm:hover:scale-125 w-[22.5rem]`}
        >
          <Image src={FMS} alt="" className="rounded" />
          <div className="flex h-52 bg-white rounded p-4 ">
            <div>
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
            </div>
          </div>
        </div>
        <div
          className={`shadow-slate-700 shadow-2xl rounded transition-all duration-300 scale-90 hover:scale-95 sm:hover:scale-125 w-[22.5rem]`}
        >
          <Image src={orangePortfolio} alt="" className="rounded h-[276px] w-[360px]" />
          <div className="flex h-52 bg-white rounded p-4 ">
            <div>
              <p>
                Project developed during the Orange Juice hackathon with the aim of creating a programming project sharing blog.
              </p>
              <Link
                href={"https://hackathon-squad-29-front-end.vercel.app/"}
                target="_blank"
                className="text-blue-600 pb-4"
              >
                Link para o deploy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
