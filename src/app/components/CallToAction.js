import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section className="relative flex flex-col items-center justify-center h-[60vh] text-white">
      <ParticlesBackground />

      <div
        className="absolute inset-0 blur-[118px] h-[400px] mx-auto"
        style={{
          background:
            "linear-gradient(45deg, rgba(192, 132, 252, 0.03) 0%, rgba(14, 165, 233, 0.08) 30%, rgba(232, 121, 249, 0.05) 70%, rgba(79, 70, 229, 0.03) 100%)",
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold ">Ready to try Synergy?</h2>
        <Link href="/signin" passHref>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-white text-gray-800 mt-8 py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl"
          >
            Get started
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
