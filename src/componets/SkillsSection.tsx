import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiRedux } from "react-icons/si";

const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-300" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
];

function SkillsSection() {
    return (
        <section className="bg-black max-w-4xl mx-auto mt-10 text-white cursor-pointer  px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-xl  mb-4 md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
                    My <span className="">Skills</span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 bg-[#000] hover:[#222] rounded-xl transition duration-300 shadow-lg hover:shadow-teal-500/20"
                        >
                            <div className="text-4xl mb-3">{skill.icon}</div>
                            <p className="text-sm font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
