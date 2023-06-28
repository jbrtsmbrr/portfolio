import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "TrackMe Suite",
    image: {
      url: "/assets/illustrations/casual-life-3d-planet-yellow.png",
      background: "drop-shadow-[0px_10px_30px_rgba(255,143,0,1)]"
    },
    url: "https://trackme.com.ph/products/logistics/",
    description:
      "TrackMe Suite is designed to enhance the operational efficiency of businesses through smart integration of location technology, information, and services. With capabilities ranging from fleet management to delivery monitoring that supports entire supply chain and logistics processes.",
    tags: ["Current"]
  },
  {
    title: "Capstone Portal",
    image: {
      url: "/assets/illustrations/business-3d-side-view-of-coffee-paper-cup-with-sleeve.png",
      background: "drop-shadow-[0px_10px_30px_rgba(196,148,85,1)]"
    },
    url: "https://capstone-portal.netlify.app/projects",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, modi sapiente deserunt voluptatibus accusamus exercitationem facere molestiae expedita ad.",
    tags: ["Recent"]
  },
  {
    title: "CosMos",
    image: {
      url: "/assets/illustrations/casual-life-3d-game-controller.png",
      background: "drop-shadow-[0px_10px_30px_rgba(138,194,202,1)]"
    },
    url: "https://capstone-portal.netlify.app/projects",
    description:
      "Android-based and Web-based Home Power Monitoring System [Consumption Monitoring System (CosMos)] is genuinely fitted for anyone who's taking the safeness of the house and for does who is conscious to their electric consumption seriously because of the electronic appliances used.",
    tags: ["Old"]
  },
  // {
  //   title: "Petron: PDVIZ",
  //   image: {
  //     url: "/assets/logos/trackme-suite-logo.ico",
  //     background: "rgba(255, 143, 0, 0.20)"
  //   },
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, modi sapiente deserunt voluptatibus accusamus exercitationem facere molestiae expedita ad.",
  // },
];

const Projects = () => {
  return (
    <section id="Collaborations" className="mt-[80px] px-4 xs:px-0">
      <div className="flex place-items-center jutify-between mb-8 gap-8">
        {/* <div className="relative h-full">
          <div className="absolute h-1/2 w-full -top-1/3 -translate-y-1/3 z-negative">
            <div className="absolute mix-blend-multiply top-0 -right-9 w-72 h-72 bg-green-300 rounded-full filter blur-3xl opacity-70 dark:opacity-30 animate-grow"></div>
            <div className="absolute mix-blend-multiply top-0 -right-4 w-72 h-72 bg-amber-200 rounded-full filter blur-3xl opacity-70 dark:opacity-30 animate-grow animtation-delay-2000"></div>
            <div className="absolute mix-blend-multiply top-12 -left-12 w-72 h-72 bg-orange-300 rounded-full filter blur-3xl opacity-70 dark:opacity-30 animate-grow animation-delay-4000"></div>
          </div>
          <div className="max-[600px]:hidden">
            <Image
              alt="learning"
              src="/assets/illustrations/3d-casual-life-group-of-young-people-discussing-something-while-working.png"
              width={250}
              height={250}
            />
          </div>
        </div> */}
        <div className="flex-1 text-center">
          <h1 className="font-bold text-lg">Projects</h1>
          <h1 className="font-bold text-3xl">Collaborations</h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            These are the skills I have at the moment. you will notice some of
            them have lower opacity than others, that is because I'm still
            exploring those tools.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 mt-14">
        {projects.map((project) => (
          <div className="relative shadow-lg min-h-[200px] sm:max-w-none max-w-xs px-4 py-12 rounded-2xl bg-gray-100 dark:bg-slate-800 my-7 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 dark:border-slate-700 sm:mx-0 mx-auto">
            {/* <div className="relative my-2"> */}
              <Image
                className={`filter ${project.image.background} absolute -top-12 left-1/2 -translate-x-1/2`}
                alt="sample-project"
                src={project.image.url}
                height={80}
                width={80}
                // className="p-1 rounded-lg shadow-lg"
                // style={{ background: project.image.background }}
              />
            {/* </div> */}
            <div className="relative top-1/2 -translate-y-1/2 text-center my-auto">
              <div>
                <h1 className="font-bold dark:text-gray-200">{project.title}</h1>
                <Link href={project.url} target="_blank" className="text-xs text-gray-400 dark:text-gray-400">
                  {project?.url?.substring(0, 30) || "www.sample.project.com"}
                </Link>
              </div>
              <p className="text-sm dark:text-gray-300">{project.description.substring(0, 100)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
