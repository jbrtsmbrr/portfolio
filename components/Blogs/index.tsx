import Image from "next/image";
import React from "react";
import getBlogsMetadata from "../__utils/getBlogsMetaData";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogs = getBlogsMetadata();
  return (
    <section id="Blogs" className="mt-[80px] px-4 xs:px-0">
      <div className="flex place-items-center jutify-between mb-8 gap-8">
        {/* <div className="relative h-full">
          <div className="absolute h-1/2 w-full -top-1/3 -translate-y-1/3 z-negative">
            <div className="absolute mix-blend-multiply top-0 -right-9 w-72 h-72 bg-green-300 rounded-full filter blur-3xl opacity-70 animate-grow"></div>
            <div className="absolute mix-blend-multiply top-0 -right-4 w-72 h-72 bg-amber-200 rounded-full filter blur-3xl opacity-70 animate-grow animtation-delay-2000"></div>
            <div className="absolute mix-blend-multiply top-12 -left-12 w-72 h-72 bg-orange-300 rounded-full filter blur-3xl opacity-70 animate-grow animation-delay-4000"></div>
          </div>
          <div className="max-[600px]:hidden">
            <Image
              alt="learning"
              src="/assets/illustrations/3d-casual-life-solleagues-discussing-team-project.png"
              width={250}
              height={250}
            />
          </div>
        </div> */}
        <div className="flex-1 text-center">
          <h1 className="font-bold text-lg">Blogs</h1>
          <h1 className="font-bold text-3xl">Check it out!</h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            These are collections of some of the knowledge I have accumulated over the course of my whole career.
            These postings enable me to remember what I have learned.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2">
        {blogs.map((blog, index) => <BlogCard key={`blog-${index}`} blog={blog} />)}
      </div>
    </section>
  );
};

export default Blog;
