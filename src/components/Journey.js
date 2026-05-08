import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';
import { timeline } from '../data/timeline';

const Journey = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return FaBriefcase;
      case 'education':
        return FaGraduationCap;
      case 'milestone':
        return FaStar;
      default:
        return FaStar;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'work':
        return 'from-cyan-500 to-blue-600';
      case 'education':
        return 'from-purple-500 to-pink-600';
      case 'milestone':
        return 'from-yellow-500 to-orange-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="journey" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A simple timeline of my student journey and web development learning progress.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 h-full rounded-full"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = getIcon(item.type);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r ${getColor(item.type)} rounded-full border-4 border-black z-10`}></div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-full max-w-md ${isEven ? 'mr-8' : 'ml-8'}`}
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                      {/* Icon and year */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 bg-gradient-to-r ${getColor(item.type)} rounded-lg`}>
                          <Icon className="text-white text-lg" />
                        </div>
                        <span className="text-cyan-400 font-bold text-lg">{item.year}</span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 font-medium mb-2">{item.company}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
