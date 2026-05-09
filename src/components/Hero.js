import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaEye } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Hero = () => {
  const [profileImageLoaded, setProfileImageLoaded] = useState(true);
  const profileImage = `${process.env.PUBLIC_URL}/profile.jpg`;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background particles effect - simplified */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Aneek Dubey
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl mb-8 text-gray-300"
            >
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  '3rd Year Student',
                  2000,
                  'Web Development Learner',
                  2000,
                  'React Beginner',
                  2000,
                  'Curious Coder',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-cyan-400 font-semibold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-400 mb-8 max-w-lg"
            >
              I am a 3rd-year student from Midnapore, West Bengal, India, learning web
              development step by step through practice, projects, and curiosity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaEye />
                View Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-cyan-400 rounded-full font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaDownload />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start gap-6 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.2, color: '#0ea5e9' }}
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#0ea5e9' }}
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FiLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#0ea5e9' }}
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FiTwitter size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right content - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-xl opacity-75 animate-pulse"></div>

              {/* Put your photo at public/profile.jpg to show it here */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-4 border-cyan-400/50 overflow-hidden flex items-center justify-center">
                {profileImageLoaded ? (
                  <img
                    src={profileImage}
                    alt="Aneek Dubey"
                    className="h-full w-full object-cover"
                    onError={() => setProfileImageLoaded(false)}
                  />
                ) : (
                  <div className="w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full flex items-center justify-center">
                    <span className="text-7xl font-bold text-cyan-300">AD</span>
                  </div>
                )}
              </div>

              {/* Floating tech labels */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-sm font-semibold text-cyan-200">React</div>
                <div className="absolute top-1/2 right-0 transform translate-x-8 -translate-y-1/2 text-sm font-semibold text-cyan-200">Web</div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 text-sm font-semibold text-cyan-200">JS</div>
                <div className="absolute top-1/2 left-0 transform -translate-x-8 -translate-y-1/2 text-sm font-semibold text-cyan-200">UI</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
