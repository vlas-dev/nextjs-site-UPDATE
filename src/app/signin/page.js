"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    console.log("Signing in with email:", email, "and password:", password);
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
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 md:mt-12 mx-auto p-8 bg-white w-4/5 md:w-2/6 rounded-xl z-10"
          >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Sign in to your account</h2>
          <form onSubmit={handleSignin}>
            <div className="mb-4">
              <label className="block text-gray-500 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500 font-medium">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-gray-800 hover:text-gray-700">Forgot your password?</a> {/* Link for "Forgot Password?" */}
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
            >
              Sign in
            </button>
            
            <div className="mt-6 text-center">
              <p className="text-sm">
                Don't have an account yet? &nbsp;
                <Link href="/signup" passHref>
                  <button className="text-gray-800 hover:text-gray-700 font-medium">Sign up</button> 
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
