import React from "react";
import pp from "../assets/transparent.png";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-scroll";

function Welcome() {
  return (
    <div
      id="welcome"
      className="relative flex flex-col lg:flex-row items-center justify-around w-full px-8 py-30 overflow-hidden bg-gradient-to-r from-[#D7D9CE] to-[#b6b8af]"
    >
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex z-10 items-center justify-center m-4 w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-[#c0c2b8] shadow-2xl"
      >
        <img src={pp} alt="profile" className="w-full h-full object-cover pointer-events-none" />
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="flex flex-col items-start justify-center max-w-xl px-6 mt-10 lg:mt-0"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-[#040404] mb-4">
          Hi, I’m <span className="text-gray-700">Ahmet</span>
        </h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
        >
          Software Developer
        </motion.h2>
        <p className="text-lg text-[#040404] leading-relaxed mb-6">
          I build modern{" "}
          <span className="font-semibold text-gray-800">websites</span>,{" "}
          <span className="font-semibold text-gray-800">mobile & desktop apps</span>, and{" "}
          <span className="font-semibold text-gray-800">automation systems</span>.
        </p>

        <div className="flex gap-4 mb-8">
          <Link
            to="projects"
            smooth={true} duration={600} offset={-80}
            className="bg-[#040404] text-[#D7D9CE] px-6 py-3 rounded-xl font-medium hover:scale-105 transition cursor-pointer"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true} duration={600} offset={-80}
            className="border border-[#040404] text-[#040404] px-6 py-3 rounded-xl font-medium hover:bg-[#040404] hover:text-[#D7D9CE] transition cursor-pointer"
          >
            Contact Me
          </Link>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/ahmetfarukyasar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/ahmetfarukyasar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </motion.div>
      
    </div>
  );
}

export default Welcome;
