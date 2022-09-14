import ProjectContainer from "./ProjectContainer";

import CPAC from "../assets/images/project_images/cpacmockup.png";
import LindoGourmet from "../assets/images/project_images/lindomockup.png";
import PHB from "../assets/images/project_images/phbmockup.png";

export default function Projects() {
  return (
    <div id="projects" className="w-11/12 py-12 mx-auto">
      {/* Project heading */}
      <div className="my-24">
        <h1 className="text-3xl py-2 font-bold font-playfair">projects</h1>
        <div className="w-full h-px bg-black"></div>
      </div>

      {/* Project gallery */}
      <div className="space-y-20 lg:grid grid-cols-4 gap-x-8 gap-y-12 w-full">
        <ProjectContainer
          image={CPAC}
          title={"Castle Point Anime Convention"}
          time={"feb 2022 - present"}
          tags={["frontend", "web design"]}
        />

        <ProjectContainer />
        <ProjectContainer />

        <ProjectContainer
          image={LindoGourmet}
          title={"LindoGourmet"}
          time={"jun 2022 - present"}
          tags={["fullstack", "ecommerce", "web design"]}
        />

        <ProjectContainer />

        <ProjectContainer
          image={PHB}
          title={"Play! Hoboken - Billiards"}
          time={"april 2022 - may 2022"}
          tags={["frontend", "wordpress", "web design"]}
        />

        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
        <ProjectContainer />
      </div>
    </div>
  );
}
