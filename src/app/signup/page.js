"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // logic here
    console.log(
      "Signing up with email:",
      email,
      "password:",
      password,
      "confirm password:",
      confirmPassword
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <ParticlesBackground />
      <div className="flex justify-center items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-20 mx-auto p-8 bg-white w-4/5 lg:w-2/6 rounded-xl z-10"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
            Create your account
          </h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label className="block text-gray-500 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500 font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
            >
              Sign Up
            </button>
            <div className="mt-6 text-center">
              <p className="text-sm">
                Already have an account? &nbsp;
                <Link href="/signin" passHref>
                  <button className="text-gray-800 hover:text-gray-700 font-medium">Sign in</button> 
                  </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
