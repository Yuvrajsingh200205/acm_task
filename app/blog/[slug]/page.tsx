import matter from 'gray-matter'
import fs from 'fs'
import { PostMetadata } from "@/components/PostMetadata"
import PostContent from './PostContent'
import { get } from 'http'

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((filename) => {
    const fileContent = fs.readFileSync(`posts/${filename}`, 'utf8')
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      imgUrl: matterResult.data.imgUrl,
      author: matterResult.data.author,
      tag: matterResult.data.tag,
      slug: filename.replace('.md', ''),
    };
  })
  return posts;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

const getPostContent = (slug:string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
}

export default function Home(props: any) {

  const slug = props.params.slug;
  const post = {
    content: getPostContent(slug).content,
    data: {...getPostContent(slug).data}
  };

  return (
    <main>
      <PostContent post={{...post}} />
    </main>
  )
}
