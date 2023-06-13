"use client"

import { useEffect, useState } from 'react'
import Sun from './Sun';
import Moon from './Moon';
import Atmosphere from './Atmosphere';
import Clouds from './Clouds';
import Stars from './Stars';

type TMode = "dark" | "light";

const ColorMode = () => {
  const [mode, setMode] = useState<TMode>(() => {
    const localTheme: TMode = localStorage.getItem("theme") as TMode || "light";
    return localTheme;
  });

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", mode);
  }, [mode])

  return <div className="relative rounded-full w-[90px] h-[45px] p-2 box-border cursor-pointer overflow-hidden shadow-[inset_0px_3px_3px_#09090954,inset_0px_-1px_3px_#e3e3e378]" onClick={() => setMode(prev => prev === "light" ? "dark" : "light")}>
    <div className={`relative top-1/2 -translate-y-1/2 rounded-full h-full w-[30px] overflow-hidden shadow-[3px_5px_7px_-4px_#000000eb] z-30 left-0 transition duration-700 ease-in-out ${mode === "light" ? "" : "translate-x-[150%]"}`}>
      <Sun />
      <Moon mode={mode} />
    </div>
    <div className={`absolute h-[200%] w-full transition duration-700 ease-in-out left-0 -top-[100%] ${mode === "light" ? "translate-y-0" : "translate-y-1/2"} `}>
      <Stars />
      <Clouds />
    </div>
    <Atmosphere mode={mode} />
  </div>
}

export default ColorMode