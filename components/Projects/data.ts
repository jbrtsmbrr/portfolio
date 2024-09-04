interface ProjectImage {
  url: string;
  background?: string;
  dimensions?: {
    width: number;
    height: number;
  };
}

export interface Project {
  title: string;
  image: ProjectImage;
  url: string;
  description: string;
  description_full: string;
  status: string;
  banner_image: string;
  technologies: string[];
  repository_url?: string;
  other_links?: string[];
  theme?: string;
}

const projects: Project[] = [
  {
    title: "TrackMe Suite",
    image: {
      url: "/assets/illustrations/casual-life-3d-planet-yellow.png",
      // background: "drop-shadow-[0px_10px_30px_rgba(255,143,0,1)]",
      background: "bg-[#F7C400]"
    },
    url: "https://tmsuite.trackme.com.ph",
    description:
      "It boosts business efficiency by integrating location technology with services, offering solutions from fleet management to delivery monitoring across the supply chain.",
    status: "Completed & Maintaining",
    description_full: "TrackMe Suite is designed to enhance the operational efficiency of businesses through smart integration of location technology, information, and services. With capabilities ranging from fleet management to delivery monitoring that supports entire supply chain and logistics processes.",
    repository_url: undefined,
    banner_image: "/assets/projects/trackme-suite.png",
    technologies: ["JavaScript", "React", "Material UI", "Node JS", "Google Maps API"],
    other_links: ["https://trackme.com.ph/products/logistics", "https://webcast-inc.com.ph"]
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
    url: "https://eventune-development.vercel.app",
    description:
      "Eventune enables us to see list of upcoming music events near you, allowing you to experience a live performance of your favorite artists",
    status: "ongoing",
    description_full: "Eventune provides the ability to explore a comprehensive list of upcoming music events in your vicinity, granting you the opportunity to immerse yourself in the live performances of your favorite artists and bands, all within a user-friendly platform that keeps you informed and connected to the vibrant local music scene.",
    repository_url: "https://github.com/jbrtsmbrr/eventune",
    banner_image: "/assets/projects/eventune.png",
    technologies: ["Next JS", "TypeScript", "Tailwind"]
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
    url: "https://www.facebook.com/CosMos.UCC",
    description:
      "An Android and web-based Home Power Monitoring System, is ideal for those serious about home safety and monitoring their electricity usage from electronic appliances.",
    status: "Completed",
    description_full: "Android-based and Web-based Home Power Monitoring System [Consumption Monitoring System (CosMos)] is genuinely fitted for anyone who's taking the safeness of the house and for does who is conscious to their electric consumption seriously because of the electronic appliances used.",
    repository_url: undefined,
    banner_image: "/assets/projects/cosmos.png",
    other_links: ["https://www.facebook.com/CosMos.UCC"],
    technologies: ["PHP", "JavaScript", "Arduino", "Android Studio (Java)", "MySQL"]
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
    url: "http://tactic-2-dev.webcast-inc.com.ph:3000",
    description:
      "Store, analyze, and interpret geospatial data relevant to your business through location intelligence to make business decisions and generate valuable insights.",
    status: "ongoing",
    description_full: "Harness the power of location intelligence to store, analyze, and interpret geospatial data that is crucial to your business operations, enabling you to make informed decisions and generate valuable insights that drive strategic growth, optimize processes, and enhance overall business performance.",
    repository_url: "",
    banner_image: "/assets/projects/tactic.png",
    technologies: ["TypeScript", "React", "GraphQL", "Node JS", "Shadcn"],
    other_links: ["https://webcast-inc.com.ph"]
  },
];

export default projects;