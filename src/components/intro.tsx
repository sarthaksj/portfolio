"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import { profiles } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-16 sm:mb-0 px-4 pt-28 sm:pt-36 pb-14 sm:pb-18 w-full text-center particles-section"
    >
      <ParticleContainer />
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.span
            className="right-0 bottom-0 absolute text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mx-auto mt-10 mb-10 px-0 sm:px-4 max-w-[50rem] font-medium text-2xl text-white sm:text-4xl !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Sarthak.</span> I'm a{" "}
        <span className="font-bold">software engineer</span> at{" "}
        <span className="font-bold">BlueStacks</span> in Gurugram, India. I'm
        currently working with Next.js, React.js, tailwind, and Firebase.
      </motion.h1>

      <motion.div
        className="flex flex-row justify-center items-center gap-2 px-4 font-medium text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="flex items-center gap-2 bg-white px-7 py-3 borderBlack rounded-full group outline-none focus:scale-110 hover:scale-105 active:scale-105 text-gray-950 transition cursor-pointer"
          href={profiles.github}
          target="_blank"
        >
          <Icon icon="logos:github" />
        </a>

        <a
          className="flex items-center gap-2 border-2 border-white bg-gray-950 px-7 py-3 border-opacity-40 rounded-full text-white group outline-none focus:scale-105 hover:scale-105 active:scale-105 transition"
          href={profiles.linkedin}
          target="_blank"
        >
          <Icon icon="logos:linkedin" />
        </a>
      </motion.div>
    </section>
  );
}
