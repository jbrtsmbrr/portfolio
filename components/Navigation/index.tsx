"use client";

import Link from 'next/link'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import ColorMode, { TMode } from './ColorMode';

type TMenu = {
  name: string
}
const menu: TMenu[] = [
  { name: "Home" },
  { name: "Skills" },
  { name: "Collaborations" },
  { name: "Blogs" },
  { name: "Testimonials" },
  { name: "Contact" },
]

const Menu = ({ onPageNavigate }: { onPageNavigate: (section: TMenu) => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <button onClick={() => setOpen(prevOpen => !prevOpen)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800" type="button">
        Menu
        <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div id="dropdown" className={`${open ? "block" : "hidden"} absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 transform -translate-x-1`}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          {menu.map(m => (
            <li>
              <span
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                onClick={() => onPageNavigate(m)}
              >
                {m.name}
              </span>
            </li>))}
        </ul>
      </div>

    </React.Fragment>
  )
}

const Navigation = () => {
  const [selected, setSelected] = useState<TMenu>({ name: "Home" });

  const [mode, setMode] = useState<TMode>("light");

  useLayoutEffect(() => {
    let localTheme: TMode = "light"
    localTheme = window.localStorage.getItem("theme") as TMode || "light";
    setMode(localTheme);
  }, [])

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    window.localStorage.setItem("theme", mode);
  }, [mode])

  const handlePageNavigation = (section: TMenu) => {
    let element: any = document.getElementById(section.name);
    let headerOffset: any = document.getElementById("header-navigation")?.offsetHeight;
    let elementYOffset = element?.getBoundingClientRect().top;
    let yOffsetPosition = elementYOffset + window.pageYOffset - (headerOffset + 18);
    window.scrollTo({
      behavior: 'smooth',
      top: element ? yOffsetPosition : 0
    });

    setSelected(!element ? { name: "Home" } : section)
  }

  return (
    <section id="header-navigation" className="sticky top-0 z-50 backdrop-blur-[6px] px-4 sm:px-0">
      <div className="grid grid-cols-4 py-4 max-w-lg mx-auto md:max-w-2xl lg:max-w-3xl box-border items-center">
        <div>
          <Link href="/" className="font-bold">Joe Bert</Link>
        </div>
        <div className="col-span-3 ml-auto">
          {/* Large Screen Menu */}
          <ul className="hidden lg:flex gap-4 items-center">
            {menu.map(m => (
              <li className={`${selected.name === m.name ? "font-semibold dark:text-gray-100" : "text-gray-600 dark:text-gray-400"}`}>
                <span onClick={() => handlePageNavigation(m)} className="cursor-pointer">
                  {m.name}
                </span>
              </li>
            ))}
            <li>
              {/* <Image alt="dark-mode" src="/assets/icons/icons8-dark-mode-48.png" width={24} height={24} /> */}
              <ColorMode mode={mode} toggleMode={setMode} />
            </li>
          </ul>
          {/* Small Screen Menu */}
          <ul className="flex lg:hidden gap-4 items-center">
            <li>
              <Menu onPageNavigate={handlePageNavigation} />
            </li>
            <li>
              <ColorMode mode={mode} toggleMode={setMode} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navigation