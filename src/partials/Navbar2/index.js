import React from "react";
import Logo from "./../../assets/images/capres.jpg";
export default function index() {
  return (
    <div className="container flex flex-col">
      <header className="relative md:absolute w-full sm:px-4 z-20 px-4 py-4">
        <nav className=" flex items-center  mx-auto max-w-7xl bg-transparent">
          <a>
            <img
              src={Logo}
              alt="Capres Logo"
              className="flex-1 h-20 w-20 md:h-16 md:w-16"
            />
          </a>
          <button className="md:hidden justify-end px-3 py-2  text-gray-400  hover:text-blue ">
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div className="flex items-center justify-between space-x-1 "></div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex pl-4">
              <div className="hidden md:flex items-center space-x-2">
                <a
                  href=""
                  className="py-4 px-2 text-lg text-gray-500 hover:text-lblue font-semibold "
                >
                  Nosotros
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-lg text-gray-500 font-semibold hover:text-lblue hover:border-4 focus:border-green-500 transition duration-300"
                >
                  Socios
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-lg text-gray-500 font-semibold hover:text-lblue transition duration-300"
                >
                  Delegados
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-lg text-gray-500 font-semibold hover:text-lblue transition duration-300"
                >
                  Servicios
                </a>
                <a
                  href=""
                  className="py-4 px-2 text-lg text-gray-500 font-semibold hover:text-lblue transition duration-300"
                >
                  Contacto
                </a>
                <div className="pl-6">
                  <button className="px-6 py-3 text-lg rounded-md bg-transparent border-2 border-lblue font-semibold text-lblue hover:bg-lblue hover:text-gray-100">
                    Regístrate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
