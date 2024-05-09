"use client";
import { useEffect, useState } from "react";
import { PostMetadata } from "@/components/PostMetadata"
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Cards = ({posts}: {posts: PostMetadata[]}) => {

  return (
  <div className="grid md:grid-cols-3 gap-6">
      {posts.map((post, i) => {
        const cardRef = useRef(null);

        useEffect(() => {

          const card = cardRef.current;

          gsap.registerPlugin(ScrollTrigger);

          gsap.set(card, { opacity: 0, y:50 });
          ScrollTrigger.create({
            trigger: card,
            onEnter: () => gsap.to(card, { duration: 0.6, opacity: 1, y:0, delay: i*0.2, ease: "power2.inOut"}),
          });
          return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
          };
        }
        , []);
        return (
          <div ref={cardRef} className="transition-none blog-card p-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-slate-800 border-2 rounded-xl">
            <img src={post.imgUrl} alt="featured post" className="w-full h-48 object-cover rounded-lg" />
            <div className="p-2 pt-4">
              <span className="bg-blue-500/20  text-blue-500 font-semibold text-sm py-1 px-2 rounded-md">{post.tag}</span>
              <a href={`/blog/${post.slug}`}><h2 className="text-3xl my-3 font-bold dark:text-white text-black">{post.title}</h2></a>
              <div className="text-gray-500 space-x-6 text-sm"><span className="text-gray-600 dark:text-gray-400">{post.author}</span><span>{post.date}</span></div>
            </div>
          </div>
        );
      })}
    </div>
  )

};

const FeaturedCard = ({post}: {post: PostMetadata}) => {

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
    <div className="max-w-5xl mx-auto relative p-6 opacity-0 transition-none" ref={ft_post}>
      <img src={post.imgUrl} alt="featured post" className="w-full h-96 object-cover rounded-xl mt-8" />
      <div className="rounded-xl md:w-96 w-80 drop-shadow-lg p-6 absolute left-10 -bottom-12 bg-white dark:bg-gray-900 border-gray-200 dark:border-slate-800 border-2">
        <span className="bg-blue-500 dark:bg-blue-500/60 text-white text-sm py-1 px-2 rounded-md">{post.tag}</span>
        <a href={`/blog/${post.slug}`}><h2 className="text-4xl font-bold dark:text-white text-black my-3">{post.title}</h2></a>
        <div className="text-gray-500 space-x-6"><span className="text-gray-600 dark:text-gray-400">{post.author}</span><span>{post.date}</span></div>
      </div>
    </div>
  );
};

export default function Home() {

  const [loading, setLoading] = useState(true);

  const [posts, setPosts] = useState<PostMetadata[]>([]);
  useEffect(() => {
    fetch('/api/readfiles').then((res) => {
      return res.json();
    }).then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen pt-16">

      {/* Navbar */}

      <Navbar active={0} />

      {/* Posts */}

      {loading ? 
      <div className="max-w-5xl mx-auto min-h-[30rem] p-6">
        <h3 className="font-semibold text-lg py-4 text-black dark:text-white">Loading...</h3>
      </div> :
      <>

      {posts.length === 0 ? 
      <div className="max-w-5xl mx-auto min-h-[30rem] p-6">
        <h3 className="font-semibold text-lg py-4 text-black dark:text-white">No Posts Found</h3>
      </div>
      : <>
        <FeaturedCard post={posts[0]} />
        <div className="max-w-5xl mx-auto p-6 my-20">
          <h3 className="font-semibold text-lg py-4 text-black dark:text-white">Recent Posts</h3>
          <Cards posts={posts} />
        </div>
      </>
      }

      {/* Footer */}

      <Footer />
      </>
      }


    </main>
  );
}
