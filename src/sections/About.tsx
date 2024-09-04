import Image from "next/image";
import devPic from "@/assets/images/dev.png";
import grainImage from "@/assets/images/grain.jpg";


const experiences = [
  {
    job: "Software Engineer",
    company: "Omshitu-Joy",
    text: "",
    icon: ""
  },
  {
    job: "Software Engineer",
    company: "Omshitu-Joy",
    text: "",
    icon: "",
  },
  {
    job: "Software Engineer",
    company: "Omshitu-Joy",
    text: "",
    icon: "",
  },
  {
    job: "Software Engineer",
    company: "Omshitu-Joy",
    text: "",
    icon: "",
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
     text-center text-3xl md:text-5xl bg-clip-text text-transparent">My Work Experience</h1>
     {experiences.map(experience => (
      <div key={experience.job} className="flex flex-col md:grid-cols-2 lg:grid-cols-2 md:w-md lg:w-md justify-center container bg-gray-800 rounded-3xl outline outline-white/30 p-6 m-6">
        <Image src={devPic} width={100} height={100} alt="" />
        <h2>Software Engineer</h2>
      </div>
      ))};
    </div>
    </>);
};
