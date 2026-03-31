import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';

const LandingPage = () => (
  <div className="min-h-screen bg-background">
    {/* Navbar */}
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 glass-strong border-b border-border"
    >
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
            <FileText size={16} className="text-primary-foreground" />
          </div>
          <span className="gradient-text">ResumeForge</span>
        </div>
      </div>
    </motion.nav>

    <HeroSection />
    <FeaturesSection />

    {/* Footer */}
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      <p>© 2026 ResumeForge. Built with precision. Free forever.</p>
    </footer>
  </div>
);

export default LandingPage;
