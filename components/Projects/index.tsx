"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import projects, { Project } from "./data";
import { ChevronRight } from "lucide-react";
import ProjectInfo from "./ProjectInfo";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelected = (project: Project | null) => {
    setSelectedProject(project)
  }

  return (
    <section id="Collaborations" className="mt-[80px] px-4 xs:px-0">
      {/* TITLE */}
      <div className="flex gap-8 mb-8 place-items-center jutify-between">
        <div className="flex-1 text-center">
          <h1 className="text-lg font-bold">Project</h1>
          <h1 className="text-3xl font-bold">Collaborations</h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Here are the projects on which I collaborated. These projects enabled me to get the necessary expertise and experience for my profession.
          </p>
        </div>
      </div>
      {/* PROJECTS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-14">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="relative transition duration-700 shadow-lg min-h-[200px] sm:max-w-none max-w-xs px-4 py-12 rounded-2xl bg-gray-100 dark:bg-slate-800 my-7 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 dark:border-slate-700 sm:mx-0 mx-auto">
            <div className="absolute -translate-x-1/2 -top-12 left-1/2 w-fit h-fit">
              <div className={`absolute animate-pulse origin-center rounded-full blur-xl h-full w-full opacity-80 dark:opacity-60 ${project.image.background}`}></div>
              <Image
                className="relative origin-center rotate-12"
                alt="sample-project"
                src={project.image.url}
                height={project.image?.dimensions?.height ?? 80}
                width={project.image?.dimensions?.width ?? 80}
              />
            </div>
            <div className="relative my-auto text-center -translate-y-1/2 top-1/2 space-y-4">
              <div>
                <div className="flex flex-col items-center justify-center gap-2 mb-3">
                  <Link href={project.url} target="_blank" className="font-bold tracking-wide dark:text-gray-200 hover:underline underline-offset-4 decoration-dotted">{project.title}</Link>
                  <span className="px-2 text-xs tracking-wide uppercase bg-yellow-500 rounded-full dark:text-white bg-opacity-20">{project.status}</span>
                </div>
                {/* <Link href={project.url} target="_blank" className="text-xs text-gray-400 dark:text-gray-400">
                  {project?.url?.substring(0, 30) || "www.sample.project.com"}
                </Link> */}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{project.description.substring(0, 115)} . . . <Link href={project.url} target="_blank" className="text-sm text-gray-500 dark:text-gray-400 hover:underline underline-offset-4 decoration-dotted">[Learn more]</Link> </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
