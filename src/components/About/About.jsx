import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";
import { motion } from "framer-motion"; // Import motion from framer-motion

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] scroll-mt-24 font-sans mt-16 md:mt-24 lg:mt-5"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Name Animation */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
            initial={{ opacity: 0, y: 100 }} // Start below the screen
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position
            transition={{ duration: 0.4 }} // Duration of the transition for the name
          >
            Hi, I am
          </motion.h1>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 100 }} // Start below the screen
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position
            transition={{ duration: 0.5, delay: 0.5 }} // Delay to start after the greeting (0.5s)
          >
            Saurav Sharma
          </motion.h2>

          {/* Skills Heading with Typing Effect */}
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight"
            initial={{ opacity: 0, y: 100 }} // Start below the screen
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position
            transition={{ duration: 1, delay: 1 }} // Delay to start after the name (1s)
          >
            <span className="text-white">I&apos;m a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "Python Developer",
                "Data Analyst",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </motion.h3>

          {/* About Me Paragraph */}
          <motion.p
            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed"
            initial={{ opacity: 0, y: 100 }} // Start below the screen
            whileInView={{ opacity: 1, y: 0 }} // Move to normal position
            transition={{ duration: 1, delay: 1 }} // Delay to start after typing effect (1.5s)
          >
            I&apos;m a full-stack developer with 1 year of experience building
            real-world web applications using the MERN stack. Alongside web
            development, I am actively expanding my skills in data analytics
            with Python, Excel, and Power BI. With hands-on experience from
            internships and personal projects, I enjoy creating both seamless
            user experiences and data-driven solutions.
          </motion.p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <motion.div
          className="md:w-1/2 md:pl-10 flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 100 }} // Start below the screen
          whileInView={{ opacity: 1, y: 0 }} // Move to normal position
          transition={{ duration: 1, delay: 0.5 }} // Delay to start after all the previous content (2s)
        >
          <Tilt
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-[27rem] md:h-[27rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Saurav Sharma"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
