import Image from "next/image";
import React from "react";


const Contact = () => {
  return (
    <section className="mt-[80px] px-4 xs:px-0 space-y-8 box-border">
      <div className="text-center space-y-2">
        <h4 className="font-bold text-lg">Contact me</h4>
        <h1 className="font-semibold text-3xl">Ask a question</h1>
        <p className="text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident recusandae vel autem molestias adipisci amet beatae accusamus corrupti voluptatum nisi, modi cupiditate ipsa. Culpa quas sint maiores. Maxime, ad amet!</p>
      </div>
      <div className="relative grid grid-cols-2 gap-4 items-center">
        <div className="md:col-span-1 col-span-2">
          <div className="bg-slate-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg p-4">
            <h1 className="font-semibold text-xl text-gray-400 p-2">Say something</h1>
            <input type="text" placeholder="Email" className="dark:bg-gray-700 dark:text-gray-400 w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0 shadow-2xl" />
            <textarea placeholder="Message" className="dark:bg-gray-700 dark:text-gray-400 w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0 shadow-2xl" />
            <button className="w-full mt-2 py-3 bg-blue-500 text-white rounded-lg shadow-md text-xs">Submit</button>
          </div>
        </div>
        <div className="md:relative absolute h-full w-full">
          <Image alt="spaceship" src="/assets/illustrations/3d-casual-life-convert-megaphone.png" width={250} height={250}
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-12 md:block hidden" />
          <div className="absolute top-0 right-0 z-negative">
            <div className="absolute mix-blend-multiply -top-12 right-0 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-70 animate-grow"></div>
            <div className="absolute mix-blend-multiply top-10 right-12 w-72 h-72 bg-violet-400 rounded-full filter blur-3xl opacity-90 animate-grow animtation-delay-2000"></div>
            <div className="absolute mix-blend-multiply md:top-32 md:-left-32 top-8 -left-12 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl opacity-70 animate-grow animation-delay-4000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
