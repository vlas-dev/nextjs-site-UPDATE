import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const scrollToFeatures = () => {
    const featuresComponent = document.getElementById("features");
    featuresComponent.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-white min-h-screen">
      <ParticlesBackground />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto text-center z-10 p-4 mb-20 lg:mb-32"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl md:text-6xl font-bold tracking-tight"
        >
          Transform your business with Synergy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg mt-4 md:mt-6 font-medium mx-auto px-2 md:px-4"
        >
          Revolutionize your workflow with our AI-driven omnichannel solution.{" "}
          <br />
          Integrate multiple platforms into one seamless experience.
        </motion.p>

        <Link href="/signin" passHref>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="bg-white text-gray-800 mt-6 md:mt-8 py-2 px-4 md:py-3 md:px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl"
          >
            Get started
          </motion.button>
        </Link>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-gray-100 mt-4 md:mt-6 py-2 px-4 md:py-3 md:px-6 rounded-lg font-semibold "
          onClick={scrollToFeatures}
        >
          Learn more
        </motion.button>
      </motion.div>

      <div
        className="absolute inset-0 blur-[50px] h-[400px] md:h-[800px] mx-auto "
        style={{
          background:
            "linear-gradient(45deg, rgba(192, 132, 252, 0.03) 0%, rgba(14, 165, 233, 0.08) 30%, rgba(232, 121, 249, 0.05) 70%, rgba(79, 70, 229, 0.03) 100%)",
        }}
      ></div>
    </section>
  );
}