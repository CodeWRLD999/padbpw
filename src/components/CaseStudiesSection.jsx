import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp } from 'lucide-react';

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      icon: Award,
      title: 'Hair and Aesthetics Transformation',
      summary: 'Elevated a local salon to market leadership with SEO, ads, and automation.',
      results: ['300% increase in online bookings', 'Top 3 Google ranking in 6 months', 'Automated appointment system saving 15 hours/week'],
    },
    {
      icon: TrendingUp,
      title: 'Local Electricians Company Turnaround',
      summary: 'Helped a tradesperson rise to the top of local searches with targeted strategies.',
      results: ['450% growth in qualified leads', '#1 ranking for key local searches', 'Consistent 5-star review flow'],
    },
  ];

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Real results from real businesses</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#FF4040] p-6 sm:p-8 md:p-10 rounded-xl hover:shadow-xl transition-all duration-500 group hover:-translate-y-2"
            >
              <div className="mb-4 sm:mb-6">
                <div className="inline-flex p-3 sm:p-4 rounded-lg bg-red-500/20">
                  <study.icon size={32} className="text-red-500" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">{study.title}</h3>
              <p className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">{study.summary}</p>
              <div className="space-y-2 sm:space-y-3">
                {study.results.map((result, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 mt-2 sm:mt-2.5 flex-shrink-0"></div>
                    <p className="text-white/80 text-sm sm:text-base">{result}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}