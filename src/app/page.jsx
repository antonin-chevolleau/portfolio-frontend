import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
    </>
  );
}

export default HomePage;
