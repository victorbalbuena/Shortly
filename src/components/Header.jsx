import { useEffect, useState } from "react";
import close from "./../assets/close.svg";
import menu from "./../assets/menu.svg";
import { CiDark } from "react-icons/ci";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="max-w-6xl mx-auto">
      <div className="flex justify-between p-5 md:p-10 font-poppins items-center">
        <h1 className="md:hidden font-bold text-3xl">Shortly</h1>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="md:hidden [w-max-28px] h-max-[28px] cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className="hidden md:flex items-center gap-4">
          <h1 className="font-bold text-3xl dark:text-white">Shortly</h1>
          <h2
            className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white cursor-pointer
                 font-semibold transition-colors duration-200 text-lg"
          >
            Features
          </h2>
          <h2
            className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white cursor-pointer
                 font-semibold transition-colors duration-200 text-lg"
          >
            Pricing
          </h2>
          <h2
            className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white cursor-pointer
                 font-semibold transition-colors duration-200 text-lg"
          >
            Resources
          </h2>
        </div>
        <div className="hidden md:flex gap-5">
          {/* <button className="py-1 px-4 rounded-full font-semibold hover:text-gray-500">
            Login
          </button>
          <button className="py-1 px-4 rounded-full text-white bg-cyan-500 hover:bg-cyan-200 transition-colors duration-200 font-semibold">
            Sign Up
          </button> */}

          {/* <button onClick={handleThemeSwitch}>
            <CiDark className="text-4xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" />
          </button> */}
        </div>
      </div>
      <div
        className={`${
          toggle ? "flex flex-col" : "hidden"
        } p-6 bg-purple-950 rounded-2xl text-center mx-auto sm:w-3/4 md:w-2/4 fixed inset-x-5 top-20 md:hidden`}
      >
        <ul className="text-white font-poppins text-xl font-semibold flex flex-col gap-5">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        {/* <hr className="my-5" /> */}
        <div className="flex flex-col gap-5 font-poppins justify-center items-center">
          {/* <CiDark
            onClick={handleThemeSwitch}
            className="text-3xl text-white hover:text-gray-400"
          /> */}
        </div>
      </div>
    </header>
  );
}
