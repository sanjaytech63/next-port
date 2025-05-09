"use client";

import React from "react";
import {
    CardBody,
    CardContainer,
    CardItem,
} from "@/componets/ui/3d-card"; // fix typo if needed
import Link from "next/link";
import { Button } from "@/componets/ui/moving-border";

const experienceData = [
    {
        title: "React.js Development",
        description:
            "Built dynamic and scalable web apps using React and hooks-based architecture.",
        image:
            "https://ares.decipherzone.com/blog-manager/uploads/banner_webp_da06d145-93f9-4df9-8c7e-1e2c332c3a4a.webp", // your image data here
    },
    {
        title: "Node.js & Express",
        description:
            "Built RESTful APIs and backend services with Node.js and Express.js.",
        image: "https://d1e5wbyhbs6zy6.cloudfront.net/production/articles/63a0dd05bac79dc8c99a1263/article-image/1671543307052",
    },
    {
        title: "MongoDB Integration",
        description:
            "Worked with MongoDB and Mongoose for robust data handling.",
        image: "https://liveimages.algoworks.com/new-algoworks/wp-content/uploads/2019/11/22113146/Integrationm.png",
    },
    {
        title: "Next.js Projects",
        description:
            "Developed SSR and SSG applications using Next.js framework.",
        image: "https://cdn.prod.website-files.com/615f5935af74848be6f33e1f/6356f474040e32fada16cadd_image1.png",
    },
    {
        title: "Tailwind CSS",
        description:
            "Styled projects using utility-first Tailwind CSS framework.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv70_Nh2AZTXmpbs5ZiDYcaCEDOBiuY9ycqg&s",
    },
    {
        title: "TypeScript",
        description:
            "Enhanced JavaScript code with TypeScript for better type safety.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO53Xem4TDRZczRqcCEB8_9KsChX9PQXr96g&s",
    },
];

const Blog = () => {
    return (
        <section className="min-h-screen mt-10   max-w-4xl mx-auto bg-black  px-4 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 ">
                    {experienceData.map((item, index) => (
                        <CardContainer key={index} className="inter-var">
                            <CardBody className="bg-black relative group/card dark:hover:shadow-2xl shadow-xl shadow-white/10 dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border transition-shadow duration-300">

                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-white dark:text-white"
                                >
                                    {item.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {item.description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <img
                                        src={item.image}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt={item.title}
                                    />
                                </CardItem>
                                <div className="flex justify-center items-center mt-10">
                                    <Link href="/projects">
                                        <Button
                                            borderRadius="1.75rem"
                                            className="bg-black text-white cursor-pointer border-neutral-200 dark:border-slate-800"
                                        >
                                            Read Moer...
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
};

export default Blog;
