import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      {/* <div className="flex flex-col items-center px-4"> */}
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      {/* </div> */}
    </main>
  );
}
