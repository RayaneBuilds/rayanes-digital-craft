
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation();

  const skills = [
    { name: 'WordPress', level: 95, color: 'from-blue-500 to-blue-600' },
    { name: 'React', level: 90, color: 'from-cyan-500 to-cyan-600' },
    { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-yellow-600' },
    { name: 'PHP', level: 85, color: 'from-purple-500 to-purple-600' },
    { name: 'HTML/CSS', level: 92, color: 'from-orange-500 to-orange-600' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-green-600' }
  ];

  const tools = [
    'WordPress', 'React', 'Next.js', 'Tailwind CSS', 'PHP', 'JavaScript',
    'TypeScript', 'Node.js', 'MySQL', 'PostgreSQL', 'Git', 'Docker',
    'Figma', 'Adobe XD', 'WooCommerce', 'Elementor'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-white">R</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Rayane</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">Full-Stack Developer</p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {t('about.description')}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-800 dark:text-white mr-2">Experience:</span>
                    <span className="text-gray-600 dark:text-gray-300">5+ Years</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-800 dark:text-white mr-2">Location:</span>
                    <span className="text-gray-600 dark:text-gray-300">Morocco</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-800 dark:text-white mr-2">Specialization:</span>
                    <span className="text-gray-600 dark:text-gray-300">WordPress & React</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Technical Skills</h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: '100%' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}

            {/* Tools & Technologies */}
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
