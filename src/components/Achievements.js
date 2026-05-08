import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Learning Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A few simple milestones from my current student journey in web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl mb-4 font-bold text-cyan-400"
                >
                  {achievement.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{achievement.description}</p>

                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                  {achievement.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <motion.h3
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-4xl font-bold text-cyan-400 mb-2"
            >
              5+
            </motion.h3>
            <p className="text-gray-400">Practice Projects</p>
          </div>
          <div className="text-center">
            <motion.h3
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-4xl font-bold text-cyan-400 mb-2"
            >
              0
            </motion.h3>
            <p className="text-gray-400">Certifications</p>
          </div>
          <div className="text-center">
            <motion.h3
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-4xl font-bold text-cyan-400 mb-2"
            >
              1+
            </motion.h3>
            <p className="text-gray-400">Years Learning</p>
          </div>
          <div className="text-center">
            <motion.h3
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-4xl font-bold text-cyan-400 mb-2"
            >
              100%
            </motion.h3>
            <p className="text-gray-400">Dedication</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
