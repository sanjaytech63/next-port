"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSections = () => {
    return (
        <div className="relative flex h-auto md:h-[32rem] w-full overflow-hidden rounded-md bg-black antialiased items-center justify-center py-20 px-4">
            <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

            <div className="max-w-3xl mx-auto pt-30 text-center relative z-10">
                <div className="flex relative flex-col items-center mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/10 shadow-md">
                        <Image
                            src="https://cdn.pixabay.com/photo/2024/06/01/09/01/young-man-8801861_640.jpg"
                            alt="Sanjay"
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="mt-18 absolute px-4 py-1 text-sm bg-white text-black rounded-full font-medium flex items-center gap-2 shadow">
                        <span>✔</span> Verified Expert
                    </div>
                </div>

               
                <h1 className="text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
                    Hello I am a Frontend Developer
                </h1>

              
                <p className="text-base md:text-md text-gray-400 mt-4 font-light leading-relaxed">
                    Im a frontend developer passionate about building responsive high-performance web apps using <span className="text-white font-medium">React.js</span> and <span className="text-white font-medium">Next.js</span>. I focus on clean UI intuitive UX and delivering modern digital experiences.
                </p>


                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                    <Link href="/project">
                        <Button
                            borderRadius="1.75rem"
                            className="bg-black text-white cursor-pointer border-neutral-200 dark:border-slate-800"
                        >
                            View Projects
                        </Button>
                    </Link>
                    <Link href="/contact-us">
                        <Button
                            borderRadius="1.75rem"
                            className="text-white bg-black cursor-pointer border-neutral-200 dark:border-slate-800"
                        >
                            Hire Me
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSections;
