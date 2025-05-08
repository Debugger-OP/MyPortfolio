import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white pb-10 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Saurav Sharma</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook /> },
            { icon: <FaTwitter /> },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/saurav-sharma-83841a18b/",
            },
            { icon: <FaInstagram /> },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}

        <p className="text-sm text-gray-400 mt-6">
          <p className="font-extrabold text-white">
            👀 You made it to the bottom?
          </p>
          <p>
            Either you're really impressed, lost your mouse wheel, or just love
            scrolling.
          </p>
          <p className="text-red-500">Either way — I'm flattered.</p>
          <p>
            😄 If you liked what you saw (or even if you didn’t but think I’m
            cool), feel free to DM me, email me, or send a carrier pigeon.🕊️
          </p>
          Let's build something awesome together —
          <p>I don’t bite (unless you're a bug 🐛 in my code).</p>
        </p>
        <button
          onClick={() => handleScroll("contact")}
          className="text-[#8245ec] hover:underline"
        >
          Slide into my inbox 💌
        </button>
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Saurav Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
