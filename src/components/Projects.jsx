import React from "react";
import { motion } from "framer-motion";
import { Dot, Github, PanelTop, Rss } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Is It Worth To Watch",
      desc: "A modern React application that lists movie data using the TMDB API.",
      githubLink: "https://github.com/ahmetfarukyasar/IsItWTW",
      liveLink: "https://isitwtw.vercel.app/"
    },
    {
      title: "Chat App",
      desc: "Real-time chat application (React + Vite, Node.js, Express, Socket.IO, MongoDB, JWT)",
      githubLink: "https://github.com/ahmetfarukyasar/ChatApp",
      liveLink: ""
    },
    {
      title: "Library Website",
      desc: "A web-based library management system built with Laravel.",
      githubLink: "https://github.com/ahmetfarukyasar/librarycontrolsystem",
      liveLink: ""
    },
    {
      title: "Forum Website",
      desc: "A forum platform built with Laravel.",
      githubLink: "https://github.com/ahmetfarukyasar/webforum",
      liveLink: ""
    },
    {
      title: "Taxi App",
      desc: "A taxi service system with authentication, driver management and more.",
      githubLink: "https://github.com/ahmetfarukyasar/saritaksi-website",
      liveLink: ""
    },
    {
      title: "Maze Solver",
      desc: "A Python implementation of pathfinding algorithms for maze solving.",
      githubLink: "https://github.com/ahmetfarukyasar/maze-solver",
      liveLink: ""
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
              href={proj.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between gap-2 mt-auto bg-[#DDC9B4] text-[#040404] px-4 py-2 rounded-xl font-medium hover:bg-[#cdbaa6] transition
                ${proj.liveLink === "" ? "pointer-events-none opacity-50" : ""}`}
            >
              <div className="flex gap-2 items-center font-medium">
                <Rss size={20} />
                Live
              </div>
              <div>
                {
                  proj.liveLink === ""
                  ? <div><Dot className="text-red-600"/></div>
                  : <div><Dot className="text-green-600 animate-ping"/></div>
                }
              </div>
            </a>
            <a
              href={proj.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 bg-[#D7D9CE] text-[#040404] px-4 py-2 rounded-xl font-medium hover:bg-[#b6b8af] transition"
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
