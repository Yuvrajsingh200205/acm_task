"use client"
import React from 'react'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
    // accessToken: string;
}

const Post = () => {

    const p_ref = useRef(null);

    const [showPass, setShowPass] = useState(false);

    const sendLogin = async (e:any) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const response = await fetch('/api/post', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            console.error('Failed to login');
            return;
        }
        const data = await response.json();
        console.log(data);
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
        <div className="max-w-3xl mx-auto p-6 my-12 transition-none opacity-0" ref={p_ref}>
            <h2 className="text-4xl font-bold dark:text-white text-black my-6 text-center">Admin Login</h2>
            <form className="flex flex-col gap-4" onSubmit={sendLogin}>
                <input type="text" name='username' placeholder='Username' />
                <div className="relative">
                    <input type={showPass ? "text" : "password"} id='password' name='password' placeholder='Password' />
                    <input type="checkbox" id='showPass' onChange={() => setShowPass(!showPass)} />
                </div>
                <input type="submit" className='col-span-3 cursor-pointer border-0 bg-blue-600 dark:bg-blue-600 text-white' />
            </form>
        </div>
    )
}

export default function Home({}: Props) {

    return (
        <main className="bg-white dark:bg-gray-900 min-h-screen pt-16">
    
            {/* Navbar */}
        
            <Navbar active={4} />

            {/* Post */}

            <Post />
    
            {/* Footer */}

            <Footer />
        </main>
    )
  }
