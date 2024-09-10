import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import { TestimonialsCard } from "@/components/TestimonialsCard";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
    id: "0",
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
    id: "1",
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
    id: "2",
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
    id: "3",
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16" id="testimonials">
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
        Happy Clients</p>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 font-semibold justify-center items-center tracking-widest bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
        What Clients Say About Me</h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        Dont Just take my word for it. See what clients say about me
      </p>
      <div className="">
        <div className="flex flex-col md:grid md:grid-col-2 lg:grid lg:grid-cols-2 items-center justify-center">
          {testimonials.map((testimony) => (
            <div
              key={testimony.id}
              className=" min-w-[300px] p-2 md:p-4"
              >
              <TestimonialsCard
                name={testimony.name}
                position={testimony.position}
                text={testimony.text}
                avatar={testimony.avatar}
              />
            </div>
          ))}
        </div>
      </div>
    </div>);
};
