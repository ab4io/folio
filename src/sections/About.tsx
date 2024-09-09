import Image from "next/image";
import devPic from "@/assets/images/dev.png";
import omshitu from "@/assets/images/omshitu.png";
import grainImage from "@/assets/images/grain.jpg";
import { TimelineDemo } from "@/components/TimelineDemo";


const experiences = [
  {
    job: "Software Engineer",
    company: "Omshitu-Joy",
    text: ["Built a CRM app for sales people", "Helped "],
    icon: omshitu,
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
  return (
    <>
      <div className="absolute inset-0 -z-10 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`
      }}>
      </div>
      <h1 className="font-semibold justify-center items-center tracking-widest bg-gradient-to-r from-secondary to-primary
     text-center text-3xl md:text-5xl bg-clip-text text-transparent p-2">My Work Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {experiences.map(experience => (
          <div key={experience.job} className="flex justify-center bg-gray-800 rounded-3xl outline outline-white/30 p-6 m-6 mx-10 lg:mx-20 gap-6 lg:grid-rows-2">
            <Image className="ml-6" src={experience.icon} width={60} height={60} alt="" />
            <div>
              <h2 className="mr-6">{experience.job}</h2>
              <ul>
                <li>{experience.text[0]}</li>
              </ul>
            </div>
          </div>))}
      </div>
    </>)
};
