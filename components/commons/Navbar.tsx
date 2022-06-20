import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { VscClose, VscMenu } from "react-icons/vsc";

const Navbar = ({fullPageScroll}: any) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 800) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  const activeClass = (path: string) => {
    return `nav-link ${router.pathname === path ? "nav-link_active" : ""}`;
  };

  return (
    <header
      className={`nav z-20 absolute w-full py-2 
      ${show && " nav_background"}
      ${fullPageScroll && " nav_background"}`}
    >
      <div className="flex items-center justify-between mx-auto max-width">
        <Link href="/">
          <img src="/assets/images/logo.png" alt="Logo" className="z-[200] cursor-pointer" />
        </Link>

        {/* hamburger */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute flex items-center transition-all duration-500 ease-in origin-center cursor-pointer z-[101] md:hidden right-[20px] top-4 hover:scale-105"
        >
          {open ? (
            <VscClose className="text-4xl font-semibold text-white-500 hover:text-accent-500" />
          ) : (
            <VscMenu className="text-4xl text-white-500 hover:text-accent-500" />
          )}
        </div>

        {/* Nav Items */}

        <nav
          className={`md:-z-1 z-[100]  gap-8 flex flex-col md:flex-row md:items-center h-screen md:py-0 py-24 md:px-0 px-8 md:h-auto md:static absolute bg-black md:bg-black/0 left-0 w-full md:w-auto ${
            open ? "top-0 opacity-100" : "top-[-100vh] md:opacity-100 opacity-0"
          }`}
        >
          <Link href="/services">
            <a className={activeClass("/services")}>Services</a>
          </Link>
          <Link href="/projects">
            <a className={activeClass("/projects")}>Projects</a>
          </Link>
          <Link href="/expertise">
            <a className={activeClass("/expertise")}>Expertise</a>
          </Link>
          <Link href="/blogs">
            <a className={activeClass("/blogs")}>Blogs</a>
          </Link>
          <Link href="/contact">
          <div className="z-50 block mt-8 md:hidden">
            <button className="text-center rounded-sm bg-accent py-2 px-4 md:py-2.5 md:px-5 text-sm md:text-sm uppercase  tracking-widest text-white outline-none hover:bg-accent-400">
              GET IN TOUCH
            </button>
          </div>
          </Link>
        </nav>
        {/* Btn */}
        <Link href="/contact" passHref>
          <div
            className={`${router.pathname === "/contact" ? "hidden " : " "}`}
          >
            <div className="z-50 hidden md:block">
              <button className="text-center rounded-sm bg-accent py-2 px-4 md:py-2.5 md:px-5 text-sm md:text-sm uppercase  tracking-widest text-white outline-none hover:bg-accent-800">
                GET IN TOUCH
              </button>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
