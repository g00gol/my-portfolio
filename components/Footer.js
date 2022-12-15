import { FaEnvelope, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="my-20 lg:my-48 w-full justify-center flex space-x-8 text-textGray [&>a]:text-3xl">
      <a href="https://github.com/g00gol">
        <FaGithubSquare />
      </a>
      <a href="https://www.linkedin.com/in/jackeyy/">
        <FaLinkedin />
      </a>
      <a href="mailto:jackeyyang.work@gmail.com">
        <FaEnvelope />
      </a>
    </div>
  );
}
