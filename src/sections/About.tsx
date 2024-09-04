import Image from "next/image";
import devPic from "@/assets/images/dev.png";
import grainImage from "@/assets/images/grain.jpg";


const experiences = [
  {
    job: "Software Engineer",
    company: "Omshitu-Joy",
    text: "Helped out withboth front-end and back-end projects",
    icon: devPic,
  },
  {
    job: "Software Engineer",
    company: "Omshitu-Joy",
    text: "",
    icon: devPic,
  },
  {
    job: "Software Engineer",
    company: "Omshitu-Joy",
    text: "",
    icon: devPic,
  },
  {
    job: "Software Engineer",
    company: "Omshitu-Joy",
    text: "",
    icon: devPic,
  }
]

export const AboutSection = () => {
  return (<>
    <div
        className="absolute inset-0 -z-10 opacity-5" style={{
          backgroundImage: `url(${grainImage.src})`
        }}>
      </div>
    <div className="">
      <h1 className="font-semibold justify-center items-center tracking-widest bg-gradient-to-r from-secondary to-primary
     text-center text-3xl md:text-5xl bg-clip-text text-transparent p-2">My Work Experience</h1>
     {experiences.map(experience => (
      <div key={experience.job} className="flex justify-between bg-gray-800 rounded-3xl outline outline-white/30 p-6 m-6 gap-2 lg:grid-rows-2">
        <Image className="ml-6" src={experience.icon} width={60} height={60} alt="" />
        <div>
        <h2 className="mr-6">{experience.job}</h2>
        <p>{experience.text}</p>
        </div>
      </div>
      ))}
    </div>
    </>)
};
