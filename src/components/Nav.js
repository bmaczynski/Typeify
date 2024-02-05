import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About" },
    { path: "https://discord.gg/U3eCyK6SGF", text: "Discord" },
  ];

  const location = useLocation();

  return (
    <>
      <div className="text-white bg-white/5 border-b border-white/10 p-5 mb-5">
        <div className="flex flex-col lg:flex-row justify-between items-center container">
          <h1 className="flex text-3xl font-bold tracking-tight">
            Typeify <span className="text-teal-500">.io</span>
          </h1>
          <div className="gap-1 font-semibold flex mt-5">
            {navLinks.map((link, index) => (
              <Link key={index} className={`px-5 py-2.5 rounded-full font-medium transition ${location.pathname === link.path ? "bg-white/5" : "hover:bg-white/5 bg-transparent "}`} to={link.path}>
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
