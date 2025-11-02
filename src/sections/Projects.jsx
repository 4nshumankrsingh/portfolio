import Image from 'next/image'
import Link from "next/link"
import { SectionHeader } from "@/components/SectionHeader"
import { CustomCard } from "@/components/CustomCard"

const portfolioProjects = [
  {
    company: "Full-Stack Project",
    year: "2024",
    title: "Film Odyssey",
    results: [
      { title: "AI-powered movie recommendations and rating system." },
      { title: "Improved site speed with Redis caching and real-time features." },
      { title: "Scalable backend with Express.js and MongoDB." }
    ],
    link: "https://film-odyssey.vercel.app/",
    github: "https://github.com/4nshumankrsingh/FIlmOdyssey",
    image: "/film-odyssey.png"
  },
  {
    company: "Full-Stack Project",
    year: "2024",
    title: "Pixel Pulse",
    results: [
      { title: "AI-driven image editing platform with multiple users." },
      { title: "Secure authentication and payment processing with Better Auth and Polar." },
      { title: "Serverless architecture with Neon PostgreSQL and ImageKit AI tools." }
    ],
    link: "https://anshuman-pixel-pulse.vercel.app/",
    github: "https://github.com/4nshumankrsingh/PixelPulse",
    image: "/pixel-pulse.png"
  }
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div>
        <div className="container">
          <SectionHeader 
            eyebrow="Real-world Results" 
            title="Featured Projects" 
            description="Explore my journey of building full-stack projects through practical development." 
          />
          <div className="flex flex-col mt-10 md:mt-20 gap-20">
            {portfolioProjects.map((project, projectIndex) => (
              <CustomCard 
                key={project.title} 
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
                style={{
                  top: `calc(64px + ${projectIndex * 40}px)`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-linear-to-r from-orange-300 to-orange-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li key={result.title} className="flex gap-2 text-sm md:text-sm text-white/50">
                          <span className="text-orange-400">✓</span>
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4 mt-8">
                      <Link href={project.link}>
                        <button className="bg-white text-gray-950 h-12 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                          <span>Visit Live Site</span>
                          <span>↗</span>
                        </button>
                      </Link>
                      <Link href={project.github}>
                        <button className="border border-orange-500 text-orange-500 h-12 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-colors">
                          <span>GitHub</span>
                          <span>📁</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="relative">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={600}
                      height={400}
                      className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg" 
                    />
                  </div>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};