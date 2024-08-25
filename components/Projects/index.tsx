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
    status: "Completed & Maintaining"
  },
  {
    title: "Eventune",
    image: {
      url: "/assets/illustrations/3d-fluency-electronic-music.png",
      background: "bg-[#91C0CA]",
      dimensions: {
        width: 95,
        height: 95
      }
    },
    url: "https://eventune-development.vercel.app/",
    description:
      "Eventune enables us to see list of upcoming music events near you, allowing you to experience a live performance of your favorite artists",
    status: "ongoing"
  },
  // {
  //   title: "Capstone Portal",
  //   image: {
  //     url: "/assets/illustrations/business-3d-side-view-of-coffee-paper-cup-with-sleeve.png",
  //     background: "bg-[#C49455]"
  //   },
  //   url: "https://capstone-portal.netlify.app/projects",
  //   description:
  //     "Capstone Portal allows students to submit their thesis on the internet, allowing professors to quickly review their project and immediately see what has to be changed.",
  //   status: ["Recent"]
  // },
  {
    title: "CosMos",
    image: {
      url: "/assets/illustrations/casual-life-3d-game-controller.png",
      background: "bg-[#8AC2CA]"
    },
    url: "https://www.facebook.com/CosMos.UCC/",
    description:
      "Android-based and Web-based Home Power Monitoring System [Consumption Monitoring System (CosMos)] is genuinely fitted for anyone who's taking the safeness of the house and for does who is conscious to their electric consumption seriously because of the electronic appliances used.",
    status: "Completed"
  },
  {
    title: "TACTIC",
    image: {
      url: "/assets/illustrations/business-3d-planet-earth.png",
      background: "bg-[#87C015]",
      dimensions: {
        width: 80,
        height: 80
      }
    },
    url: "http://tactic-2-dev.webcast-inc.com.ph:3000/",
    description:
      "Store, analyze, and interpret geospatial data relevant to your business through location intelligence to make business decisions and generate valuable insights.",
    status: "upcoming"
  },
];

const Projects = () => {
  return (
    <section id="Collaborations" className="mt-[80px] px-4 xs:px-0">
      <div className="flex gap-8 mb-8 place-items-center jutify-between">
        {/* <div className="relative h-full">
          <div className="absolute w-full h-1/2 -top-1/3 -translate-y-1/3 z-negative">
            <div className="absolute top-0 bg-green-300 rounded-full mix-blend-multiply -right-9 w-72 h-72 filter blur-3xl opacity-70 dark:opacity-30 animate-grow"></div>
            <div className="absolute top-0 rounded-full mix-blend-multiply -right-4 w-72 h-72 bg-amber-200 filter blur-3xl opacity-70 dark:opacity-30 animate-grow animtation-delay-2000"></div>
            <div className="absolute bg-orange-300 rounded-full mix-blend-multiply top-12 -left-12 w-72 h-72 filter blur-3xl opacity-70 dark:opacity-30 animate-grow animation-delay-4000"></div>
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
          <h1 className="text-lg font-bold">Project</h1>
          <h1 className="text-3xl font-bold">Collaborations</h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Here are the projects on which I collaborated. These projects enabled me to get the necessary expertise and experience for my profession.
          </p>
        </div>
      </div>
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
              // className="p-1 rounded-lg shadow-lg"
              // style={{ background: project.image.background }}
              />
            </div>
            <div className="relative my-auto text-center -translate-y-1/2 top-1/2">
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
