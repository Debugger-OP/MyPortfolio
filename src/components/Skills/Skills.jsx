// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <motion.div
      className="text-center mb-8"
      initial={{ opacity: 0, y: 100 }} // Start below the screen
      whileInView={{ opacity: 1, y: 0 }} // Move to normal position
      transition={{
        duration: 1.2, // Slightly longer for smoother transition
        ease: "easeInOut", // Ease in and out for smooth transition
      }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </motion.div>

    {/* Skill Categories */}
    <motion.div
      className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between"
      initial={{ opacity: 0 }} // Start invisible
      whileInView={{ opacity: 1 }} // Fade in
      transition={{
        duration: 1.5, // Slow fade-in
        delay: 0.5, // Delay before cards appear
        ease: "easeInOut", // Smooth transition
      }}
    >
      {SkillsInfo.map((category, index) => (
        <motion.div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-6 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          initial={{ opacity: 0, y: 100 }} // Cards start below the screen
          whileInView={{ opacity: 1, y: 0 }} // Move to normal position when in view
          transition={{
            duration: 1.2, // Slow transition for smoothness
            delay: index * 0.3, // Stagger the cards
            ease: "easeInOut", // Smooth easing
          }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.08}
            transitionSpeed={1000}
            gyroscope={false}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-3 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-5 sm:h-5 "
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Skills;
