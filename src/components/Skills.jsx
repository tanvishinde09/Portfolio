import React from "react";
import { motion } from "framer-motion";

import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiMysql,
  SiGithub,
  SiGit,
  SiStreamlit
} from "react-icons/si";

import {
  FaChartBar,
  FaDatabase,
  FaCode
} from "react-icons/fa";


const skills = [
  {
    name: "Python",
    icon: <SiPython />,
  },
  {
    name: "Pandas",
    icon: <SiPandas />,
  },
  {
    name: "NumPy",
    icon: <SiNumpy />,
  },
  {
    name: "Scikit-Learn",
    icon: <SiScikitlearn />,
  },
  {
    name: "Jupyter Notebook",
    icon: <SiJupyter />,
  },
  {
    name: "SQL / MySQL",
    icon: <SiMysql />,
  },
  {
    name: "Power BI",
    icon: <FaChartBar />,
  },
  {
    name: "Streamlit",
    icon: <SiStreamlit />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
  },
  {
    name: "Data Analytics",
    icon: <FaDatabase />,
  },
  {
    name: "Machine Learning",
    icon: <FaCode />,
  },
];


function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#030712] text-white py-20 px-6"
    >

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        My Skills
      </motion.h2>


      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05
            }}
            whileHover={{
              scale: 1.08,
              y: -8
            }}

            className="
              bg-gray-900/60
              border border-cyan-500/20
              rounded-xl
              p-6
              flex
              flex-col
              items-center
              justify-center
              gap-4
              shadow-lg
              hover:border-cyan-400
              transition
            "
          >

            <div className="text-5xl text-cyan-400">
              {skill.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-200">
              {skill.name}
            </h3>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;