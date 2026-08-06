import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaGraduationCap } from "react-icons/fa";

const certifications = [
  {
    title: "Microsoft Power Platform Fundamentals",
    issuer: "Microsoft (PL-900)",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Kaggle",
  },
];

const education = [
  {
    title: "B.Tech in Data Science Engineering",
    institute: "D. Y. Patil Agriculture and Technical University",
    score: "CGPA: 8.87",
    status: "Pursuing",
  },
  {
    title: "Diploma in Information Technology",
    institute: "Government Residence Women Polytechnic, Tasgaon",
    score: "Percentage: 83.19%",
    status: "Completed",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institute: "Maharashtra State Board",
    score: "Percentage: 91.80%",
    status: "Completed",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-[#030712] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Main Heading */}

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Achievements & Education
        </motion.h2>

        {/* Certifications */}

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center text-purple-400 mb-8"
        >
          Certifications
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {certifications.map((cert, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              transition={{ duration: 0.3 }}
              className="
                group
                border
                border-gray-700
                bg-gray-900/60
                rounded-xl
                p-6
                text-center
                transition-all
                duration-300
                hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
              "
            >

              <div
                className="
                  flex
                  justify-center
                  text-purple-500
                  text-4xl
                  mb-4
                  transition-all
                  duration-300
                  group-hover:text-cyan-400
                  group-hover:scale-110
                "
              >
                <FaAward />
              </div>

              <h3 className="text-lg font-semibold group-hover:text-cyan-300 transition">
                {cert.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {cert.issuer}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Education */}

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center text-cyan-400 mb-8"
        >
          Education
        </motion.h3>

        <div className="space-y-6">

          {education.map((edu, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="
                group
                flex
                items-center
                justify-between
                border
                border-gray-700
                bg-gray-900/60
                rounded-xl
                p-6
                transition-all
                duration-300
                hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
              "
            >

              <div className="flex items-center gap-5">

                <div
                  className="
                    bg-blue-900/40
                    p-4
                    rounded-full
                    text-blue-400
                    text-2xl
                    transition-all
                    duration-300
                    group-hover:bg-cyan-500/20
                    group-hover:text-cyan-400
                    group-hover:scale-110
                  "
                >
                  <FaGraduationCap />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    {edu.title}
                  </h3>

                  <p className="text-gray-400 mt-1">
                    {edu.institute}
                  </p>

                  <p className="text-cyan-400 font-semibold mt-2">
                    {edu.score}
                  </p>

                </div>

              </div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  edu.status === "Pursuing"
                    ? "bg-green-900 text-green-400"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {edu.status}
              </span>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;