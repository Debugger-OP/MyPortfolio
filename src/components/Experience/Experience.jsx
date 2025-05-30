import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useIsLargeScreen } from "../../hooks/isLargeScreen"; // path may vary

// NOT useIsLargeScreen directly

const Experience = () => {
  const isLargeScreen = useIsLargeScreen();
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] overflow-x-hidden sm:overflow-x-hidden md:overflow-x-hidden lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
      >
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {experiences.map((experience, index) => {
          const isEven = index % 2 === 0;
          const animationDirection = isEven ? { x: 100 } : { x: -100 };

          return (
            //cards
            <motion.div
              key={experience.id}
              className={`flex flex-col sm:flex-row items-center mb-16 ${
                isEven ? "sm:justify-end" : "sm:justify-start"
              }`}
              initial={{ opacity: 0, ...animationDirection }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                delay: 0.4 + index * 0.3,
              }}
            >
              {/* Timeline Circle */}

              <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {isLargeScreen ? (
                <Tilt
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  scale={1.08}
                  transitionSpeed={1000}
                  gyroscope={false}
                >
                  {/* Content Section */}
                  <div
                    className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-2xl ${
                      isEven ? "sm:ml-55 mr-55" : "sm:mr-55 ml-55"
                    } transform transition-transform duration-300 hover:scale-105`}
                  >
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                        <img
                          src={experience.img}
                          alt={experience.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-white">
                            {experience.role}
                          </h3>
                          <h4 className="text-md sm:text-sm text-gray-300">
                            {experience.company}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          {experience.date}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-400">{experience.desc}</p>
                    <div className="mt-4">
                      <h5 className="font-medium text-white">Skills:</h5>
                      <ul className="flex flex-wrap mt-2">
                        {experience.skills.map((skill, i) => (
                          <li
                            key={i}
                            className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Tilt>
              ) : (
                <div
                  className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-2xl ${
                    isEven ? "sm:ml-55 mr-55" : "sm:mr-55 ml-55"
                  } transform transition-transform duration-300 hover:scale-105`}
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white">
                          {experience.role}
                        </h3>
                        <h4 className="text-md sm:text-sm text-gray-300">
                          {experience.company}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        {experience.date}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-400">{experience.desc}</p>
                  <div className="mt-4">
                    <h5 className="font-medium text-white">Skills:</h5>
                    <ul className="flex flex-wrap mt-2">
                      {experience.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Experience;
