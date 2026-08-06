import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";


function Footer() {


  return (

    <footer
      className="
      bg-[#030712]
      border-t
      border-gray-800
      text-gray-400
      py-8
      px-6
      "
    >


      <motion.div

      initial={{opacity:0,y:20}}

      whileInView={{opacity:1,y:0}}

      transition={{duration:0.5}}

      className="
      max-w-5xl
      mx-auto
      text-center
      "

      >



        <h3
        className="
        text-xl
        font-bold
        text-white
        mb-3
        "
        >

          Tanvi Shinde

        </h3>




        <p
        className="
        text-sm
        mb-5
        "
        >

          Data Science Engineer | Machine Learning Enthusiast

        </p>





        <div

        className="
        flex
        justify-center
        gap-6
        mb-5
        "

        >



          <a

          href="mailto:shinde.tanvi.eng@gmail.com"

          className="
          text-blue-400
          hover:scale-110
          transition
          "

          >

            <FaEnvelope size={22}/>

          </a>





          <a

          href="https://github.com/tanvishinde09"

          target="_blank"

          rel="noreferrer"

          className="
          text-purple-400
          hover:scale-110
          transition
          "

          >

            <FaGithub size={22}/>

          </a>





          <a

          href="https://www.linkedin.com/in/tanvi-shinde-3345b3312"

          target="_blank"

          rel="noreferrer"

          className="
          text-cyan-400
          hover:scale-110
          transition
          "

          >

            <FaLinkedin size={22}/>

          </a>



        </div>





        <p
        className="
        text-sm
        "
        >

          © Tanvi Shinde. All rights reserved.

        </p>




      </motion.div>


    </footer>

  );

}


export default Footer;