import React from "react";
import ProjectItem from "./ProjectItem";
import Image from "next/image";
import portfolioImg from "../public/assets/projects/website.png";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Personal Portfolio Website"
            bgImg={portfolioImg}
            projectUrl="/portfolio"
            tech="Next.JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
