import Image from "next/image";

const Banner = () => {
  return (
    <section id="Home" className="relative grid grid-cols-2 md:h-[480px] gap-4 px-4 xs:px-0">
      <div className="flex flex-col-reverse gap-4 md:flex-col">
        <div className="flex justify-center gap-4 md:absolute md:h-full md:-left-14 lg:-left-20 md:flex-col">
          <a href="https://gitlab.com/jbrtsmbrr" target="_blank">
            <Image alt="github" src="/assets/icons/icons8-gitlab.svg" width={27} height={27} />
          </a>
          <a href="https://www.linkedin.com/in/joe-bert-sembrero-0a7977198" target="_blank">
            <Image alt="github" src="/assets/icons/icons8-linkedin.svg" width={25} height={25} />
          </a>
          <a href="https://www.messenger.com/t/100006549167056" target="_blank">
            <Image alt="github" src="/assets/icons/icons8-facebook.svg" width={25} height={25} />
          </a>
        </div>
        <div className="flex flex-col justify-center gap-8 md:h-full">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              Hi, I'm Joe Bert
            </h1>
            <h3 className="text-md text-gray-500 dark:text-gray-400 font-semibold tracking-[0.020em]">Frontend<span className="px-2 text-xl text-gray-400 dark:text-gray-500">&bull;</span>Backend Developer</h3>
            <p className="text-gray-500 text-md dark:text-gray-400">
              Currently, I am working as frontend developer at <a href="https://webcast-inc.com.ph/" target="_blank" className="hover:underline underline-offset-4 decoration-dotted">WebCast Technologies Inc.</a> 🐱‍🏍
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <a href="https://www.linkedin.com/in/joe-bert-sembrero-0a7977198" target="_blank">
              <button className="w-full px-4 py-2 text-sm text-white bg-blue-500 shadow-lg rounded-xl hover:bg-blue-400 active:bg-blue-500">Let's Talk!</button>
            </a>
            <a
              href="/assets/documents/JOE-BERT-SEMBRERO-2024-RESUME.pdf"
              download
              style={{ color: "inherit", textDecoration: "none" }}
            ><button className="w-full px-4 py-2 text-sm text-gray-600 border border-gray-400 border-dashed rounded-xl dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 active:bg-gray-200 active:dark:bg-slate-900">Download Resume</button></a>

          </div>
        </div>
      </div>
      <div className="relative h-full lg:-right-32">
        <div className="absolute w-full h-1/2 top-1/3 -translate-y-1/3 z-negative">
          <div className="absolute top-0 bg-purple-300 rounded-full mix-blend-multiply -left-4 w-72 h-72 filter blur-3xl opacity-70 dark:opacity-30 animate-grow"></div>
          <div className="absolute top-0 bg-yellow-300 rounded-full mix-blend-multiply -right-4 w-72 h-72 filter blur-3xl opacity-70 dark:opacity-30 animate-grow animtation-delay-2000"></div>
          <div className="absolute bg-pink-300 rounded-full mix-blend-multiply top-8 -left-0 w-72 h-72 filter blur-3xl opacity-70 dark:opacity-30 animate-grow animation-delay-4000"></div>
        </div>
        <Image alt="me" src="/assets/illustrations/3d-casual-life-young-man-sitting-with-laptop-and-waving.png" width={200} height={200} className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:block" />
      </div>
    </section>
  )
}

export default Banner