"use client";
import Image from "next/image";
import React from "react";
import { Karla } from "next/font/google";
import useStore from "@/src/store";

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

  const setCurrentSection = useStore(store => store.setCurrentSection);

  return (
    <section id="Footer" className="relative box-border h-[300px]">
      <div className="relative flex gap-8 mb-8 place-items-center jutify-between">
        <div className="relative h-full">
          <div className="absolute w-full h-1/2 -top-1/3 -translate-y-1/3 z-negative">
            <div className="absolute top-0 bg-blue-300 rounded-full mix-blend-multiply -right-9 w-72 h-72 filter blur-3xl opacity-70 dark:opacity-30 animate-grow"></div>
            <div className="absolute top-0 bg-gray-200 rounded-full mix-blend-multiply -right-4 w-72 h-72 filter blur-3xl opacity-70 dark:opacity-20 animate-grow animtation-delay-2000"></div>
            <div className="absolute bg-pink-300 rounded-full mix-blend-multiply top-12 -left-12 w-72 h-72 filter blur-3xl opacity-70 dark:opacity-30 animate-grow animation-delay-4000"></div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 flex flex-col justify-center w-full h-full gap-4 px-6 shadow-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 sm:items-center items-right">
        <h1 className="text-xl font-bold text-right sm:text-center">Joebert</h1>
        <div>
          <ul className="grid justify-end grid-cols-2 gap-2 sm:grid-cols-6 sm:gap-0 sm:justify-center sm:items-center">
            {menu.map((m, index) => (
              <li key={`menu-footer-${index}`} className={`text-gray-600 dark:text-gray-400 col-span-1 sm:text-center text-right`}>
                <span onClick={() => setCurrentSection(m)} className="cursor-pointer">
                  {m.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-4 ml-auto sm:ml-0">
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
        <p className="absolute left-auto bottom-1 sm:left-1/2 sm:-translate-x-1/2 text-slate-400 sm:right-auto right-7">Joebert &copy; {currentDate.getFullYear()}</p>
      </div>
    </section>
  );
};

export default Footer;
