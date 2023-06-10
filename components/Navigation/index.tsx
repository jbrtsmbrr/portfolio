"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type TMenu = {
  name: String
}
const menu: TMenu[] = [
  { name: "Home" },
  { name: "Skills" },
  { name: "Collaborations" },
  { name: "Blogs" },
  { name: "Testimonials" },
  { name: "Contact" },
]

type TMode = "dark" | "light";

const Sun = () => {
  return <span className="absolute bg-yellow-400 h-full w-full rounded-full shadow-[inset_1px_1px_1px_#ffffff94,inset_-1px_-1px_1px_#00000057]"></span>
}

const Moon = (props: any) => {
  return (<div className={`absolute bg-gray-200 h-full w-full rounded-full shadow-[inset_1px_1px_1px_#ffffff94,inset_-1px_-1px_1px_#00000057] transition duration-500 ease-in-out ${props.mode === "light" ? "translate-x-full" : "translate-x-0"}`}>
    <span className="absolute left-1.5 bottom-1.5 rounded-full h-[10px] w-[10px] bg-gray-400 shadow-[inset_1px_1px_2px_#0000005c]"></span>
    <span className="absolute left-3.5 bottom-5 rounded-full h-[5px] w-[5px] bg-gray-400 shadow-[inset_1px_1px_2px_#0000005c]"></span>
    <span className="absolute left-5 bottom-2 rounded-full h-[6px] w-[6px] bg-gray-400 shadow-[inset_1px_1px_2px_#0000005c]"></span>
  </div>)
}

const Athmosphere = (props: any) => {
  return (<div className={`absolute transition duration-700 delay-100 ease-in-out top-0 ${props.mode === "light" ? "-translate-x-1/2" : "translate-x-1/2"} h-full w-[70px] flex items-center justify-center z-negative`}>
    <span className={`absolute h-full w-[170px] rounded-full ${props.mode === "light" ? "bg-blue-500" : "bg-gray-700"}`}></span>
    <span className={`absolute h-full w-[140px] rounded-full ${props.mode === "light" ? "bg-blue-400" : "bg-gray-700"}`}></span>
    <span className={`absolute h-full w-[110px] rounded-full ${props.mode === "light" ? "bg-blue-300" : "bg-gray-600"}`}></span>
    <span className={`absolute h-full w-[80px] rounded-full ${props.mode === "light" ? "bg-blue-200" : "bg-gray-500"}`}></span>
    {/* <span className="absolute h-[50px] w-[50px] bg-blue-300 rounded-full"></span> */}
  </div>)
}

const ColorMode = () => {
  const [mode, setMode] = useState<TMode>("light");

  return <div className="relative rounded-full w-[90px] h-[45px] p-2 box-border cursor-pointer overflow-hidden shadow-[inset_0px_3px_3px_#100e2b61,inset_0px_-2px_3px_#e3e3e3]" onClick={() => setMode(prev => prev === "light" ? "dark" : "light")}>
    <div className={`relative top-1/2 -translate-y-1/2 rounded-full h-full w-[30px] overflow-hidden shadow-[3px_5px_7px_-4px_#000000eb] z-30 left-0 transition duration-700 ease-in-out ${mode === "light" ? "" : "translate-x-[150%]"}`}>
      <Sun />
      <Moon mode={mode} />
    </div>
    <div className={`absolute h-[200%] w-full transition duration-700 ease-in-out left-0 -top-[100%] ${mode === "light" ? "translate-y-0" : "translate-y-1/2"} `}>
      <div className="relative h-1/2 w-full">
        <Image className="absolute top-2 left-3.5" alt="star" src="/assets/icons/icons8-star-24.png" width={8} height={8} />
        <Image className="absolute top-4 left-1.5" alt="star" src="/assets/icons/icons8-star-24.png" width={4} height={4} />
        <Image className="absolute top-6 left-4" alt="star" src="/assets/icons/icons8-star-24.png" width={3} height={3} />
        <Image className="absolute bottom-2 left-3" alt="star" src="/assets/icons/icons8-star-24.png" width={1} height={1} />
        <Image className="absolute bottom-1 left-5" alt="star" src="/assets/icons/icons8-star-24.png" width={1} height={1} />

        <Image className="absolute top-3 left-8" alt="star" src="/assets/icons/icons8-star-24.png" width={1} height={1} />
        <Image className="absolute top-5 left-7" alt="star" src="/assets/icons/icons8-star-24.png" width={1} height={1} />
        <Image className="absolute bottom-2 left-8" alt="star" src="/assets/icons/icons8-star-24.png" width={4} height={4} />
        <Image className="absolute bottom-4 left-10" alt="star" src="/assets/icons/icons8-star-24.png" width={1} height={1} />

        <Image className="absolute top-3 left-10" alt="star" src="/assets/icons/icons8-star-24.png" width={8} height={8} />
      </div>
      <div className="relative h-1/2 w-full">
        <span className="absolute bg-blue-100 h-[30px] w-[30px] rounded-full -right-2"></span>
        <span className="absolute bg-blue-100 h-[20px] w-[20px] rounded-full top-4 right-3"></span>
        <span className="absolute bg-blue-100 h-[30px] w-[30px] rounded-full top-5 right-4"></span>
        <span className="absolute bg-blue-100 h-[20px] w-[20px] rounded-full top-7 right-8"></span>
        <span className="absolute bg-blue-100 h-[30px] w-[30px] rounded-full top-7 right-10"></span>
        <span className="absolute bg-blue-100 h-[20px] w-[20px] rounded-full -bottom-1 left-1"></span>

        <span className="absolute bg-slate-50 h-[30px] w-[30px] rounded-full top-2 -right-4"></span>
        <span className="absolute bg-slate-50 h-[20px] w-[20px] rounded-full top-6 right-0"></span>
        <span className="absolute bg-slate-50 h-[20px] w-[20px] rounded-full -bottom-3 right-3"></span>
        <span className="absolute bg-slate-50 h-[20px] w-[20px] rounded-full -bottom-4 right-6"></span>
        <span className="absolute bg-slate-50 h-[30px] w-[30px] rounded-full -bottom-5 right-9"></span>
        <span className="absolute bg-slate-50 h-[35px] w-[35px] rounded-full -bottom-7 left-0"></span>
      </div>
    </div>
    <Athmosphere mode={mode} />
  </div>
}

const Menu = () => {
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
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {m.name}
              </a>
            </li>))}
        </ul>
      </div>

    </React.Fragment>
  )
}

const Navigation = () => {
  const [selected, setSelected] = useState<TMenu>({ name: "Home" });
  return (
    <section className="sticky top-0 z-50 backdrop-blur-[6px] px-4 sm:px-0">
      <div className="grid grid-cols-4 py-4 max-w-lg mx-auto md:max-w-2xl lg:max-w-3xl box-border items-center">
        <div>
          <Link href="/" className="font-bold">Joe Bert</Link>
        </div>
        <div className="col-span-3 ml-auto">
          {/* Large Screen Menu */}
          <ul className="hidden lg:flex gap-4 items-center">
            {menu.map(m => (
              <li className={`${selected.name === m.name ? "font-semibold" : ""}`}>
                <Link href="#">
                  {m.name}
                </Link>
              </li>
            ))}
            <li>
              {/* <Image alt="dark-mode" src="/assets/icons/icons8-dark-mode-48.png" width={24} height={24} /> */}
              <ColorMode />
            </li>
          </ul>
          {/* Small Screen Menu */}
          <ul className="flex lg:hidden gap-4 items-center">
            <li>
              <Menu />
            </li>
            <li>
              <ColorMode />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navigation