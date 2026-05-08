import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaProjectDiagram, FaAward } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaCode, value: '5+', label: 'Practice Projects' },
    { icon: FaProjectDiagram, value: '3rd', label: 'Year Student' },
    { icon: FaAward, value: '0', label: 'Work Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my learning journey, basic skills, and interest in web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Student Developer With A Learning Mindset</h3>
            <p className="text-gray-300 leading-relaxed">
              I am currently in my 3rd year and learning web development from the basics.
              I do not have professional work experience yet, but I am serious about improving
              my fundamentals and building small projects that help me understand real concepts.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My focus right now is HTML, CSS, JavaScript, React basics, and learning how to
              write cleaner code. I am from Midnapore, West Bengal, India, and I am working
              toward becoming a confident developer through consistency and practice.
            </p>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Education</h4>
              <div className="space-y-4">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                  <h5 className="text-white font-medium">Bachelor's Degree Student</h5>
                  <p className="text-gray-400">Currently in 3rd Year</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Learning programming fundamentals, web development, and project building.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                    <stat.icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
