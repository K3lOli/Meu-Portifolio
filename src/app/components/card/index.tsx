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
      <div className={`flex ${screenWidth <= 1024 ? "gap-10" : "gap-20"} mb-64`}>
        <div
          className={`shadow-slate-700 shadow-2xl rounded transition-all duration-300 ${
            screenWidth <= 500 ? "scale-90 hover:scale-95" : ""
          } hover:scale-125 w-[22.5rem]`}
        >
          <Image src={fotovolt} alt="" className="rounded" />
          <div className="flex h-52 bg-white rounded p-4 items-center">
            <p>
              <p>
                {" "}
                O site oferece uma interface fácil e com boa responsividade para
                todos os dispositivos de uso. Foram usados conceitos de UX
                design, CSS e HTML. Esse foi um dos meu primeiros projetos
                freelancer.
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
          <div className="flex h-52 bg-white rounded p-4 items-center">
            <p>
              <p>
                {" "}
                O site oferece uma interface fácil e com boa responsividade para
                todos os dispositivos de uso. Foram usados conceitos de UX
                design, CSS e HTML. Esse foi um dos meu primeiros projetos
                freelancer.
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
          <div className="flex h-52 bg-white rounded p-4 items-center">
            <p>
              O site está sendo desenvolvido como uma repaginação do site da fms
              aqui da minha cidade, melhorando tanto a interfcace do usuário
              quando a própria lógica da API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
