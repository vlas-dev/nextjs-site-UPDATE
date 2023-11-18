import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Form() {
  return (
    <div>
      <div className="relative flex flex-col md:flex-row items-center justify-center text-gray-100 min-h-screen">
        <ParticlesBackground />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-lg  mx-auto  md:mr-0"
        >
          <motion.p className="text-white text-3xl font-semibold sm:text-4xl hidden md:block">
            Get in touch
          </motion.p>
          <motion.p className="text-gray-100 pt-4 hidden md:block">
            We&apos;d love to hear from you! If you have any questions or
            feedback, please don&apos;t hesitate to reach out using the form
            below. Our team will get back to you as soon as possible.
          </motion.p>
          <motion.div className="flex mt-10 mb-3 space-x-4">
            <motion.a
              href="https://whatsapp.com/"
              className="text-gray-500 hover:text-gray-200 z-10"
            >
              <FaWhatsapp className="inline-block mr-2 text-3xl " />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/"
              className="text-gray-500 hover:text-gray-200 z-10"
            >
              <FaInstagram className="inline-block mr-2 text-3xl" />
            </motion.a>
            <motion.a
              href="mailto:contact@example.com"
              className="text-gray-500 hover:text-gray-200 z-10"
            >
              <FaEnvelope className="inline-block mr-2 text-3xl" />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-4 md:mt-12 mx-auto p-8 bg-white w-4/5 md:w-2/6 rounded-xl z-10" 

        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Contact us</h2>
          <div className="mb-2 text-gray-500">
            <label className="font-medium">Full name</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full px-3 py-2 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
          </div>
          <div className="mb-2 text-gray-500">
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              placeholder="example@example.com"
              className="w-full px-3 py-2 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
          </div>
          <div className="mb-2 text-gray-500">
            <label className="font-medium">Phone number</label>
            <div className="relative">
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                required
                className="w-full pl-3 py-2  appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
          </div>
          <div className="mb-2 text-gray-500">
            <label className="font-medium">Message</label>
            <textarea
              required
              className="w-full h-20 md:h-36 px-3 py-2  resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              placeholder="Enter your message here..."
            ></textarea>
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
            Submit
          </button>
        </motion.form>

        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(45deg, rgba(192, 132, 252, 0.03) 0%, rgba(14, 165, 233, 0.08) 30%, rgba(232, 121, 249, 0.05) 70%, rgba(79, 70, 229, 0.03) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}
