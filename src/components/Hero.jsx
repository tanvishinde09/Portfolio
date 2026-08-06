import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#030712] flex items-center overflow-hidden"
    >

      {/* Background Glow */}
      <div className="
        absolute top-0 -left-40 
        w-96 h-96 
        bg-cyan-500/20 
        rounded-full 
        blur-[140px]
      " />

      <div className="
        absolute bottom-0 -right-40 
        w-[450px] h-[450px] 
        bg-purple-600/20 
        rounded-full 
        blur-[160px]
      " />


      <div className="
        max-w-7xl mx-auto 
        px-6 lg:px-10 
        grid lg:grid-cols-2 
        gap-16 
        items-center
      ">


        {/* LEFT CONTENT */}

        <div>

          <p className="
            uppercase 
            tracking-[6px] 
            text-cyan-400 
            font-semibold
          ">
            Hello, I'm
          </p>


          <h1 className="
            mt-5 
            text-6xl 
            lg:text-8xl 
            font-black 
            leading-tight
          ">

            <span className="text-white">
              Tanvi
            </span>

            <br />

            <span className="
              bg-gradient-to-r 
              from-cyan-400 
              via-blue-400 
              to-purple-500 
              bg-clip-text 
              text-transparent
            ">
              Shinde
            </span>

          </h1>



          <h2 className="
            mt-8 
            text-3xl 
            font-bold 
            text-white
          ">

            Data Scientist

            <span className="text-cyan-400">
              {" | "}
            </span>

            ML Engineer

          </h2>



          <p className="
            mt-8 
            text-gray-400 
            leading-8 
            text-lg 
            max-w-xl
          ">

            Passionate about Machine Learning, Artificial Intelligence,
            Data Analytics and Full Stack Development.
            I enjoy building intelligent applications that solve
            real-world problems.

          </p>





          {/* BUTTONS */}

          <div className="
            flex 
            flex-wrap 
            gap-5 
            mt-10
          ">


            {/* Resume */}

            <a
              href="/Tanvi_Shinde_Resume.pdf"
              className="
              flex items-center gap-3
              px-8 py-4
              rounded-lg
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              text-black
              font-bold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_35px_rgba(6,182,212,.8)]
              "
            >

              <FaDownload />

              Resume

            </a>




            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/tanvi-shinde-3345b3312"
              target="_blank"
              rel="noreferrer"
              className="
              flex items-center gap-3
              px-7 py-4
              rounded-lg
              border border-blue-500
              text-white
              font-semibold
              transition-all
              duration-300
              hover:bg-blue-500/20
              hover:-translate-y-1
              hover:shadow-[0_0_30px_rgba(59,130,246,.7)]
              "
            >

              <FaLinkedin className="text-xl"/>

              LinkedIn

            </a>




            {/* GitHub */}

            <a
              href="https://github.com/tanvishinde09"
              target="_blank"
              rel="noreferrer"
              className="
              flex items-center gap-3
              px-7 py-4
              rounded-lg
              border border-purple-500
              text-white
              font-semibold
              transition-all
              duration-300
              hover:bg-purple-500/20
              hover:-translate-y-1
              hover:shadow-[0_0_30px_rgba(168,85,247,.7)]
              "
            >

              <FaGithub className="text-xl"/>

              GitHub

            </a>


          </div>


        </div>





        {/* RIGHT IMAGE */}


        <div className="flex justify-center">


          <div
            className="
            relative
            animate-[float_5s_ease-in-out_infinite]
            "
          >


            {/* Glow */}

            <div
              className="
              absolute
              inset-0
              bg-cyan-500
              rounded-full
              blur-[100px]
              opacity-30
              animate-pulse
              "
            />



            {/* Photo */}

            <img
              src={profile}
              alt="Tanvi Shinde"
              className="
              relative
              w-[380px]
              h-[380px]
              lg:w-[430px]
              lg:h-[430px]
              rounded-full
              object-cover
              border-4
              border-cyan-400
              shadow-[0_0_60px_rgba(6,182,212,.6)]
              "
            />


          </div>


        </div>


      </div>


    </section>
  );
}