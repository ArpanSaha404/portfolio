import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "../components/Hero";
import { navItems } from "@/data/data";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Footer from "@/components/Footer";
import { Separator } from "@radix-ui/react-separator";

export default function Home() {
  return (
    <div className="relative bg-black-100 flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <TechStack />
        <Projects />
        <WorkExperience />
        <Separator />
        <Footer />
      </div>
    </div>
  );
}
