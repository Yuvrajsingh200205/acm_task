"use client"
import React from 'react'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Markdown from 'markdown-to-jsx';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
    // accessToken: string;
}

const Post = () => {

    const p_ref = useRef(null);
    const [fileName, setFileName] = useState('Cover Image');
    const [file, setFile] = useState<File | null>(null);

    const sendPost = async (e:any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', e.target.title.value);
        formData.append('author_name', e.target.author_name.value);
        formData.append('img', file as File);
        formData.append('tag', e.target.tag.value);
        formData.append('content', e.target.content.value);
        const response = await fetch('/api/post', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            console.error('Failed to send post');
            return;
        }
        const data = await response.json();
        console.log(data);
    }
    
    const handleFileChange = (e:any) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    useEffect(() => {
        const p = p_ref.current;

        gsap.registerPlugin(ScrollTrigger);

        gsap.set(p, { opacity: 0 });

        ScrollTrigger.create({
            trigger: p,
            onEnter: () => gsap.to(p, { duration: 0.6, opacity: 1, ease: "power2.inOut", delay: 0.2}),
        });
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="max-w-5xl mx-auto p-6 my-12 transition-none opacity-0" ref={p_ref}>
            <h3 className="font-semibold text-lg py-4 text-black dark:text-white">Create New Post</h3>
            <form className="grid md:grid-cols-3 gap-4" onSubmit={sendPost}>
                <input type="text" name='title' placeholder='Post Title' className="md:col-span-3" />
                <input type="text" name='author_name' placeholder='Author Name' />
                <input type="file" name='img' placeholder='Cover Image' id='img_upload' hidden onChange={handleFileChange}/>
                <label htmlFor="img_upload" className={`py-2.5 coverLabel ${fileName === 'Cover Image' ? "" : "text-black dark:text-white"}`}>{fileName}</label>
                <select name="tag" className='categorySelect'>
                    <option value="none" className='text-gray-300 dark:text-slate-700'>Category</option>
                    <option value="Technology" className='text-black dark:text-white'>Technology</option>
                    <option value="Art" className='text-black dark:text-white'>Art</option>
                    <option value="Lifestyle" className='text-black dark:text-white'>Lifestyle</option>
                    <option value="Travel" className='text-black dark:text-white'>Travel</option>
                    <option value="Sports" className='text-black dark:text-white'>Sports</option>
                </select>
                <textarea name="content" placeholder='Post Content in Markdown (.md) format...' className='md:col-span-3 min-h-40 py-2.5'></textarea>
                <input type="submit" className='md:col-span-3 cursor-pointer border-0 bg-blue-600 dark:bg-blue-600 text-white' />
            </form>
        </div>
    )
}

export default function Home({}: Props) {

    return (
        <main className="bg-white dark:bg-gray-900 min-h-screen pt-16">
    
            {/* Navbar */}
        
            <Navbar active={3} />

            {/* Post */}

            <Post />
    
            {/* Footer */}

            <Footer />
        </main>
    )
  }
