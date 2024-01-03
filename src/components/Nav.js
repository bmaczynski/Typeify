import React from "react";

const Nav = () => {
  const navLinks = [
    {
      name: "Leaderboard",
      link: "/leaderboard",
    },
    {
      name: "Discord",
      link: "/discord",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Log In",
      link: "/login",
    },
    {
      name: "Sign Up",
      link: "/signup",
    },
  ];

  return (
    <>
      <div className="flex w-full p-10 bg-neutral-900 text-white">
        <div className="flex flex-col max-w-screen-md mx-auto gap-5">
          <h1 className="flex mx-auto text-3xl mb-5 font-semibold tracking-tight select-none">
            Typeify <span className="text-blue-500">.io</span>
          </h1>
          <div className="max-w-screen-md mx-auto">
            <div className="gap-5 w-full flex">
              {navLinks.map((link, index) => {
                return (
                  <button
                    key={index}
                    className="flex bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-900 transition-all duration-150 p-2.5 rounded-md"
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
