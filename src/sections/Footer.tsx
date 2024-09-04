import githubIcon from "@/assets/images/github.png";
import linkedinIcon from "@/assets/images/linkedin.png";
import twitterIcon from "@/assets/images/twitter.png";
import instagramIcon from "@/assets/images/instagram.png";
import whatsupIcon from "@/assets/images/whatsup.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex sm:flex-col lg:flex-row lg:justify-center lg:gap-6 gap-2 py-4">
      <h2 className="flex justify-center items-center">Copyright 2024</h2>
      <div className="flex gap-2 justify-center items-center">
        <button className="p-2 rounded-xl outline outline-white/20">
          <Image src={githubIcon.src} width={20} height={20} alt="" />
        </button>
        <button className="p-2 rounded-xl outline outline-white/20">
          <Image src={linkedinIcon.src} width={20} height={20} alt="" />
        </button>
        <button className="p-2 rounded-xl outline outline-white/20">
          <Image src={twitterIcon.src} width={20} height={20} alt="" />
        </button>
        <button className="p-2 rounded-xl outline outline-white/20">
          <Image src={instagramIcon.src} width={20} height={20} alt="" />
        </button>
        <button className="p-2 rounded-xl outline outline-white/20">
          <Image src={whatsupIcon.src} width={20} height={20} alt="" />
        </button>
      </div>
    </div>);
};
