import reactRawImg from "@/public/img/projects/react-raw.png";
import stationImg from "@/public/img/projects/station.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Member Of Technical Staff, UI Development",
    location: "Gurugram, India",
    description:
      "Developed new features using React, Next.js, JavaScript, Tailwind CSS, Firebase. Part of dynamic team to create an innovative B2B web app, now.gg studio, similar to the Google Play Console, allowing game developers to seamlessly publish their games on now.gg.",
    icon: "gg:work-alt",
    date: "January 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "React-Raw",
    description:
      "An open source UI library consisting of raw React components that provides developers with complete control, enabling them to efficiently create complex and customizable user interfaces.",
    icons: [
      "logos:javascript",
      "logos:typescript-icon",
      "logos:nextjs-icon",
      "logos:react",
      "logos:sass",
    ],
    imageUrl: reactRawImg,
    githubLink: "https://github.com/sarthaksj/react-raw",
    urlLink: "https://react-raw.vercel.app/",
  },
  {
    title: "Station",
    description:
      "A social media platform that allows creators to produce content tailored to specific communities. The site features diverse communities where both creators and viewers can explore and engage based on their interests.",
    icons: [
      "logos:javascript",
      "logos:typescript-icon",
      "logos:nextjs-icon",
      "logos:react",
      "logos:sass",
    ],
    imageUrl: stationImg,
    urlLink: "https://stationpreview.vercel.app/",
  },
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "HTML",
    icon: "logos:html-5",
  },
  {
    name: "CSS",
    icon: "logos:css-3",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "tailwindcss",
    icon: "logos:tailwindcss-icon",
  },
  {
    name: "Firebase",
    icon: "logos:firebase",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Jenkins",
    icon: "logos:jenkins",
  },
] as const;

export const profiles = {
  github: "https://github.com/sarthaksj",
  linkedin: "https://www.linkedin.com/in/sarthakjoshi1",
} as const;

export const socialMenu = [
  { label: "github", link: profiles.github },
  { label: "linkedin", link: profiles.linkedin },
] as const;

export const generalInfo = {
  name: "Sarthak Joshi",
  title: "Software Engineer",
  location: "Gurugram, India",
  email: "sarthakjoshi17@gmail.com",
};

export const siteMetadata = {
  siteUrl: "https://sarthakdev.com",
  author: "sarthaksj", // Github username
  mail: generalInfo.email,
  title: "Self-Taught Passionate Web Developer",
  description:
    "Hi there 👋 My name is Sarthak and I am trying to brew something new using web technologies. Welcome to my lab!",
} as const;
