import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "TrackMe Suite",
    image: {
      url: "/assets/illustrations/casual-life-3d-planet-yellow.png",
      // background: "drop-shadow-[0px_10px_30px_rgba(255,143,0,1)]",
      background: "bg-[#F7C400]"
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
      background: "bg-[#C49455]"
    },
    url: "https://capstone-portal.netlify.app/projects",
    description:
      "Capstone Portal allows students to submit their thesis on the internet, allowing professors to quickly review their project and immediately see what has to be changed.",
    tags: ["Recent"]
  },
  {
    title: "CosMos",
    image: {
      url: "/assets/illustrations/casual-life-3d-game-controller.png",
      background: "bg-[#8AC2CA]"
    },
    url: "https://www.facebook.com/CosMos.UCC/",
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
          <h1 className="font-bold text-lg">Project</h1>
          <h1 className="font-bold text-3xl">Collaborations</h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Here are the projects on which I collaborated. These projects enabled me to get the necessary expertise and experience for my profession.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 mt-14">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="relative transition duration-700 shadow-lg min-h-[200px] sm:max-w-none max-w-xs px-4 py-12 rounded-2xl bg-gray-100 dark:bg-slate-800 my-7 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 dark:border-slate-700 sm:mx-0 mx-auto">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className={`absolute animate-pulse origin-center rounded-full blur-xl h-[80px] w-[80px] opacity-80 dark:opacity-60 ${project.image.background}`}></div>
              <Image
                className="relative"
                alt="sample-project"
                src={project.image.url}
                height={80}
                width={80}
              // className="p-1 rounded-lg shadow-lg"
              // style={{ background: project.image.background }}
              />
            </div>
            <div className="relative top-1/2 -translate-y-1/2 text-center my-auto">
              <div>
                <Link href={project.url} target="_blank" className="font-bold dark:text-gray-200 block mb-2 hover:underline underline-offset-4 decoration-dotted ">{project.title}</Link>
                {/* <Link href={project.url} target="_blank" className="text-xs text-gray-400 dark:text-gray-400">
                  {project?.url?.substring(0, 30) || "www.sample.project.com"}
                </Link> */}
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-500">{project.description.substring(0, 115)} . . . <Link href={project.url} target="_blank" className="text-sm dark:text-gray-400 text-gray-500 hover:underline underline-offset-4 decoration-dotted">[Read more]</Link> </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
