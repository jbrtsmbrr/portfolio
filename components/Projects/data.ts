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
    status: "ongoing"
  },
];

export default projects;