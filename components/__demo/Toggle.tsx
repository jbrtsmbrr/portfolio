"use client";

import React from 'react'
import Waves from './Waves'
import Sun from './Sun';
import Moon from './Moon';
import Stars from './Stars';
import Clouds from './Clouds';

const Toggle = () => {
  const [mode, setMode] = React.useState("light");

  return (
    <div className="relative rounded-full w-[90px] h-[45px] p-2 box-border cursor-pointer overflow-hidden shadow-[inset_0px_3px_3px_#100e2b61,inset_0px_-2px_3px_#e3e3e3]"
      onClick={() => {
        setMode(prevMode => prevMode === "light" ? "dark" : "light")
      }}
    >
      <div className={`relative top-1/2 -translate-y-1/2 rounded-full h-full w-[30px] overflow-hidden shadow-[3px_5px_7px_-4px_#000000eb] z-30 left-0 ${mode === "light" ? "" : "translate-x-[150%]"} transition duration-700 ease-in-out`}>
        <Sun />
        <Moon mode={mode} />
      </div>
      <div className={`absolute h-[200%] w-full left-0 -top-[100%] ${mode === "light" ? "translate-y-0" : "translate-y-1/2"} transition duration-700 ease-in-out`}>
        <Stars />
        <Clouds />
      </div>
      <Waves mode={mode} />
    </div>
  )
}

export default Toggle