import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Eye } from "lucide-react";

function About() {
  return (
    <div id="about" className="p-20 flex flex-col items-center bg-[#040404] text-[#D7D9CE]">
      {/* About Me */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-4xl"
      >
        <h1
          className="text-5xl font-bold mb-6 relative inline-block"
        >
          About Me
        </h1>
        <p className="text-xl leading-relaxed tracking-wide px-8">
          I am a passionate developer who enjoys building clean and
          user-friendly digital experiences. With a strong interest in frontend
          and backend technologies, I aim to create modern, responsive, and
          accessible applications. Outside of coding, I value continuous
          learning, problem-solving, and bringing ideas to life with creativity.
        </p>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* My Education */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-[#D7D9CE] text-[#040404] p-10 rounded-2xl shadow-xl flex flex-col items-start hover:scale-105 transition-transform duration-300"
        >
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap size={40} className="text-[#040404]" />
            <h2 className="text-3xl font-bold">My Education</h2>
          </div>
          <p className="text-lg leading-relaxed">
            Graduated in Computer Programming with a strong foundation in software engineering, algorithms, and system design. Continuously striving to improve myself through projects, internships, and independent learning, which have enhanced my problem-solving abilities and deepened both my theoretical and practical knowledge.
          </p>
        </motion.div>

        {/* My Vision */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-[#D7D9CE] text-[#040404] p-10 rounded-2xl shadow-xl flex flex-col items-start hover:scale-105 transition-transform duration-300"
        >
          <div className="flex items-center gap-4 mb-6">
            <Eye size={40} className="text-[#040404]" />
            <h2 className="text-3xl font-bold">My Vision</h2>
          </div>
          <p className="text-lg leading-relaxed">
            I enjoy solving real-life problems through computer technologies. My vision is to bring my ideas to life by continuously developing myself in this field and pushing my potential to the fullest, while creating impactful solutions that add value to everyday life.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
