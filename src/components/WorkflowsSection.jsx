import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function WorkflowsSection() {
  const workflows = [
    {
      title: 'Peak LeadFlow Automation Suite',
      description: 'Complete automation system that captures, nurtures, and converts leads while you sleep. Built with cutting-edge AI to handle everything from initial contact to appointment booking.',
      videoUrl: 'https://www.youtube.com/embed/H1cGEdb36E0?si=m8msRfYvEczXV59n',
    },
    {
      title: 'Peak Lead Agent',
      description: 'Intelligent AI assistant that engages prospects 24/7, qualifies leads instantly, and books appointments automatically. Your digital sales team that never takes a break.',
      videoUrl: 'https://www.youtube.com/embed/coiK5_4z8cc?si=dn3Cyw8xE5iah-k4',
    },
  ];

  return (
    <section id="workflows" className="py-16 md:py-24 bg-gradient-to-br from-black to-dark-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Automation Workflows</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">See our automation expertise in action</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-500"
            >
              <div className="aspect-video relative">
                <iframe
                  src={workflow.videoUrl}
                  title={workflow.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{workflow.title}</h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{workflow.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}