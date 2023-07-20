import fs from "fs";
import matter from "gray-matter";

export type TBlog = {
  title: string,
  date: string,
  subtitle: string,
  slug: string
}

const getBlogsMetadata = (): TBlog[] => {
  const folder = "public/assets/blogs/";
  const files = fs.readdirSync(folder);
  const blogPosts = files.filter(file => file.endsWith(".md"));
  // const slugs = blogPosts.map(file => file.replace(".md", ""))
  const blogs = blogPosts.map(file => {
    const contents = fs.readFileSync(`${folder}${file}`, "utf-8");
    const gmResult = matter(contents);
    return {
      title: gmResult.data.title,
      date: gmResult.data.date,
      subtitle: gmResult.data.subtitle,
      slug: file.replace(".md", ""),
    }
  })

  return blogs;
}

export default getBlogsMetadata;