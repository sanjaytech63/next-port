"use client";

import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/componets/ui/3d-card";
import { Button } from "@/componets/ui/moving-border";

const experienceData = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio built with Next.js and Tailwind CSS.",
    image: "https://repository-images.githubusercontent.com/279903174/e6d970ed-8a4d-42fa-9f16-0b7efc34fb95",
  },
  {
    title: "E-commerce Store",
    description: "Full-featured frontend using React, Tailwind, and Stripe.",
    image: "https://ossisto.com/wp-content/uploads/2023/05/Why-You-NEED-a-Mobile-Friendly-eCommerce-Store.webp",
  },
  {
    title: "Blog Platform",
    description: "Modern blog site with MDX, Tailwind, and NextAuth.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmdMar6XjM8y983r7E0IoHRiMEqCsNqlQfQ&s",
  },
  {
    title: "Landing Page",
    description: "Marketing landing page with animations and SEO optimization.",
    image: "https://adoric.com/blog/wp-content/uploads/2021/03/Landing-Page-1.jpg",
  },
  {
    title: "Dashboard UI",
    description: "Admin dashboard with Tailwind and chart integrations.",
    image: "https://cdn.dribbble.com/userupload/14436525/file/original-d3b2a6bc8babc0d80f8dbd3c80a33e3a.png?resize=1600x1200",
  },
  {
    title: "Real-time Chat App",
    description: "Frontend chat app with Socket.io and Tailwind.",
    image: "https://i.ytimg.com/vi/gbocZlm71nE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNqrLoBSDRhBz-9bg7tXHH1f0MPw",
  },
  {
    title: "Job Board",
    description: "Frontend for a job board platform using Next.js and ShadCN UI.",
    image: "https://d2zz54dhkzkgk9.cloudfront.net/Ko01JlpX7HSSC6FfiEgCscHUQNFubs22SIRiJtq6.jpg",
  },
  {
    title: "Task Manager",
    description: "Kanban-style task board with drag-and-drop UI.",
    image: "https://s3.envato.com/files/483331111/cover.png",
  },
  {
    title: "Weather App",
    description: "Responsive weather forecast interface using OpenWeather API.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f98eb6177449205.64d631cc72f17.png",
  },
  {
    title: "Crypto Dashboard",
    description: "Live crypto prices and charts in a slick dashboard layout.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c59837183125153.6539f8ab9cf3d.png",
  },
];

export default function ProjectsSection() {
  return (
    <section className="min-h-screen mt-10   max-w-4xl mx-auto bg-black  px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
          {experienceData.map((exp, i) => (
            <CardContainer key={i} className="inter-var">
              <CardBody className="bg-black relative group/card dark:hover:shadow-2xl shadow-xl shadow-white/10 dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border transition-shadow duration-300">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white dark:text-white"
                >
                  {exp.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {exp.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={exp.image}
                    height={1000}
                    width={1000}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={exp.title}
                  />
                </CardItem>
                <div className="flex justify-center items-center mt-8">
                  <Link href="/project">
                    <Button
                      borderRadius="1.75rem"
                      className="bg-black text-white border border-neutral-200 hover:bg-white hover:text-black transition"
                    >
                      Read More...
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
