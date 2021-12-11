/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import HeroImagen from "./../../assets/images/img6.jpg";

const gradColor = "linearGradient(to right, #ff0099, #493240)";

export default function Example() {
  return (
    <div className="relative bg-blue overflow-hidden">
      <div className="max-w-7xl mx-auto h-auto md:h-screen">
        <div className="sm:relative z-10 pt-20 md:block lg:flex lg:flex-col lg:justify-around pb-8 sm:display-none  sm:pb-16 md:h-full md:pb-20  lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden absolute lg:block   inset-y-0 h-full w-30  "
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="myGradient" gradientTransform="rotate(30)">
                <stop offset="10%" stopColor="#272780" />
                <stop offset="90%" stopColor="#03BCFF" />
              </linearGradient>
            </defs>
            <polygon points="0,0 85,0 75,100 0,100" fill="url('#myGradient')" />
          </svg>

          <main className="relative block md:absolute -mt-12 mx-auto max-w-7xl px-4  sm:px-6 md:mt-16 lg:mt-16 lg:px-4 xl:mt-28">
            <div className="text-center  lg:text-left">
              <h1 className="text-4xl sm:text-6xl  lg:text-8xl tracking-tight font-bold text-gray-900 md:text-7xl">
                <span className="block pb-4 text-gray-100 xl:inline">
                  Bienvenido a{" "}
                </span>{" "}
                <span className="block text-gray-100 xl:inline">CAPRES</span>
              </h1>
              <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
                El trabajo que se realiza a diario busca resultados concretos
                para otorgar a los Asociados una mejor calidad de vida, al
                entender que así, y solo por esta vía, hemos de contribuir al
                logro de los altos fines propuestos, como es incentivar al
                Ahorro para obtener beneficios a futuro, teniendo como visión
                ser reconocida por sus Asociados por la excelencia en servicios
                consolidados.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border-2 border-transparent text-base font-medium rounded text-gray-100 bg-elblue hover:bg-transparent hover:border-2 hover:border-gray-100 md:py-4 md:text-lg md:px-10"
                  >
                    {/* font-medium text-gray-100 rounded border-2 border-gray-100 hover:text-gray-100 hover:bg-elblue hover:border-elblue */}
                    Ingresar
                  </a>
                </div>
                
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-900">
        <img
          className="relative h-full w-full opacity-70 object-fit object-cover "
          src={HeroImagen}
          alt="Hero"
        />
      </div>
    </div>
  );
}
