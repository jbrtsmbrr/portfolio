import React from 'react'
import { Sheet, SheetContent } from '../ui/sheet'
import { ArrowLeft, ExternalLink, Github, Globe, LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from './data'

interface ProjectInfoProps {
  project: Project | null;
  onSelectedProjectChange: (project: Project | null) => void;
}

const ProjectInfo = ({ project, onSelectedProjectChange }: ProjectInfoProps) => {
  return (
    <Sheet open={!!project} onOpenChange={() => onSelectedProjectChange(null)}>
      {project && <SheetContent className="fixed sm:max-w-none w-[580px] flex flex-col p-0 gap-0 border-none">
        {/* Header */}
        <div className="sticky top-0 flex items-center gap-2 p-8 py-6 shadow-sm">
          <ArrowLeft size={16} color="gray" />
          <p
            onClick={() => onSelectedProjectChange(null)}
            className="text-sm font-semibold hover:underline underline-offset-2 cursor-pointer"
          >
            Back to projects
          </p>
        </div>
        {/* Main Content */}
        <div className="relative overflow-y-auto max-h-full px-8 py-4">
          {/* Title & Body */}
          <div className="h-fit flex flex-col gap-4 py-4">
            <div>
              <p className="tracking-normal font-bold text-2xl">{project.title}</p>
              <p className="tracking-tight">{project.description}</p>
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
          <div className="h-fit flex flex-col gap-4 pt-4 pb-2">
            <p className="tracking-normal font-bold text-2xl">About</p>
            <p className="tracking-tight">
              {project.description_full}
            </p>
          </div>
          {/* Technologies */}
          <div className="h-fit flex flex-col gap-4 pt-4 pb-2">
            <p className="tracking-normal font-bold text-2xl">Technologies</p>
            <div className="flex gap-2">
              {project.technologies.map(tech => (
                <span className="py-1 px-3 text-xs tracking-wide font-semibold bg-yellow-500 rounded-full dark:text-white bg-opacity-20 border border-yellow-500">{tech}</span>
              ))}
            </div>
          </div>
          {/* Website */}
          <div className="h-fit flex flex-col gap-2 pt-4 pb-2">
            <div className="flex gap-2 items-center">
              <Globe size={18} />
              <p className="tracking-normal font-bold text-2xl">Website</p>
            </div>
            <Link target="_blank" href={project.url} className="hover:underline underline-offset-0 w-fit tracking-tight font-semibold">{project.url}</Link>
          </div>
          {/* Repository */}
          {project.repository_url && (
            <div className="h-fit flex flex-col gap-2 pt-4 pb-2">
              <div className="flex gap-2 items-center">
                <Github size={18} />
                <p className="tracking-normal font-bold text-2xl">Repository</p>
              </div>
              <Link
                target="_blank"
                href={project.repository_url}
                className="hover:underline underline-offset-0 w-fit tracking-tight font-semibold"
              >
                {project.repository_url}
              </Link>
            </div>
          )}
          {/* Other links */}
          {project.other_links && (
            <div className="h-fit flex flex-col gap-2 pt-4 pb-2">
              <div className="flex gap-2 items-center">
                <LinkIcon size={18} />
                <p className="tracking-normal font-bold text-2xl">Related links</p>
              </div>
              {project.other_links.map(link => (
                <Link
                target="_blank"
                href={link}
                className="hover:underline underline-offset-0 w-fit tracking-tight font-semibold"
              >
                {link}
              </Link>
              ))}
            </div>
          )}
        </div>
        {/* Footer */}
        {project.url && <div className={`bg-blue-600 h-[80px] w-full flex items-center justify-center gap-4 shadow-md`}>
          <Link target="_blank" href={project.url} className="font-semibold text-md tracking-wide text-white hover:underline underline-offset-2">Open Project</Link>
          <ExternalLink size={18} className="text-white" />
        </div>}
      </SheetContent>}
    </Sheet>
  )
}

export default ProjectInfo