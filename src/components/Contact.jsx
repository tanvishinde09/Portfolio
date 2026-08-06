import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";


function Contact() {

  const form = useRef();
  const [sent, setSent] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j6uja76",
        "template_orlnb4x",
        form.current,
        {
          publicKey: "ztG8d03C_mY9ldM0v",
        }
      )
      .then(() => {

        setSent(true);
        form.current.reset();

      })
      .catch((error) => {
        console.log(error);
      });

  };


  return (
    <section
      id="contact"
      className="
      min-h-screen
      bg-[#030712]
      text-white
      py-20
      px-6
      "
    >

      <div className="max-w-5xl mx-auto">


        <motion.h2
          initial={{opacity:0,y:-30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="
          text-4xl
          font-bold
          text-center
          text-indigo-400
          mb-4
          "
        >
          Let's Connect
        </motion.h2>


        <p className="
        text-center
        text-gray-400
        mb-12
        ">
          Ready to collaborate on exciting projects? Let's discuss how we can work together.
        </p>



        <div className="
        grid
        md:grid-cols-2
        gap-8
        ">


          {/* LEFT FORM */}

          <motion.div
          initial={{opacity:0,x:-40}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6}}

          className="
          bg-[#111118]
          border
          border-gray-700
          rounded-xl
          p-6
          shadow-lg
          "
          >


            <h3 className="
            text-xl
            font-bold
            text-blue-400
            mb-6
            ">
              Send a Message
            </h3>


            <form ref={form} onSubmit={sendEmail}>


            <div className="grid grid-cols-2 gap-4">


              <input
              name="user_name"
              placeholder="Your Name"
              required
              className="
              bg-transparent
              border
              border-gray-700
              rounded-lg
              p-3
              text-sm
              outline-none
              focus:border-blue-500
              "
              />


              <input
              name="user_email"
              type="email"
              placeholder="your@email.com"
              required
              className="
              bg-transparent
              border
              border-gray-700
              rounded-lg
              p-3
              text-sm
              outline-none
              focus:border-blue-500
              "
              />

            </div>



            <input
            name="subject"
            placeholder="Project Discussion"
            className="
            w-full
            mt-4
            bg-transparent
            border
            border-gray-700
            rounded-lg
            p-3
            text-sm
            outline-none
            focus:border-blue-500
            "
            />



            <textarea
            name="message"
            rows="4"
            required
            placeholder="Tell me about your project or how we can collaborate..."

            className="
            w-full
            mt-4
            bg-transparent
            border
            border-gray-700
            rounded-lg
            p-3
            text-sm
            outline-none
            focus:border-blue-500
            "

            />



            <button
            type="submit"
            className="
            mt-5
            w-full
            py-3
            rounded-lg
            bg-gradient-to-r
            from-blue-500
            to-purple-600
            flex
            items-center
            justify-center
            gap-2
            hover:scale-105
            transition
            "

            >

              <FaPaperPlane/>
              Send Message

            </button>


            {
              sent && 
              <p className="text-green-400 text-center mt-3">
                Message sent successfully ✅
              </p>
            }


            </form>


          </motion.div>





          {/* RIGHT CONTACT */}

          <motion.div

          initial={{opacity:0,x:40}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6}}

          className="
          bg-[#111118]
          border
          border-gray-700
          rounded-xl
          p-6
          "
          >


            <h3 className="
            text-xl
            font-bold
            text-purple-400
            mb-5
            ">
              Get in Touch
            </h3>


            <p className="
            text-gray-400
            text-sm
            mb-6
            ">
              I'm always open to discussing new opportunities, interesting projects,
              or just having a chat about technology and innovation.
            </p>




            <div className="space-y-4">


              <a
              href="mailto:shinde.tanvi.eng@gmail.com"
              className="
              flex
              items-center
              gap-4
              bg-[#171722]
              p-4
              rounded-lg
              hover:border-blue-500
              border
              border-transparent
              transition
              "
              >

                <FaEnvelope className="text-blue-400 text-xl"/>

                <div>
                  <h4>Email</h4>
                  <p className="text-sm text-gray-400">
                    shinde.tanvi.eng@gmail.com
                  </p>
                </div>

              </a>




              <a
              href="https://github.com/tanvishinde09"
              target="_blank"
              rel="noreferrer"
              className="
              flex
              items-center
              gap-4
              bg-[#171722]
              p-4
              rounded-lg
              hover:border-purple-500
              border
              border-transparent
              transition
              "
              >

                <FaGithub className="text-purple-400 text-xl"/>

                <div>
                  <h4>GitHub</h4>
                  <p className="text-sm text-gray-400">
                    github.com/tanvishinde09
                  </p>
                </div>

              </a>





              <a
              href="https://www.linkedin.com/in/tanvi-shinde-3345b3312"
              target="_blank"
              rel="noreferrer"
              className="
              flex
              items-center
              gap-4
              bg-[#171722]
              p-4
              rounded-lg
              hover:border-cyan-500
              border
              border-transparent
              transition
              "
              >

                <FaLinkedin className="text-cyan-400 text-xl"/>

                <div>
                  <h4>LinkedIn</h4>
                  <p className="text-sm text-gray-400">
                    linkedin.com/in/tanvi-shinde-3345b3312
                  </p>
                </div>

              </a>



            </div>


          </motion.div>



        </div>


      </div>


    </section>
  );
}


export default Contact;