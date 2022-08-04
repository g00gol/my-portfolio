import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  function handleToggle(isToggled) {
    setToggle(isToggled);
  }

  return (
    <div className="font-quicksand flex mx-auto w-9/12 lg:w-2/6 py-8 justify-between text-base lg:text-lg">
      <a href="#">jackey yang</a>

      <button onClick={() => handleToggle(true)} className="block lg:hidden">
        <AiOutlineMenu size={24} />
      </button>

      <div className={toggle ? "fixed z-50" : "hidden"}>
        <div className="bg-gray-100 flex flex-col fixed right-0 top-0 w-screen h-screen items-center lg:hidden">
          <div className="flex w-9/12 justify-end py-8">
            <button onClick={() => handleToggle(false)}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-8 text-lg">
            <a href="#">projects</a>
            <a href="#">blog</a>
            <a href="#">contact</a>
          </div>
        </div>
      </div>

      <div className="hidden lg:block space-x-6">
        <a href="#">projects</a>
        <a href="#">blog</a>
        <a href="#">contact</a>
      </div>
    </div>
  );
}
