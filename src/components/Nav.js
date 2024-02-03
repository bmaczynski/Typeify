import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex w-full items-center p-5 bg-neutral-900 text-white">
        <h1 className="flex w-full text-3xl mb-5 font-semibold tracking-tight select-none">
          Typeify <span className="text-teal-500">.io</span>
        </h1>
        <div className="gap-5 w-full flex justify-center">
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
