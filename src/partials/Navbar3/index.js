import {React, useState, useEffect} from "react";
import { Link, useLocation} from "react-router-dom";
import Logo from "./../../assets/images/capres.jpg";

export default function Navbar() {
  const [navigation, setNavigation] = useState(false);
  const navLinks = [
    {
      name : "Nosotros",
      to : "/nosotros",
      
    },
    { 
      name : "Socios",
      to : "/socios",
      
    },
    {
      name :"Delegados",
      to : "/delegados",
      
    },
    {
      name : "Servicios",
      to : "/servicios",
      
    },
    {
      name : "Contacto",
      to : "/contacto",
      
    },    
    
  ];
  const location = useLocation();
  const changeNavigationBg = () => {
    if (window.scrollY >= 96) {
      setNavigation(true);
    } else {
      setNavigation(false);
    }
  }
  window.addEventListener("scroll", changeNavigationBg);
  return (
    <div className="fixed w-full   mx-auto z-30">
    <div className={navigation ? 'navigation active duration-200' : 'navigation'} >
          <nav className="relative py-0 sm:py-4 flex items-center justify-between sm:h-12 lg:justify-start" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link to="/">
                  <span className="sr-only">Capres</span>
                  <img className="h-16 mt-2 w-auto md:h-20 md:mt-0"  src={Logo} />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <button type="button" className="h-10 w-12  rounded-md p-2 inline-flex items-center justify-center text-elblue hover:text-elblue hover:bg-eelblue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                   {/*  <!-- Heroicon name: outline/menu --> */}
                    <svg className="h-10 w-auto text-xl text-white focus:text-lblue font-bold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-10">
            {navLinks.map(navLink => (<Link key={navLink.name} className={`${location.pathname !== '/' ? 'nav-link-gray' :  'nav-link'} || ${navigation ? "text-gray-100 hover:text-gray-100 hover:border-gray-100 focus:border-gray-100": ""}` }  to={navLink.to}>{navLink.name}</Link> ))}
          </div>
          </nav>
        </div>

    </div>
  );
}
