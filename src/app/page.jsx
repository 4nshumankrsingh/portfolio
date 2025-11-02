import { Header } from "@/sections/Header"
import { HeroSection } from "@/sections/Hero"
import { ProjectsSection } from "@/sections/Projects"
import { OverviewSection } from "@/sections/OverviewSection"
import { TapeSection } from "@/sections/TapeSection"
import { AboutSection } from "@/sections/AboutSection"
import ContactSection from "@/sections/ContactSection"
import { Footer } from "@/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
                <TapeSection />
        <OverviewSection />
        <TapeSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
