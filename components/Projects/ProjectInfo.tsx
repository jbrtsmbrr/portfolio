import React from "react";
import { Sheet, SheetContent } from "../ui/sheet";
import { ArrowLeft, ExternalLink, Github, Globe, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "./data";

interface ProjectInfoProps {
  project: Project | null;
  onSelectedProjectChange: (project: Project | null) => void;
}

const ProjectInfo = ({
  project,
  onSelectedProjectChange,
}: ProjectInfoProps) => {
  return (
    <Sheet open={!!project} onOpenChange={() => onSelectedProjectChange(null)}>
      {project && (
        <SheetContent className="fixed sm:max-w-none w-[580px] flex flex-col p-0 gap-0 border-none">
          <div className="relative overflow-y-auto max-h-full">
            {/* Header */}
            <div className="sticky top-0 inset-x-0 z-10 flex items-center gap-2 p-3 py-3 backdrop-blur-[24px] bg-white/30 dark:bg-slate-800/30 border-b border-white/5">
              <p
                onClick={() => onSelectedProjectChange(null)}
                className="flex items-center gap-2 text-xs tracking-wide font-semibold dark:hover:bg-slate-700/70 cursor-pointer p-2 px-3 bg-white/5 transition-all duration-200 ease-in-out rounded-lg border border-white/5"
              >
                <ArrowLeft size={16} />
                Back to projects
              </p>
              {project.url && (
                <div
                  className={`flex items-center gap-2 text-xs tracking-wide font-semibold dark:hover:bg-slate-700/70 cursor-pointer p-2 px-3 bg-white/5 transition-all duration-200 ease-in-out rounded-lg border border-white/5`}
                >
                  <Link
                    target="_blank"
                    href={project.url}
                  >
                    Live Demo
                  </Link>
                  <ExternalLink size={16} className="text-white" />
                </div>
              )}
            </div>
            {/* Main Content */}
            <div className="relative px-6 pb-6">
              {/* Title & Body */}
              <div className="h-fit flex flex-col gap-4 py-4">
                <div>
                  <p className="tracking-normal font-bold text-lg">
                    {project.title}
                  </p>
                  <p className="tracking-normal text-sm">
                    {project.description}
                  </p>
                </div>
                <Image
                  alt="eventune"
                  src={project.banner_image}
                  height={500}
                  width={500}
                  className="object-cover shadow-xl rounded-xl w-full sm:min-h-[380px]"
                />
              </div>
              {/* About */}
              <div className="h-fit flex flex-col gap-2 pt-4 pb-2">
                <p className="tracking-normal font-bold text-lg">About</p>
                <p className="tracking-normal text-sm">{project.description_full}</p>
              </div>
              {/* Technologies */}
              <div className="h-fit flex flex-col gap-4 pt-4 pb-2">
                <p className="tracking-normal font-bold text-lg">
                  Technologies
                </p>
                <div className="flex gap-2">
                  {project.technologies.map((tech) => (
                    <span className="py-1 px-3 text-xs tracking-wide font-semibold bg-slate-400 rounded-full dark:text-white bg-opacity-20 border border-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Website */}
              <div className="h-fit flex flex-col gap-2 pt-4 pb-2">
                <div className="flex gap-2 items-center">
                  <Globe size={16} />
                  <p className="tracking-normal font-bold text-lg">Website</p>
                </div>
                <Link
                  target="_blank"
                  href={project.url}
                  className="hover:underline underline-offset-2 w-fit tracking-normal font-medium text-sm"
                >
                  {project.url}
                </Link>
              </div>
              {/* Repository */}
              {project.repository_url && (
                <div className="h-fit flex flex-col gap-2 pt-4 pb-2">
                  <div className="flex gap-2 items-center">
                    <Github size={16} />
                    <p className="tracking-normal font-bold text-lg">
                      Repository
                    </p>
                  </div>
                  <Link
                    target="_blank"
                    href={project.repository_url}
                    className="hover:underline underline-offset-2 w-fit tracking-normal font-medium text-sm">
                    {project.repository_url}
                  </Link>
                </div>
              )}
              {/* Other links */}
              {project.other_links && (
                <div className="h-fit flex flex-col gap-2 pt-4 pb-2">
                  <div className="flex gap-2 items-center">
                    <LinkIcon size={16} />
                    <p className="tracking-normal font-bold text-lg">
                      Related links
                    </p>
                  </div>
                  {project.other_links.map((link) => (
                    <Link
                      target="_blank"
                      href={link}
                      className="hover:underline underline-offset-2 w-fit tracking-normal font-medium text-sm"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </SheetContent>
      )}
    </Sheet>
  );
};

export default ProjectInfo;
