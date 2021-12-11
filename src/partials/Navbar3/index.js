import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/images/capres.jpg";

export default function index() {
  return (
    <div className="max-w-7xl bg-blue  md:bg-transparent mx-auto">
    <div className="relative md:absolute z-20 sm:py-10 px-4 md:px-6 md:pt-8">
          <nav className="relative py-0 sm:py-4 flex items-center justify-between sm:h-12 lg:justify-start" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Capres</span>
                  <img className="h-20 w-auto md:h-20" src={Logo} />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-elblue hover:text-elblue hover:bg-eelblue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                   {/*  <!-- Heroicon name: outline/menu --> */}
                    <svg className="h-10 w-auto text-xl text-lblue hover:text-lblue font-bold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-10">
              <button href="#" className="pb-2 font-medium border-b-2 border-transparent text-gray-100 hover:text-gray-100 hover:border-b-2 hover:border-gray-100 focus:border-b-2 focus:border-gray-100 ">Nosotros</button>
              

              <button href="#" className="pb-2 font-medium border-b-2 border-transparent text-gray-100 hover:text-gray-100 hover:border-b-2 hover:border-gray-100 focus:border-b-2 focus:border-gray-100">Socios</button>

              <button href="#" className="pb-2 font-medium border-b-2 border-transparent text-gray-100 hover:text-gray-100 hover:border-b-2 hover:border-gray-100 focus:border-b-2 focus:border-gray-100 ">Delegados</button>

              <button href="#" className="pb-2 font-medium border-b-2 border-transparent text-gray-100 hover:text-gray-100 hover:border-b-2 hover:border-gray-100 focus:border-b-2 focus:border-gray-100 ">Servicios</button>

              <button href="#" className="pb-2 font-medium border-b-2 border-transparent text-gray-100 hover:text-gray-100 hover:border-b-2 hover:border-gray-100 focus:border-b-2 focus:border-gray-100 ">Contacto</button>

              
            </div>
          </nav>
        </div>
    </div>
  );
}
