"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";

type ProjectProps = {
  demoLink?: string;
  description: string;
  githubLink?: string;
  icons: readonly string[];
  imageUrl: StaticImageData;
  title: string;
  urlLink?: string;
};

export default function Project({
  demoLink,
  description,
  githubLink,
  icons,
  imageUrl,
  title,
  urlLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-3 sm:mb-8 last:mb-0 group"
    >
      <section className="relative bg-gray-100 hover:bg-gray-200 dark:hover:bg-white/20 dark:bg-white/10 sm:pr-8 border border-black/5 rounded-lg max-w-[58rem] lg:min-h-[21rem] dark:text-white transition overflow-hidden">
        <div className="flex flex-col px-5 pt-4 md:pt-10 md:pr-2 pb-7 md:pl-10 lg:max-w-[50%] h-full">
          <h3 className="mb-4 font-semibold text-2xl">{title}</h3>
          <ul className="flex flex-wrap gap-2 sm:mt-auto mb-3">
            <p className="font-bold text-gray-500 dark:text-white/70">
              Made with:{" "}
            </p>
            {icons.map((icon, iconIndex) => (
              <Icon key={iconIndex} icon={icon} className="mr-3 text-2xl" />
            ))}
          </ul>
          <p className="mt-2 mb-3 text-gray-700 dark:text-white/70 leading-relaxed">
            {description}
          </p>
          <div className="flex">
            {urlLink && (
              <a
                href={urlLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#111827] mr-2 px-4 py-2 rounded-full text-white hover:scale-105"
              >
                <Icon className="mr-1" icon="bx:link-external" /> Live
              </a>
            )}

            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#111827] mr-2 px-4 py-2 rounded-full text-white hover:scale-105"
              >
                <Icon icon="ant-design:youtube-filled" className="mr-1" /> Demo
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border-[#111827] dark:border-white mr-2 px-4 py-2 border dark:border-opacity-40 rounded-full text-[#111827] hover:scale-105 dark:text-white"
              >
                <Icon
                  className="opacity-70 mr-1"
                  icon="ant-design:github-fill"
                />{" "}
                <span className="opacity-70">GitHub</span>
              </a>
            )}
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="lg:block top-[60px] -right-10 absolute hidden shadow-2xl rounded-t-lg w-[28.25rem] transition scale-[1.0] lg:scale-[1.1]"
        />
      </section>
    </motion.div>
  );
}
