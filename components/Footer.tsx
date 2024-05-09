import { useState, useEffect } from "react";
import Markdown from 'markdown-to-jsx'
import { useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const AboutFooter = () => {
    const ab_f_ref = useRef(null);
  
    useEffect(() => {
      const ab_f = ab_f_ref.current;
  
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.set(ab_f, { opacity: 0, x: -30 });
  
      ScrollTrigger.create({
        trigger: ab_f,
        onEnter: () => gsap.to(ab_f, { duration: 0.6, x:0, opacity: 1, ease: "power2.inOut", delay: 0.2}),
      });
      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }, []);
  
    return (
      <div className="space-y-3 transition-none" ref={ab_f_ref}>
        <h3 className="font-bold text-lg text-black dark:text-white">About Us</h3>
        <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
        <p className="text-gray-600 dark:text-gray-400"><b className="text-black dark:text-white">Email : </b>info@acm.club <br />
        <b className="text-black dark:text-white">Phone : </b>+91 9811X XXXXX</p>
      </div>
    )
  };
  
  const LinksFooter = () => {
    const l_f_ref = useRef(null);
  
    useEffect(() => {
      const l_f = l_f_ref.current;
  
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.set(l_f, { opacity: 0 });
  
      ScrollTrigger.create({
        trigger: l_f,
        onEnter: () => gsap.to(l_f, { duration: 0.6, opacity: 1, ease: "power2.inOut", delay: 0.2}),
      });
      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }, []);
  
    return (
      <div className="flex md:gap-10 gap-32 transition-none" ref={l_f_ref}>
        <div className="space-y-3">
          <h3 className="font-bold text-lg text-black dark:text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-600 dark:text-gray-400">Home</a></li>
            <li><a href="/blog/post-1" className="text-gray-600 dark:text-gray-400">Blog</a></li>
            <li><a href="#" className="text-gray-600 dark:text-gray-400">Single Post</a></li>
            <li><a href="/admin" className="text-gray-600 dark:text-gray-400">Admin</a></li>
            <li><a href="#" className="text-gray-600 dark:text-gray-400">Contact</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="font-bold text-lg text-black dark:text-white">Category</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 dark:text-gray-400">Technology</a></li>
            <li><a href="#" className="text-gray-600 dark:text-gray-400">Art</a></li>
            <li><a href="#" className="text-gray-600 dark:text-gray-400">Lifestyle</a></li>
            <li><a href="#" className="text-gray-600 dark:text-gray-400">Travel</a></li>
            <li><a href="#" className="text-gray-600 dark:text-gray-400">Sports</a></li>
          </ul>
        </div>
      </div>
    )
  }
  
  const NewsLetterFooter = () => {
    const nl_f_ref = useRef(null);
  
    useEffect(() => {
      const nl_f = nl_f_ref.current;
  
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.set(nl_f, { opacity: 0, x: 30 });
  
      ScrollTrigger.create({
        trigger: nl_f,
        onEnter: () => gsap.to(nl_f, { duration: 0.6, x:0, opacity: 1, ease: "power2.inOut", delay: 0.2}),
      });
      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }, []);
  
    return (
      <div className="space-y-3 dark:bg-slate-500/10 p-6 rounded-lg transition-none" ref={nl_f_ref}>
        <h3 className="font-bold text-lg text-black dark:text-white">Newsletter</h3>
        <p className="text-gray-600 dark:text-gray-400">Subscribe to our newsletter to get our latest news.</p>
        <form className="space-y-2">
          <input type="email" placeholder="Enter your email" className="p-2 w-full rounded-md border-2 border-gray-300 dark:border-slate-700 dark:bg-[#0c0f1a] dark:text-white placeholder:text-gray-300 dark:placeholder:text-slate-700" />
          <button className="bg-blue-600 text-white dark:text-white p-2 rounded-md w-full">Subscribe</button>
        </form>
      </div>
    )
  };
  
  const CopyRight = () => {
    const cr_f_ref = useRef(null);
  
    useEffect(() => {
      const cr_f = cr_f_ref.current;
  
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.set(cr_f, { opacity: 0, y: 20 });
  
      ScrollTrigger.create({
        trigger: cr_f,
        onEnter: () => gsap.to(cr_f, { duration: 0.6, opacity: 1, y: 0, ease: "power2.inOut", delay: 0.2}),
      });
      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }, []);
  
    return (<div ref={cr_f_ref} className="transition-none">
      <hr className="border-t-2 border-gray-300 dark:bg-slate-500/20 dark:border-slate-700 my-6" />
      <div className="flex md:flex-row flex-col justify-between md:items-center gap-4">
        <div>
          <img src="/next.svg" alt="logo" className="h-4 invert-0 dark:invert mb-2" />
          <span className="text-gray-600 dark:text-gray-400">© 2024 ACM. All Rights Reserved.</span>
        </div>
        <div className="space-x-6">
          <a href="#" className="text-gray-600 dark:text-gray-400">Terms of Use</a>
          <a href="#" className="text-gray-600 dark:text-gray-400">Privacy Policy</a>
          <a href="#" className="text-gray-600 dark:text-gray-400">Cookie Policy</a>
        </div>
      </div>
      </div>)
  }
  
export default function Footer() {
    return (
        <div className="bg-gray-100 py-10 border-t-2 p-6 overflow-hidden border-gray-300 dark:bg-[#0c0f1a] dark:border-slate-700">
        <div className="max-w-5xl mx-auto text-sm">
          <div className="grid md:grid-cols-3 gap-10">
            
            <AboutFooter />

            <LinksFooter />

            <NewsLetterFooter />

          </div>
          
          <CopyRight />

        </div>
      </div>
    )
}