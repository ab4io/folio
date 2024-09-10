import { AboutSection } from "@/sections/About";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import Journey from "@/sections/Journey";
import { ProjectsSection } from "@/sections/Projects";
import Skills from "@/sections/Skills";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <Journey />
      <Skills />
      <Footer />
    </div>
  );
}
