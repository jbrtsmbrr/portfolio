import React from 'react'

const Clouds = () => {
  return (
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
  )
}

export default Clouds