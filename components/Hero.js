import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import FeatureImage from "../assets/images/feature_image.jpg";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center font-quicksand mt-24 w-9/12 lg:w-2/6 h-4/6 mx-auto">
      <div className="relative w-5/6 lg:w-5/12">
        <Image src={FeatureImage} layout="responsive" />
      </div>

      <div className="flex flex-col items-start w-full mt-4 lg:mt-0 lg:w-6/12 space-y-2">
        <h1 className="font-bold text-2xl">hey there -- i'm jackey</h1>
        <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-linear1 via-linear2 to-linear3">
          a front end developer, student, and lover of new things
        </p>
        <a href="" className="flex flex-row items-center text-lg underline">
          my projects
          <AiOutlineArrowRight />
        </a>

        <div className="flex !mt-12 space-x-2">
          <a href="">
            <FaGithubSquare size={32} color="gray" />
          </a>
          <a href="">
            <FaLinkedin size={32} color="gray" />
          </a>
        </div>
      </div>

      <div className="hidden lg:block w-4/12 absolute left-0 -translate-y-24">
        <p className="ml-4 text-gray-300">001</p>
        <div className="h-px bg-gray-300"></div>
      </div>
    </div>
  );
}
