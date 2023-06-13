import React from 'react'
import Image from "next/image";

const Stars = () => {
  return (
    <div className="relative h-1/2 w-full">
      <img className="absolute top-2 left-3.5" alt="star" src="/assets/icons/icons8-star-24.png" width={8} height={8} />
      <img className="absolute top-4 left-1.5" alt="star" src="/assets/icons/icons8-star-24.png" width={4} height={4} />
      <img className="absolute top-6 left-4" alt="star" src="/assets/icons/icons8-star-24.png" width={3} height={3} />
      <img className="absolute bottom-2 left-3" alt="star" src="/assets/icons/icons8-star-24.png" width={1} height={1} />
      <img className="absolute bottom-1 left-5" alt="star" src="/assets/icons/icons8-star-24.png" width={1} height={1} />

      <img className="absolute top-3 left-8" alt="star" src="/assets/icons/icons8-star-24.png" width={1} height={1} />
      <img className="absolute top-5 left-7" alt="star" src="/assets/icons/icons8-star-24.png" width={1} height={1} />
      <img className="absolute bottom-2 left-8" alt="star" src="/assets/icons/icons8-star-24.png" width={4} height={4} />
      <img className="absolute bottom-4 left-10" alt="star" src="/assets/icons/icons8-star-24.png" width={1} height={1} />

      <img className="absolute top-3 left-10" alt="star" src="/assets/icons/icons8-star-24.png" width={8} height={8} />
    </div>
  )
}

export default Stars