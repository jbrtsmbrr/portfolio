import Image from "next/image";
import React from "react";

const projects = [
  {
    title: "TrackMe Suite",
    image: {
      url: "/assets/logos/trackme-suite-logo.ico",
      background: "rgba(255, 143, 0, 0.20)"
    },
    description:
      "TrackMe Suite is designed to enhance the operational efficiency of businesses through smart integration of location technology, information, and services. With capabilities ranging from fleet management to delivery monitoring that supports entire supply chain and logistics processes.",
  },
  {
    title: "CosMos",
    image: {
      url: "/assets/logos/trackme-suite-logo.ico",
      background: "rgba(255, 143, 0, 0.20)"
    },
    description:
      "Android-based and Web-based Home Power Monitoring System [Consumption Monitoring System (CosMos)] is genuinely fitted for anyone who's taking the safeness of the house and for does who is conscious to their electric consumption seriously because of the electronic appliances used.",
  },
  {
    title: "Petron: PDVIZ",
    image: {
      url: "/assets/logos/trackme-suite-logo.ico",
      background: "rgba(255, 143, 0, 0.20)"
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, modi sapiente deserunt voluptatibus accusamus exercitationem facere molestiae expedita ad.",
  },
];

const Projects = () => {
  return (
    <section className="mt-[80px] px-4 xs:px-0">
      <div className="flex place-items-center jutify-between mb-8 gap-8">
        <div className="relative h-full">
          <div className="absolute h-1/2 w-full -top-1/3 -translate-y-1/3 z-negative">
            <div className="absolute mix-blend-multiply top-0 -right-9 w-72 h-72 bg-green-300 rounded-full filter blur-3xl opacity-70 animate-grow"></div>
            <div className="absolute mix-blend-multiply top-0 -right-4 w-72 h-72 bg-amber-200 rounded-full filter blur-3xl opacity-70 animate-grow animtation-delay-2000"></div>
            <div className="absolute mix-blend-multiply top-12 -left-12 w-72 h-72 bg-orange-300 rounded-full filter blur-3xl opacity-70 animate-grow animation-delay-4000"></div>
          </div>
          <div className="max-[600px]:hidden">
            <Image
              alt="learning"
              src="/assets/illustrations/3d-casual-life-solleagues-discussing-team-project.png"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="flex-1 text-right">
          <h1 className="font-bold">Project Collaborations</h1>
          <p className="mt-3 text-gray-500">
            These are the skills I have at the moment. you will notice some of
            them have lower opacity than others, that is because I'm still
            exploring those tools.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {projects.map((project) => (
          <div className="shadow-lg min-h-[200px] p-4 rounded-2xl bg-white">
            <div className="my-2">
              <Image
                alt="sample-project"
                src={project.image.url}
                height={60}
                width={60}
                className="p-1 rounded-md"
                style={{ background: project.image.background }}
              />
            </div>
            <div>
              <div>
                <h1 className="font-bold">{project.title}</h1>
                <span className="text-xs text-gray-400">
                  www.apollo-client.com
                </span>
              </div>
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
