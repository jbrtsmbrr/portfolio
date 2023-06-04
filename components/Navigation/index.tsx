import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <section className="sticky top-0 z-50 backdrop-blur-[6px]">
      <div className="grid grid-cols-3 py-4 max-w-lg mx-auto md:max-w-2xl lg:max-w-3xl box-border">
        <div>
          <p className="font-bold">Joe Bert</p>
        </div>
        <div className="col-span-2 ml-auto">
          <ul className="flex gap-4">
            <li className="font-semibold">
              <Link href="#">
                Home
              </Link>
            </li>
            <li>
              <Link href="#">
                Skills
              </Link></li>
            <li>
              <Link href="#">
                Blogs
              </Link></li>
            <li>
              <Link href="#">
                Testimonials
              </Link></li>
            <li>
              <Link href="#">
                Contact me
              </Link></li>
            <li>
              <Image alt="dark-mode" src="/assets/icons/icons8-dark-mode-48.png" width={24} height={24}/>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navigation