"use client"
import React from 'react'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Markdown from 'markdown-to-jsx';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
    post: Post;
}

interface Post {
    content: string;
    data: {
        [x: string]: any;
    }
}

const Post = ({post}: Props) => {

    const ft_post = useRef(null);
  
    useEffect(() => {
      const ft = ft_post.current;
  
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.set(ft, { opacity: 0});
  
      ScrollTrigger.create({
        trigger: ft,
        onEnter: () => gsap.to(ft, { duration: 0.6, opacity: 1, ease: "power2.inOut"}),
      });
      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }, []);

    return (
        <div className="max-w-5xl mx-auto p-6 transition-none opacity-0" ref={ft_post}>
            <span className="bg-blue-500 dark:bg-blue-500/60 text-white text-sm py-1 px-2 rounded-md">{post.data.tag}</span>
            <h2 className="text-4xl font-bold dark:text-white text-black my-3">{post.data.title}</h2>
            <div className="text-gray-500 space-x-6"><span className="text-gray-600 dark:text-gray-400">{post.data.author}</span><span>{post.data.date}</span></div>
            <img src={post.data.imgUrl} alt="featured post" className="w-full h-96 object-cover rounded-xl my-5" />
            <div className='prose text-black dark:text-white'>
            <Markdown>
                {post.content}
            </Markdown>
            </div>
        </div>
    )
}


export default function Home({post}: Props) {
    return (
        <main className="bg-white dark:bg-gray-900 min-h-screen pt-16">
    
            {/* Navbar */}
        
            <Navbar active={2} />

            {/* Post */}

            <Post post={post} />
    
            {/* Footer */}

            <Footer />
        </main>
    )
  }
