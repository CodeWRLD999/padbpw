import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SolutionsSection from '../components/SolutionsSection';
import WorkflowsSection from '../components/WorkflowsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navigation />
      <HeroSection />
      <SolutionsSection />
      <WorkflowsSection />
      <CaseStudiesSection />
      <CTASection />
      <Footer />
    </div>
  );
}