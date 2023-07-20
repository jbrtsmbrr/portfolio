import React from 'react'
import { TBlog } from '../__utils/getBlogsMetaData'
import Link from 'next/link'
import logger from '../__utils/log'

const BlogCard = ({ blog }: { blog: TBlog }) => {
  const handleClick = async () => {
    // "use server"
    // await logger("Blogs", `Visited ${blog.slug}`);
  }
  return (
    <div className="transition duration-700 p-4 shadow-lg rounded-lg bg-slate-50 border border-slate-300 border-dashed dark:bg-slate-800">
      <Link onClick={handleClick} href={`blogs/${blog.slug}`} className="hover:underline underline-offset-4 decoration-dotted font-bold text-purple-500 dark:text-purple-400">{blog.title}</Link>
      <p className="text-gray-600 dark:text-gray-400">{blog.subtitle}</p>
      <p className="text-sm dark:text-gray-300">{blog.date}</p>
    </div>
  )
}

export default BlogCard