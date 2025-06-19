
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: '🚀',
      title: t('services.wordpress'),
      description: 'Custom WordPress themes, plugins, and full website development',
      features: ['Custom Theme Development', 'Plugin Development', 'WordPress Optimization', 'Security Implementation'],
      price: 'From $500'
    },
    {
      icon: '⚡',
      title: t('services.custom'),
      description: 'Modern web applications built with React and latest technologies',
      features: ['React Applications', 'API Integration', 'Database Design', 'Performance Optimization'],
      price: 'From $800'
    },
    {
      icon: '🛒',
      title: t('services.ecommerce'),
      description: 'Complete e-commerce solutions with payment integration',
      features: ['WooCommerce Setup', 'Payment Integration', 'Inventory Management', 'Order Processing'],
      price: 'From $1200'
    },
    {
      icon: '🔧',
      title: t('services.maintenance'),
      description: 'Ongoing website maintenance, updates, and technical support',
      features: ['Regular Updates', 'Security Monitoring', 'Backup Management', 'Technical Support'],
      price: 'From $200/month'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            Professional web development services to help your business grow online
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="text-sm text-gray-500 dark:text-gray-400 mb-4 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Price */}
                  <div className="mt-auto">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {service.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-lg mb-6 opacity-90">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
