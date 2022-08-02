import Image from "next/image";

import FeatureImage from "../assets/images/feature_image.jpg";

export default function Hero() {
  return (
    <div className="w-2/6 h-screen mx-auto">
      <div className="relative w-6/12 h-2/5">
        <Image src={FeatureImage} layout="fill" className="" />
      </div>
    </div>
  );
}
