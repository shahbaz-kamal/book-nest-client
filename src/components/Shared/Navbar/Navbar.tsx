import { NavLink } from "react-router";
import logo from "../../../assets/logo3.png";

import { navLinks } from "../../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  useGSAP(() => {
    gsap.from("#logo", {
      scale: 0.9,
      duration: 1,
      ease: "power1.inOut",
      delay: 0.5,
    });
    gsap.from(".navlink ul li", {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.5,
    });
  }, []);
  const links = (
    <>
      {navLinks.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.route}
            className={({ isActive }) =>
              `px-3 py-1 transition  duration-300 ease-in-out hover:underline ${
                isActive
                  ? "bg-light-primary dark:bg-dark-primary font-semibold text-dark-text"
                  : "text-light-text dark:text-dark-text"
              }`
            }
          >
            {link.name}
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </NavLink>
        </li>
      ))}
    </>
  );
  console.log(links);
  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-2 text-text dark:text-primary flex  justify-between items-center">
      {/* navbar starts */}
      <div className="flex  items-center justify-center gap-2">
        <div>
          <img id="logo" src={logo} alt="" className="w-12 h-12" />
        </div>
        <a href="/" className="font-bold">
          Book<span className="text-primary font-bold">NEST</span>
        </a>
      </div>
      {/* navbaer-ends */}
      <div className="flex items-center gap-4">
        {/* navlinks */}
        <div className="navlink">
          <ul className="flex ">{links}</ul>
        </div>
        {/* end section */}
        <div>
          {/* dark toggle */}
          <div>
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
