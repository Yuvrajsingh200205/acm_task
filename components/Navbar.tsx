
import { useEffect, useState } from "react";

type Props = {
    active: number;
}

export default function Navbar({active}: Props) {
    
    const [theme, setTheme] = useState("");
    const [Nav, setNav] = useState(true);
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeChange = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };
    return (
        
      <nav className="w-full h-20 fixed top-0 bg-white dark:bg-gray-900 z-30">
      <div className="flex items-center justify-between h-full max-w-5xl mx-auto p-6">
        <img src="/next.svg" alt="logo" className="h-4 invert-0 dark:invert" />
        <div className="space-x-8 hidden md:block">
          <a href="/" className={active == 0 ? "dark:text-white text-black" : "text-gray-600 dark:text-gray-400"}>
            Home
          </a>
          <a href="#" className={active == 1 ? "dark:text-white text-black" : "text-gray-600 dark:text-gray-400"}>
            Blog
          </a>
          <a href="/blog/post-1" className={active == 2 ? "dark:text-white text-black" : "text-gray-600 dark:text-gray-400"}>
            Single Post
          </a>
          <a href="/admin" className={active == 3 ? "dark:text-white text-black" : "text-gray-600 dark:text-gray-400"}>
            Admin
          </a>
          <a href="/admin/login" className={active == 4 ? "dark:text-white text-black" : "text-gray-600 dark:text-gray-400"}>
            Login
          </a>
        </div>
        <div className="flex items-center gap-12 z-40">
          <button
            onClick={handleThemeChange} 
            className="outline-none  bg-black/15 dark:bg-blue-600 p-1 w-14 rounded-full h-8 pl-1 dark:pl-7 text-black dark:text-white"
          >
            <div className="h-6 w-6 bg-white shadow-md rounded-full flex items-center justify-center">
              <div className="h-4 w-4 bg-[url('/themeButton.svg')] bg-cover bg-left dark:bg-right"></div>
            </div>
          </button>
          <button 
            onClick={()=>{setNav(!Nav)}} 
            className="w-6 h-6 bg-[url('/navButton.svg')] bg-cover dark:invert md:hidden outline-none" 
            style={Nav ? {backgroundPosition: "left"} : {backgroundPosition: "right"}}
          ></button>
        </div>
        <div className="md:hidden fixed inset-y-0 w-96 bg-white dark:bg-slate-900 drop-shadow-md p-6 pt-20 text-right z-20" style={Nav ? {right: "-24rem"} : {right: "0"}}>
          <div className="flex flex-col gap-6 font-semibold tracking-tighter text-lg">
            <a href="/" className={active == 0 ? "dark:text-white text-black" : "text-gray-600 dark:text-gray-400"}>
              Home
            </a>
            <a href="#" className={active == 1 ? "dark:text-white text-black" : "text-gray-600 dark:text-gray-400"}>
              Blog
            </a>
            <a href="/blog/post-1" className={active == 2 ? "dark:text-white text-black" : "text-gray-600 dark:text-gray-400"}>
              Single Post
            </a>
            <a href="/admin" className={active == 3 ? "dark:text-white text-black" : "text-gray-600 dark:text-gray-400"}>
              Admin
            </a>
            <a href="/admin/login" className={active == 4 ? "dark:text-white text-black" : "text-gray-600 dark:text-gray-400"}>
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
    )
}