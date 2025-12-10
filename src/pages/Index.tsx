
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import AnalyticsShowcase from '@/components/AnalyticsShowcase';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyVecxa from '@/components/WhyVecxa';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="VECXA Technologies - Advanced AI-Driven Smart Textile Solutions" 
        description="VECXA Technologies - Advanced AI-Driven Smart Textile Solutions"
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['smart textiles', 'wearable technology', 'textile sensors', 'sports tech', 'safety monitoring', 'performance analytics', 'manufacturing']}
      />
      <Hero />
      <AnalyticsShowcase />
      <Features />
      <WhyVecxa />
      <Projects />
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;
