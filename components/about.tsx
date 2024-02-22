"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        vehicula elit ut metus dapibus molestie. Etiam id convallis nunc.
        Suspendisse elementum elit at faucibus commodo. Ut tellus orci, viverra
        a maximus ac, facilisis sed tellus. Donec vel quam est.
      </p>
      <p>
        Praesent lorem augue, tempus eu lorem vitae, imperdiet facilisis risus.
        Nullam molestie quis ante id laoreet. Etiam sit amet lacinia tortor.
        Donec lacinia auctor elit ullamcorper mollis. Sed in elit lorem. Fusce
        at arcu nunc. Aenean vitae dui leo. Donec scelerisque volutpat bibendum.
        In hac habitasse platea dictumst.
      </p>
    </motion.section>
  );
}
