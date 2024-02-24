"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Since graduating in October 2023, I've dedicated myself to pursuing a
        career in React, accumulating nearly three years of experience in
        developing <span className=" font-bold"> React web applications </span>{" "}
        and creating mobile app using{" "}
        <span className="font-bold">Android Studio</span>. Now, I am keen to
        refine my skills further and actively seeking opportunities to
        contribute to web development projects.
      </p>
      <p>
        With a degree in <span className="font-bold">Computer Engineering</span>{" "}
        from PUP Manila, I am excited to immerse myself in the dynamic realm of
        web development, particularly focusing on{" "}
        <span className="font-bold">Next.js and React.</span> My comprehensive
        education has endowed me with a deep understanding of both software and
        hardware, which I believe will be instrumental in crafting efficient web
        applications.
      </p>
    </motion.section>
  );
}
