import fs from 'fs';
import matter from "gray-matter"
import { NextRequest, NextResponse } from "next/server";


export function GET(req:NextRequest) {
  const folder = 'posts/';

  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file:any) => {
    return fs.statSync(`posts/${file}`).isFile();
  });
  const posts = markdownPosts.map((filename:any) => {
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
  let sorted = posts.sort((a:any, b:any) => {  
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return NextResponse.json(sorted);
}