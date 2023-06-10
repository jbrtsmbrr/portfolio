import React from 'react'
import fs from "fs";
import Markdown from 'markdown-to-jsx';
import matter from "gray-matter";
import getBlogsMetadata from '@/components/__utils/getBlogsMetaData';

const getBlogPost = (slug: string) => {
  const folder = "public/assets/blogs/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const gmResult = matter(content);
  return gmResult;
}

export const generateStaticParams = () => {
  const blogs = getBlogsMetadata();
  console.log(blogs.map(blog => ({ slug: blog.slug })))
  return [
    { slug: blogs.map(blog => blog.slug) }
  ]
}

const BlogPost = (props: any) => {
  const slug = props.params.slug;
  const blog = getBlogPost(slug);
  return (
    <div className="max-w-2xl mx-auto py-6 px-4">
      <p className="text-sm text-gray-600 font-light">{blog.data.date}</p>
      <h1 className="text-3xl font-bold">{blog.data.title}</h1>
      <p className="text-md text-gray-600">{blog.data.subtitle}</p>
      <article className="prose prose-md">
        <Markdown>{blog.content}</Markdown>
      </article>
    </div>
  )
}

export default BlogPost