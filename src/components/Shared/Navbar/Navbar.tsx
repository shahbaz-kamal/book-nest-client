import { NavLink } from "react-router";
import logo from "../../../assets/logo3.png";
import { navLinks } from "../../../utils/navbaLinks";

const Navbar = () => {
  const links = (
    <>
      {navLinks.map((link) => (
        <li key={link.id}>
          <NavLink to={link.route}>{link.name}</NavLink>
        </li>
      ))}
    </>
  );
  console.log(links);
  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-2 text-text dark:text-primary flex  justify-between">
      {/* navbar starts */}
      <div className="flex  items-center justify-center gap-2">
        <div>
          {" "}
          <img src={logo} alt="" className="w-12 h-12" />
        </div>
        <a href="/" className="font-semibold">
          Book<span className="text-accent font-bold">NEST</span>
        </a>
      </div>
      {/* navbaer-ends */}
      <div>
        {/* navlinks */}
        <div>
          <ul className="flex gap-4">{links}</ul>
        </div>
        {/* end section */}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
