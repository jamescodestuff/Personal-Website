import React from "react";
import ProjectItem from "./ProjectItem";
import portfolioImg from "../public/assets/projects/website.png";
import chessImg from "../public/assets/projects/chess.png";
import foodImg from "../public/assets/projects/food.jpg";
import buymeimg from "../public/assets/projects/buyme.jpg";
import photoImg from "../public/assets/projects/photos.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Android Chess App"
            bgImg={chessImg}
            projectUrl="/chess"
            tech="Android Studio, Java"
          />

          <ProjectItem
            title="Photo Album Application"
            bgImg={photoImg}
            projectUrl="/photos"
            tech="JavaFX"
          />

          <ProjectItem
            title="The Foodie Web Service"
            bgImg={foodImg}
            projectUrl="/TFWS"
            tech="Python & Flask"
          />

          <ProjectItem
            title="BUYME!"
            bgImg={buymeimg}
            projectUrl="/buyme"
            tech="Java & SQL"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
