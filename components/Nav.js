import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Nav() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollPos(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPos]);

  const [toggle, setToggle] = useState(false);
  function handleToggle(isToggled) {
    setToggle(isToggled);
  }

  return (
    <div className="fixed w-full top-0 z-50 bg-main lg:bg-transparent">
      <div
        className={
          (toggle ? "fixed z-50" : "hidden") +
          " " +
          "left-0 top-0 bg-main flex flex-col w-screen h-screen items-center lg:hidden"
        }
      >
        <div className="flex w-9/12 justify-end py-8">
          <button onClick={() => handleToggle(false)}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-8 text-lg font-quicksand">
          <a href="#">about</a>
          <a href="#">projects</a>
        </div>
      </div>

      <div
        id="nav"
        className={
          "mx-auto w-9/12 lg:w-3/6 my-6 py-2" +
          " " +
          (scrollPos > 0
            ? "lg:bg-gray-300 lg:bg-opacity-50 lg:box-content lg:rounded-full lg:px-4 transition-all duration-300"
            : "")
        }
      >
        <div className="font-quicksand flex justify-between text-base lg:text-lg">
          <a href="#" className="font-playfair font-bold text-2xl">
            jackey yang
          </a>
          <button
            onClick={() => handleToggle(true)}
            className="block lg:hidden"
          >
            <AiOutlineMenu size={24} />
          </button>
          <div className="hidden lg:block space-x-6">
            <a href="#">about</a>
            <a href="#">projects</a>
          </div>
        </div>
      </div>
    </div>
  );
}
