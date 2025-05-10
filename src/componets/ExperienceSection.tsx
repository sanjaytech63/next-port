import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const experiences = [
  {
    company: "OpenAI",
    role: "Frontend Developer",
    duration: "Jan 2023 - Present",
    stack: [<FaReact key="react" />, <FaHtml5 key="html" />, <FaCss3Alt key="css" />],
    description: "Developed responsive UIs using React.js and Tailwind CSS with high performance optimization and accessibility."
  },
  {
    company: "Google",
    role: "Full Stack Developer",
    duration: "Jun 2021 - Dec 2022",
    stack: [<FaReact key="react" />, <FaNodeJs key="node" />],
    description: "Built scalable web applications with MERN stack and improved page load speed by 40%."
  },
  {
    company: "Freelance",
    role: "Web Developer",
    duration: "2019 - 2021",
    stack: [<FaHtml5 key="html" />, <FaCss3Alt key="css" />],
    description: "Delivered over 30+ client websites with custom design and SEO optimizations."
  }
];

const ExperienceSection = () => {
  return (
    <section className="relative max-w-4xl mx-auto py-16 bg-black/80 text-white">
      <div className="container mx-auto px-4">
         <h3 className="text-xl  mb-4 md:text-2xl bg-clip-text text-transparent bg-gradient-to-b text-center from-neutral-200 to-neutral-600 font-sans font-bold">Experience</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences?.map((exp, index) => (
            <div
              key={index}
              className="backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
              <p className="text-sm text-gray-300 mb-1">{exp.role}</p>
              <p className="text-xs text-gray-400 mb-4">{exp.duration}</p>
              <div className="flex items-center gap-3 text-lg text-teal-300 mb-4">
                {exp.stack}
              </div>
              <p className="text-sm text-gray-200">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
