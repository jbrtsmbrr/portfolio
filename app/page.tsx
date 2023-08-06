import Banner from "@/components/Banner";
import HardSkills from "@/components/HardSkills"
import Blogs from "@/components/Blogs";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Contact from "@/components/Contact";
import logger from "@/components/__utils/log";

const addLogs = async (module: string, description?: string) => {
  const response = await fetch(`${process.env.BASE_URL}/logs`, {
    method: "POST",
    body: JSON.stringify({ module, description }),
    cache: "no-store"
  })

  const result = await response.json();

  return result;
}

export default async function Home() {
  await addLogs("PAGE_LOADED");
  return (
    <div className="max-w-lg mx-auto md:max-w-2xl lg:max-w-3xl xs:px-4 sm:overflow-visible overflow-hidden">
      <Banner />
      <HardSkills />
      <Projects />
      <Blogs />
      <Testimonials />
      <Contact />
    </div>
  )
}
