"use client";
import Image from "next/image";
import React from "react";
import { Karla } from "next/font/google";

const roboto = Karla({
  weight: ["400", "700"],
  // style: ['normal', 'italic'],
  subsets: ["latin"],
  display: "swap",
});

type TMenu = {
  name: string;
};
const menu: TMenu[] = [
  { name: "Home" },
  { name: "Skills" },
  { name: "Collaborations" },
  { name: "Blogs" },
  { name: "Testimonials" },
  { name: "Contact" },
];

const currentDate = new Date();

const Footer = () => {

  const handlePageNavigation = (section: TMenu) => {
    let element: any = document.getElementById(section.name);
    let headerOffset: any = document.getElementById("header-navigation")?.offsetHeight;
    let elementYOffset = element?.getBoundingClientRect().top;
    let yOffsetPosition = elementYOffset + window.pageYOffset - (headerOffset + 18);
    window.scrollTo({
      behavior: 'smooth',
      top: element ? yOffsetPosition : 0
    });
  }

  return (
    <section id="Footer" className="relative px-4 xs:px-0 h-[300px]">
      <div className="relative flex place-items-center jutify-between mb-8 gap-8">
        <div className="relative h-full">
          <div className="absolute h-1/2 w-full -top-1/3 -translate-y-1/3 z-negative">
            <div className="absolute mix-blend-multiply top-0 -right-9 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-70 dark:opacity-30 animate-grow"></div>
            <div className="absolute mix-blend-multiply top-0 -right-4 w-72 h-72 bg-gray-200 rounded-full filter blur-3xl opacity-70 dark:opacity-20 animate-grow animtation-delay-2000"></div>
            <div className="absolute mix-blend-multiply top-12 -left-12 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl opacity-70 dark:opacity-30 animate-grow animation-delay-4000"></div>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg sm:p-8 p-6 flex flex-col sm:items-center items-right justify-center gap-4">
        <h1 className="text-xl font-bold sm:text-center text-right">Joe Bert</h1>
        <div>
          <ul className="grid sm:grid-cols-6 grid-cols-2 sm:gap-0 gap-2 sm:justify-center justify-end sm:items-center">
            {menu.map((m, i) => (
              <li className={`text-gray-600 dark:text-gray-400 col-span-1 sm:text-center text-right`}>
                <span onClick={() => handlePageNavigation(m)} className="cursor-pointer">
                  {m.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-4 sm:ml-0 ml-auto">
          <ul className="flex gap-4">
            <li>
              <a href="https://github.com/jbrtsmbrr" target="_blank">
                <Image
                  alt="github"
                  src="/assets/icons/icons8-github.svg"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/joe-bert-sembrero-0a7977198"
                target="_blank"
              >
                <Image
                  alt="github"
                  src="/assets/icons/icons8-linkedin.svg"
                  width={25}
                  height={25}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.messenger.com/t/100006549167056"
                target="_blank"
              >
                <Image
                  alt="github"
                  src="/assets/icons/icons8-facebook.svg"
                  width={25}
                  height={25}
                />
              </a>
            </li>
          </ul>
        </div>
        <p className="absolute bottom-1 sm:left-1/2 sm:-translate-x-1/2 text-slate-400 left-auto sm:right-auto right-7">Joe Bert &copy; {currentDate.getFullYear()}</p>
      </div>
    </section>
  );
};

export default Footer;
