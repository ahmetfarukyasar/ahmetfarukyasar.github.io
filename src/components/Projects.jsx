import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Movie App",
      desc: "A modern React application that lists movie data using the TMDB API.",
      link: "https://github.com/ahmetfarukyasar/challengeMovieApp",
    },
    {
      title: "Chat App",
      desc: "Real-time chat application (React + Vite, Node.js, Express, Socket.IO, MongoDB, JWT)",
      link: "https://github.com/ahmetfarukyasar/ChatApp",
    },
    {
      title: "Library Website",
      desc: "A web-based library management system built with Laravel.",
      link: "https://github.com/ahmetfarukyasar/librarycontrolsite",
    },
    {
      title: "Forum Website",
      desc: "A forum platform built with Laravel.",
      link: "https://github.com/ahmetfarukyasar/webforum",
    },
    {
      title: "Taxi App",
      desc: "A taxi service system with authentication, driver management and more.",
      link: "https://github.com/ahmetfarukyasar/saritaksi-website",
    },
    {
      title: "Maze Solver",
      desc: "A Python implementation of pathfinding algorithms for maze solving.",
      link: "https://github.com/ahmetfarukyasar/maze-solver",
    }
  ];

  return (
    <div
      id="projects"
      className=" bg-gradient-to-r from-[#D7D9CE] to-[#b6b8af] text-[#040404] py-20 px-8 flex flex-col items-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-12 relative"
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false }}
            className="bg-[#040404] text-[#D7D9CE] p-6 rounded-2xl shadow-lg flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">{proj.title}</h2>
              <p className="text-base mb-6">{proj.desc}</p>
            </div>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-auto bg-[#D7D9CE] text-[#040404] px-4 py-2 rounded-xl font-medium hover:bg-[#b6b8af] transition"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
