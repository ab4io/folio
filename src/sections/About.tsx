import Image from "next/image";
import devPic from "@/assets/images/dev.png";
import omshitu from "@/assets/images/image.png";
import grainImage from "@/assets/images/grain.jpg";
import { TimelineDemo } from "@/components/TimelineDemo";
import GitHubCalendar from "react-github-calendar";


const experiences = [
  {
    job: "Software Engineer",
    company: "Omshitu-Joy",
    text: ["Worked on multiple customer relationship management projects."],
    icon: omshitu,
  },
  {
    job: "Software Engineer",
    company: "Omshitu-Joy",
    text: [],
    icon: devPic,
  },
  {
    job: "Software Engineer",
    company: "Omshitu-Joy",
    text: [],
    icon: devPic,
  },
  {
    job: "Software Engineer",
    company: "Omshitu-Joy",
    text: [],
    icon: devPic,
  }]

  const explicitTheme = {
    light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
    dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  };

  const minimalTheme = {
    "light": [
      "hsl(0, 0%, 92%)",
      "rebeccapurple"
    ],
    "dark": [
      "hsl(0, 0%, 22%)",
      "hsl(225,92%,77%)"
    ]
  };

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
          <div key={experience.job} className="flex justify-center bg-gray-900 rounded-3xl outline outline-white/30 p-6 m-6 mx-10 lg:mx-20 gap-6 lg:grid-rows-2">
            <Image className="ml-6" src={experience.icon} width={60} height={60} alt="" />
            <div>
              <h2 className="mr-6">{experience.job}</h2>
              <ul>
                <li>{experience.text}</li>
              </ul>
            </div>
          </div>))}
      </div>
      <div className="flex flex-col justify-center items-center pb-2">
      <h1>Days I code</h1>
      <GitHubCalendar 
      username="ab4io"
      showWeekdayLabels 
      theme={minimalTheme}/>
      </div>
    </>)
};
