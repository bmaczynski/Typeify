import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full items-center bg-neutral-900 text-white p-5">
        <h1 className="flex justify-center md:justify-normal w-full text-3xl font-bold tracking-tight ">
          Typeify <span className="text-teal-500">.io</span>
        </h1>
        <div className="gap-5 font-semibold w-full flex justify-center md:justify-end">
          <Link
            className="p-2.5 hover:bg-neutral-800 rounded-md transition-all"
            to="/"
          >
            Home
          </Link>

          <Link
            className="p-2.5 hover:bg-neutral-800 rounded-md transition-all"
            to="/about"
          >
            About
          </Link>
          <button
            className="hover:bg-neutral-800 rounded-md p-2.5 transition-all"
            type="button"
            onClick={() => {
              window.open("https://discord.gg/U3eCyK6SGF", "_blank");
            }}
          >
            Discord
          </button>
        </div>
      </div>
    </>
  );
};
export default Nav;
