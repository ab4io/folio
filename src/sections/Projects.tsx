import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from '@/assets/images/grain.jpg';
import Image from "next/image";
import { portfolioProjects } from "@/data/projects";



export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className='absolute inset-0 -z-30 opacity-5'
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
      <div className="">
        <div className="flex justify-center">
          <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-emerald-300
                to-sky-400 bg-clip-text text-transparent">
            Real-World Results</p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl mt-6 font-bold tracking-widest bg-gradient-to-r from-secondary to-primary text-center bg-clip-text text-transparent">
          Featured Projects</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 gap-20 mx-20">
          {portfolioProjects.map(project => (
            <div key={project.title}
              className="bg-gray-800 rounded-3xl relative 
          z-0 after:z-10 overflow-hidden after:content-[''] 
          after:absolute after:inset-0 after:outline-2 after:outline 
          after:-outline-offset-2 after:rounded-3xl after:outline-white/20 
          px-4 pt-8 md:pt-12 md:px-5 lg:pt-16 lg:px-10 after:pointer-events-none">
              <div
                className="absolute inset-0 -z-10 opacity-5" style={{
                  backgroundImage: `url(${grainImage.src})`
                }}>
              </div>
              <div className="flex flex-col">
                <div className="lg:pb-5">
                  <div
                    className="bg-gradient-to-r from-emerald-300
                to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text gap-1 py-8">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-sans font-bold text-2xl mt-2 md:mt-5 md:text-3xl tracking-widest bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base  text-white/50
                ">
                        <CheckCircleIcon className="size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 
              lg:mt-0 lg:absolute lg:h-full
              lg:w-auto lg:max-w-none" />
                  </div>
                </div>

                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6
                rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span className="md:text-sm">View Live Site</span>
                    <ArrowUpRightIcon className="size-4 " />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
