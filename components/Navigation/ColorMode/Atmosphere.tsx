import React from 'react'

const Atmosphere = (props: any) => {
  return (<div className={`absolute transition duration-700 delay-100 ease-in-out top-0 ${props.mode === "light" ? "-translate-x-1/2" : "translate-x-1/2"} h-full w-[70px] flex items-center justify-center z-negative`}>
    <span className={`absolute h-full w-[170px] rounded-full ${props.mode === "light" ? "bg-blue-500" : "bg-gray-700"}`}></span>
    <span className={`absolute h-full w-[140px] rounded-full ${props.mode === "light" ? "bg-blue-400" : "bg-gray-700"}`}></span>
    <span className={`absolute h-full w-[110px] rounded-full ${props.mode === "light" ? "bg-blue-300" : "bg-gray-600"}`}></span>
    <span className={`absolute h-full w-[80px] rounded-full ${props.mode === "light" ? "bg-blue-200" : "bg-gray-500"}`}></span>
    {/* <span className="absolute h-[50px] w-[50px] bg-blue-300 rounded-full"></span> */}
  </div>)
}
export default Atmosphere