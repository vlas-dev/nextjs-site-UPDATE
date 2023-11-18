import React from "react";
import {
  FaRocket,
  FaConnectdevelop,
  FaUsers,
  FaShieldAlt,
  FaMobileAlt,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";
export default function Features() {
  return (
    <section id="features" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-md text-gray-600">
            Elevate your business with our cutting-edge solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <FeatureCard
              Icon={FaRocket}
              title="Rapid Deployment"
              description="Deploy efficiently with our streamlined setup."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <FeatureCard
              Icon={FaConnectdevelop}
              title="Integrated Solutions"
              description="Seamless integration with your existing tools."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.28 }}
          >
            <FeatureCard
              Icon={FaUsers}
              title="Collaborative Workspace"
              description="Collaborate effectively in a shared environment."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.34 }}
          >
            <FeatureCard
              Icon={FaShieldAlt}
              title="Robust Security"
              description="State-of-the-art security to protect your data."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.38 }}
          >
            <FeatureCard
              Icon={FaMobileAlt}
              title="Mobile Ready"
              description="Optimized for an excellent mobile experience."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FeatureCard
              Icon={FaChartLine}
              title="Actionable Analytics"
              description="Insights to drive your business decisions."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300 ease-in-out">
      <Icon className="text-5xl text-gray-800 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
