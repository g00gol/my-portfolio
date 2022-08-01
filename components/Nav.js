import { AiOutlineMenu } from "react-icons/ai";

export default function Nav() {
  return (
    <div className="flex mx-auto w-9/12 md:w-2/6 py-8 justify-between text-base md:text-lg">
      <a href="#">jackey yang</a>

      <button className="block md:hidden">
        <AiOutlineMenu size={24} />
      </button>

      <div className="hidden md:block space-x-6">
        <a href="#">projects</a>
        <a href="#">blog</a>
        <a href="#">contact</a>
      </div>
    </div>
  );
}
