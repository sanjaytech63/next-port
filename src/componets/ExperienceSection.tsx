"use client";

import React from "react";
import {
    CardBody,
    CardContainer,
    CardItem,
} from "@/componets/ui/3d-card"; // adjust path if needed
import Link from "next/link";
import { Button } from "./ui/moving-border";

const experienceData = [
    {
        title: "React.js Development",
        description:
            "Built dynamic and scalable web apps using React and hooks-based architecture.",
        image:
            "data:image/png;base64,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",
        link: "https://react.dev",
        button: "Learn More",
    },
    {
        title: "Tailwind CSS Mastery",
        description:
            "Crafted pixel-perfect responsive UIs using Tailwind's utility-first framework.",
        image:
            "https://media.licdn.com/dms/image/v2/D4D12AQHw9SjCddUhjQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715021638881?e=2147483647&v=beta&t=t9mCD8AQaRo9x7liefaZ5ZRxFEDq3KrhepjoQ04imu0",
        link: "https://tailwindcss.com",
        button: "View Docs",
    },
    {
        title: "Next.js Projects",
        description:
            "Created fast and SEO-friendly apps with SSR and API routes using Next.js.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPE22E4GN3ctPStJrzFgHmtvu6S87f2M3mg&s",
        link: "https://nextjs.org",
        button: "Explore",
    },
];

export default function ExperienceGrid() {
    return (
      <section className="min-h-screen mt-10   max-w-4xl mx-auto bg-black  px-4 text-white">
      <div className="max-w-7xl mx-auto">
      <h3 className="text-xl text-center mt-6 md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            My Experience
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 ">
            {experienceData.map((exp, i) => (
              <CardContainer key={i} className="inter-var">
                             <CardBody className="bg-black relative group/card dark:hover:shadow-2xl shadow-xl shadow-white/10 dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border transition-shadow duration-300">

                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
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
                    <img
                      src={exp.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition duration-300"
                      alt={exp.title}
                    />
                  </CardItem>
                  <div className="flex justify-center items-center mt-10">
                    <Link href="/projects">
                      <Button
                        borderRadius="1.75rem"
                        className="bg-black text-white cursor-pointer border border-neutral-200 dark:border-slate-800"
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
