"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[45rem] text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in online courses and learned{" "}
        <span className="font-medium">web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        power of creating things. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js and Firebase
        </span>
        . I’m focused on creating new ideas and improving user experiences by
        constantly learning and adapting.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading
        about finance and economics and learning more about the financial
        markets.
      </p>
    </motion.section>
  );
}
