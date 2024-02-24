"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/Portrait.JPG"
              alt="My Portrait Image"
              width={192}
              height={192}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem]
            object-cover border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-3xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.7,
              delay: 0.1,
            }}
          >
            👨‍💻
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I am Seiya Miguel Gurango</span>, a
        passionate <span className="font-bold">full-stack developer</span> with
        a keen interest in <span className="font-bold">React JS!</span> With a
        deep understanding of modern web development techniques and enjoys{" "}
        <span className=" italic underline">building web applications</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-5 
            px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-slate-900 text-white px-7 py-3 flex items-center gap-2 
            rounded-full focus:scale-110 outline-none hover:scale-110 hover:bg-slate-950 
            active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 
            outline-none hover:scale-110 active:scale-105 transition cursor-pointer 
            border-black/10 dark:bg-white/10 dark:text-white/80"
          href="/GURANGO CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
                focus:scale-[1.15] hover:scale-110 active:scale-[1.15] transition cursor-pointer
                border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/80"
          href="https://linkedin.com/in/seiya-gurango-739731246"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full 
            text-[1.35rem] focus:scale-[1.15] hover:scale-110 active:scale-[1.15] transition 
            cursor-pointer border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/80"
          href="https://github.com/SeiyaMigeru"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
