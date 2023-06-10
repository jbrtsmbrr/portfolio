import Image from "next/image";
import React from "react";
import { Karla } from 'next/font/google'

const roboto = Karla({
  weight: ['400', '700'],
  // style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const messages = [
  {
    name: "Arvy Krizelle Zara",
    position: "UI/UX Designer",
    link: "https://www.linkedin.com/in/arvy-z-9a8112117",
    image: {
      person: "/assets/persons/arvy.jpg",
      company: "/assets/logos/yondu.png",
    },
    message:
      `He is one of the most reliable developer I have work with, as UI/UX Designer it is great working with someone like him who can follow or imitate what exactly is in the wireframe and prototype.\n\nYou can expect to have smooth collaboration, he provides great insights and solutions to the team.`,
  },
  {
    name: "Sarah Jane Sanchez",
    position: "Supervisor, Frontend Development",
    link: "https://www.linkedin.com/in/sarah-jane-sanchez",
    image: {
      person: "/assets/persons/sarah.jpg",
      company: "/assets/logos/webcast.png",
    },
    message:
      `I haven't had a problem with him when assigning tasks and meeting deadlines. He always applies the best practices and up-to-date solutions to every task. You won't be disappointed when you get to work with him. He cooperates well in team discussions and communicates when problems arise. He is always willing to help, accepts challenges, and works professionally.\n\nI wouldn't hesitate to recommend or work with him again.`,
  },
];

const Testimonials = () => {
  console.log(roboto.className)
  return (
    <section className="mt-[80px] px-4 xs:px-0">
      <div className="relative flex place-items-center jutify-between mb-8 gap-8">
        <div className="relative h-full">
          <div className="absolute h-1/2 w-full -top-1/3 -translate-y-1/3 z-negative">
            <div className="absolute mix-blend-multiply top-0 -right-9 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-70 animate-grow"></div>
            <div className="absolute mix-blend-multiply top-0 -right-4 w-72 h-72 bg-gray-200 rounded-full filter blur-3xl opacity-70 animate-grow animtation-delay-2000"></div>
            <div className="absolute mix-blend-multiply top-12 -left-12 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl opacity-70 animate-grow animation-delay-4000"></div>
          </div>
          <div className="max-[600px]:hidden -rotate-12">
            <Image
              alt="learning"
              src="/assets/illustrations/3d-casual-life-convert-megaphone.png"
              width={180}
              height={180}
            />
          </div>
        </div>
        {/* <div className="absolute h-[200px] w-[200px] left-1/2 top-300">
          <div className="absolute h-full w-full z-negative">
            <div className="absolute mix-blend-multiply top-0 -right-9 w-72 h-72 bg-green-300 rounded-full filter blur-3xl opacity-70 animate-grow"></div>
            <div className="absolute mix-blend-multiply top-0 -right-4 w-72 h-72 bg-amber-200 rounded-full filter blur-3xl opacity-70 animate-grow animtation-delay-2000"></div>
            <div className="absolute mix-blend-multiply top-12 -left-12 w-72 h-72 bg-orange-300 rounded-full filter blur-3xl opacity-70 animate-grow animation-delay-4000"></div>
          </div>
        </div> */}
        <div className="flex-1 text-right">
          <h1 className="font-bold">Testimonials</h1>
          <p className="mt-3 text-gray-500">
            These people were my colleagues in my previous and current jobs.<br />Here are the things they say about me:
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {messages.map((item, index) => (
          <div className="flex flex-col-reverse shadow-lg rounded-2xl py-4 px-6 space-y-8 bg-slate-50">
            <div>
              <Image
                alt={`company-${index}`}
                src={item.image.company}
                width={150}
                height={150}
                className="mx-auto"
              />
            </div>
            <div className="flex-1">
              <p className={`${roboto.className} whitespace-pre-wrap text-gray-700 indent-8 text-sm`}>{item.message}</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                alt={`person-${index}`}
                src={item.image.person}
                width={45}
                height={45}
                className="rounded-full"
              />
              <div>
                <span className="block text-sm font-bold hover:underline hover:underline-offset-4 hover:decoration-dotted">
                  <a href={item.link} target="_blank">{item.name}</a>
                </span>
                <span className="text-sm text-gray-600">{item.position}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
