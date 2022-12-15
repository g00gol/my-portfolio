import ProjectContainer from "./ProjectContainer";

import CPAC from "../assets/images/project_images/cpacmockup.png";
import Shima from "../assets/images/project_images/lindomockup.png";
import Kiki from "../assets/images/project_images/phbmockup.png";

export default function Projects() {
  return (
    <div id="projects" className="w-full flex justify-center">
      {/* Project gallery */}
      <div className="space-y-20 lg:grid grid-cols-2 gap-x-32 gap-y-12 w-9/12 lg:w-10/12 xl:w-6/12 lg:space-y-0">
        <ProjectContainer
          image={CPAC}
          title={"Castle Point Anime Convention"}
          tags={["website", "fullstack", "ui/ux"]}
          links={[["website", "https://cpac.moe/"]]}
        />

        <ProjectContainer
          image={Shima}
          title={"Shima @HackNJIT"}
          tags={["app", "fullstack", "ui/ux"]}
          links={[
            ["devpost", "https://devpost.com/software/shima"],
            ["github", "https://github.com/KevinHa48/Shima"],
          ]}
        />

        <ProjectContainer
          image={Kiki}
          title={"Kiki's Cleaning Service"}
          tags={["game", "frontend"]}
          links={[
            ["itch.io", "https://iscii.itch.io/kikis-cleaning-service"],
            ["github", "https://github.com/iscii/kiki"],
          ]}
        />
      </div>
    </div>
  );
}
