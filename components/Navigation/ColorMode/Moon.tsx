import React from 'react'

const Moon = (props: any) => {
  return (<div className={`absolute bg-gray-200 h-full w-full rounded-full shadow-[inset_1px_1px_1px_#ffffff94,inset_-1px_-1px_1px_#00000057] transition duration-500 ease-in-out ${props.mode === "light" ? "translate-x-full" : "translate-x-0"}`}>
    <span className="absolute left-1.5 bottom-1.5 rounded-full h-[10px] w-[10px] bg-gray-400 shadow-[inset_1px_1px_2px_#0000005c]"></span>
    <span className="absolute left-3.5 bottom-5 rounded-full h-[5px] w-[5px] bg-gray-400 shadow-[inset_1px_1px_2px_#0000005c]"></span>
    <span className="absolute left-5 bottom-2 rounded-full h-[6px] w-[6px] bg-gray-400 shadow-[inset_1px_1px_2px_#0000005c]"></span>
  </div>)
}


export default Moon