import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const projects = [
  {
    title: "AgriVision - AI Crop Yield Prediction",
    description:
      "AI-powered agricultural analytics platform that predicts crop yield using Machine Learning and provides interactive visual insights through Streamlit dashboard.",
    technologies:
      "Python, Scikit-Learn, Pandas, NumPy, Streamlit, Plotly",
    github:
      "https://github.com/tanvishinde09/AgriVision",
    demo:
      "https://agrivision-s3brjtt9bp82wntcxe3scf.streamlit.app/",
  },

  {
    title: "Student Performance Prediction",
    description:
      "Machine Learning model that predicts student performance by analyzing academic factors and identifying important features.",
    technologies:
      "Python, Pandas, NumPy, Scikit-Learn, Jupyter Notebook",
  },

  {
    title: "House Price Prediction",
    description:
      "Regression-based Machine Learning project to predict house prices using feature engineering and model evaluation techniques.",
    technologies:
      "Python, Machine Learning, Pandas, Scikit-Learn",
    github:
      "https://github.com/tanvishinde09/House_Price_Prediction",
    demo:
      "https://housepriceprediction-09.streamlit.app/"

  },
];


function Projects() {

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#030712] text-white py-20 px-6"
    >

      <motion.h2
        initial={{opacity:0,y:-30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className="text-4xl font-bold text-center mb-12"
      >
        My Projects
      </motion.h2>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">


        {projects.map((project,index)=>(

          <motion.div
            key={index}
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{
              duration:0.5,
              delay:index*0.1
            }}

            whileHover={{
              scale:1.05
            }}

            className="
            bg-gray-900/70
            border border-cyan-500/20
            rounded-xl
            p-6
            shadow-xl
            "
          >

            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              {project.title}
            </h3>


            <p className="text-gray-300 mb-4">
              {project.description}
            </p>


            <p className="text-sm text-gray-400 mb-6">
              <b>Tech:</b> {project.technologies}
            </p>


            {/* Show buttons only if links exist */}
            {project.github && project.demo && (

              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  bg-gray-800
                  hover:bg-cyan-600
                  transition
                  "
                >
                  <FaGithub/>
                  GitHub
                </a>


                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  bg-cyan-500
                  text-black
                  hover:bg-cyan-400
                  transition
                  "
                >
                  <FaExternalLinkAlt/>
                  Demo
                </a>

              </div>

            )}


          </motion.div>

        ))}


      </div>


    </section>
  );
}

export default Projects;