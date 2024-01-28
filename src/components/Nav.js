import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex w-full p-10 bg-neutral-900 text-white">
        <h1 className="flex mx-auto text-3xl mb-5 font-semibold tracking-tight select-none">
          Typeify <span className="text-teal-500">.io</span>
        </h1>
        <div className="max-w-screen-md mx-auto">
          <div className="gap-5 w-full flex">
            <div className="flex">
              <Link
                className="p-2.5 hover:bg-neutral-800 rounded-md transition-all"
                to="/"
              >
                Home
              </Link>
            </div>
            <div className="flex">
              <Link
                className="p-2.5 hover:bg-neutral-800 rounded-md transition-all"
                to="/about"
              >
                About
              </Link>
            </div>
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
      </div>
    </>
  );
};
export default Nav;
