import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] overflow-x-hidden sm:overflow-x-hidden md:overflow-x-hidden lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
      >
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {education.map((edu, index) => {
          const isEven = index % 2 === 0;
          const animationDirection = isEven ? { x: -100 } : { x: 100 };

          return (
            <motion.div
              key={edu.id}
              className={`flex flex-col sm:flex-row items-center mb-16 ${
                isEven ? "sm:justify-start" : "sm:justify-end"
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
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content */}
              <div
                className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                  isEven ? "sm:ml-55 ml-55" : "sm:mr-55 ml-55"
                } transform transition-transform duration-300 hover:scale-105`}
              >
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-md sm:text-sm text-gray-300">
                        {edu.school}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 font-bold">
                  Grade: {edu.grade}
                </p>
                <p className="mt-4 text-gray-400">{edu.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Education;
