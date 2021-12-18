import React from "react";

export default function Footer() {
  return (
    <footer className="left-0 bottom-0 right-0 text-gray-200 bg-gray-500">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center md:text-left text-center -mb-10 -mx-4">
          <div className="lg:w-3/6 md:w-1/2 w-full px-4 ">
            <h2 className="flex-wrow-0 font-medium text-gray-200 tracking-widest text-md mb-3">
              CONTACTO
            </h2>
            <div className="list-none mb-10">
              <li className="text-gray-200 text-sm hover:text-gray-50">
                <span className="font-medium">Operaciones</span>: (0212)
                709.4759 / 4761 / 4763 / 4770, Celular: (0414) 304.2316
              </li>
              <li className="text-gray-200 text-sm hover:text-gray-50">
                <span className="font-medium">Master de Operaciones</span>:
                (0212) 709.4880, (0212) 514.0574
              </li>
              <li className="text-gray-200 text-sm hover:text-gray-50">
                <span className="font-medium">Planes y Beneficios</span>: (0212)
                709.4758 / 4760 / 4762 / 4764 / 4769 / 4775
              </li>
              <li className="text-gray-200 text-sm hover:text-gray-50">
                <span className="font-medium">
                  Master de Planes y Beneficios
                </span>
                : (0212) 709.4898
              </li>
            </div>
          </div>

          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <div className="list-none mb-10">
              <li>
                <a className="text-gray-200 hover:text-gray-50">First Link</a>
              </li>
              <li>
                <a className="text-gray-200 hover:text-gray-50">Second Link</a>
              </li>
              <li>
                <a className="text-gray-200 hover:text-gray-50">Third Link</a>
              </li>
              <li>
                <a className="text-gray-200 hover:text-gray-50">Fourth Link</a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start"></div>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a className="text-gray-300">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-300">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-300">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-300 text-sm text-center sm:text-left">
            © 2021 CAPRES —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-200 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @edgarjrojasl
            </a>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm">
            Enamel pin tousled raclette tacos irony
          </span>
        </div>
      </div>
    </footer>
  );
}
