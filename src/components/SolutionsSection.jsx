import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, TrendingUp } from 'lucide-react';

export default function SolutionsSection() {
  const solutions = [
    { icon: Globe, title: 'Web Design & SEO', description: 'Transform your online presence with custom Web Design and SEO.', color: 'red' },
    { icon: Zap, title: 'AI Automation Workflows', description: 'Streamline operations with AI Automation Workflows.', color: 'red' },
    { icon: TrendingUp, title: 'Market Strategies', description: 'Dominate your market with proven Market Strategies (funnels, ad campaigns, visual assets, lead generation, appointment setting, and closing).', color: 'red' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What I Can Do for Your Business
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Struggling to grow online? Losing leads to competitors? Wasting time on manual tasks?
          </p>
          <div className="mt-6 sm:mt-8 h-1 w-20 sm:w-24 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-black p-6 sm:p-8 rounded-xl hover:shadow-xl transition-all duration-500 group hover:-translate-y-2"
            >
              <div className="mb-4 sm:mb-6">
                <div className={`inline-flex p-3 sm:p-4 rounded-lg bg-[${solution.color}]/10`}>
                  <solution.icon size={28} style={{ color: solution.color }} />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{solution.title}</h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}