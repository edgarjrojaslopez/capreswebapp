import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { Fragment } from "react";
/* Imagenes */
import haberImg from "./../../assets/images/undraw_transfer_money.svg";
import carImg from "./../../assets/images/undraw_by_my_car.svg";
import prestImg from "./../../assets/images/undraw_services.svg";
import services from "./../../assets/images/undraw_financial_data.svg";
import prestamos from "./../../assets/images/financial_data.svg";
import home from "./../../assets/images/undraw_at_home_octe.svg";
export default function Sections() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className="flex flex-col ">
        <div className="w-full flex py-6 md:flex-row flex-col items-center section-gray px-4">
          <div
            className="w-1/2 place-content-evenly"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h1 className="text-2xl md:text-4xl font-semibold md:font-bold">
              Retiro de Haberes
            </h1>
            <p className="text-md md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              molestias natus quod? Nulla, aliquid nostrum eveniet
              necessitatibus nam illum maxime ducimus atque facilis voluptatem
              iusto recusandae, reiciendis possimus alias explicabo.
            </p>
          </div>
          <div className="p-4 sm:max-w-6xl right-0 w-1/2">
            <img
              src={haberImg}
              alt="..."
              className="rounded align-middle border-none"
            />
          </div>
        </div>
        <div className="w-full flex py-6 md:flex-row-reverse flex-col items-center section-blue px-4">
          <div
            className="w-1/2 content-center"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h1 className="text-2xl md:text-4xl font-semibold md:font-bold">
              Préstamos Personales
            </h1>
            <p className="text-md md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              molestias natus quod? Nulla, aliquid nostrum eveniet
              necessitatibus nam illum maxime ducimus atque facilis voluptatem
              iusto recusandae, reiciendis possimus alias explicabo.
            </p>
          </div>
          <div className="md:px-12 sm:max-w-6xl right-0 w-1/2">
            <img
              src={prestImg}
              alt="..."
              className="rounded align-middle border-none"
            />
          </div>
        </div>
        <div className="w-full flex py-6 md:flex-row flex-col items-center section-gray px-4">
          <div
            className="w-1/2 place-content-evenly"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h1 className="text-2xl md:text-4xl font-semibold md:font-bold">
              Préstamos para Vehículos
            </h1>
            <p className="text-md md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              molestias natus quod? Nulla, aliquid nostrum eveniet
              necessitatibus nam illum maxime ducimus atque facilis voluptatem
              iusto recusandae, reiciendis possimus alias explicabo.
            </p>
          </div>
          <div className="md:px-12 md:py-12 sm:max-w-6xl right-0 w-1/2">
            <img
              src={carImg}
              alt="..."
              className="rounded align-middle border-none"
            />
          </div>
        </div>
        <div className="w-full flex py-6 md:flex-row-reverse flex-col items-center section-blue px-4">
          <div
            className="w-1/2 content-center"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <h1 className="text-2xl md:text-4xl font-semibold md:font-bold">
              Préstamos para Vehículos
            </h1>
            <p className="text-md md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              molestias natus quod? Nulla, aliquid nostrum eveniet
              necessitatibus nam illum maxime ducimus atque facilis voluptatem
              iusto recusandae, reiciendis possimus alias explicabo.
            </p>
          </div>
          <div className="md:px-12 md:py-24 sm:max-w-6xl right-0 w-1/2">
            <img
              src={home}
              alt="..."
              className="rounded align-middle border-none"
            />
          </div>
        </div>
        <div className="w-full flex py-6 md:flex-row flex-col items-center section-gray px-4">
          <div
            className="flex flex-col w-1/2 "
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h1 className="text-2xl md:text-4xl font-semibold md:font-bold">
              Fondo Especial
            </h1>
            <p className="text-md md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              molestias natus quod? Nulla, aliquid nostrum eveniet
              necessitatibus nam illum maxime ducimus atque facilis voluptatem
              iusto recusandae, reiciendis possimus alias explicabo.
            </p>
          </div>
          <div className="p-4 sm:max-w-6xl right-0 w-1/2">
            <img
              src={haberImg}
              alt="..."
              className="rounded align-middle border-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}
