import React from "react";

const Waves = ({ mode }: { mode: string }) => {
  return (
    <div className={`absolute top-0 h-full w-[70px] flex items-center justify-center ${mode === "light" ? "-translate-x-1/2" : "translate-x-1/2"} z-negative transition duration-700 ease-in-out`}>
      <span className={`absolute h-full w-[170px] rounded-full ${mode === "light" ? "bg-blue-500" : "bg-gray-700"}`}></span>
      <span className={`absolute h-full w-[140px] rounded-full ${mode === "light" ? "bg-blue-400" : "bg-gray-700"}`}></span>
      <span className={`absolute h-full w-[110px] rounded-full ${mode === "light" ? "bg-blue-300" : "bg-gray-600"}`}></span>
      <span className={`absolute h-full w-[80px] rounded-full ${mode === "light" ? "bg-blue-200" : "bg-gray-500"}`}></span>
    </div>
  )
}

export default Waves