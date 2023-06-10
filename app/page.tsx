import Banner from "@/components/Banner";
import HardSkills from "@/components/HardSkills"
import Blogs from "@/components/Blogs";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="max-w-lg mx-auto md:max-w-2xl lg:max-w-3xl xs:px-4 sm:overflow-visible overflow-hidden">
      <Banner />
      {/* <section className="relative rounded-2xl shadow-lg h-[120px] w-[90%] mx-auto bg-blue-500">

      </section> */}
      <HardSkills />
      <Blogs />
      {/* <Timeline /> */}
      <Testimonials />
      {/* <Projects /> */}
      <Contact />
      {/* <Projects /> */}
    </div>
  )
}
