import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FloatingTemplates } from './FloatingTemplates';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-pulse-glow" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 text-sm font-medium text-primary">
            <Sparkles size={14} />
            <span>AI-Powered Resume Builder</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
            <span className="block text-foreground">Build Your</span>
            <span className="block gradient-text">Dream Resume</span>
            <span className="block text-foreground">In Minutes</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Create stunning, ATS-friendly resumes with our premium builder. Choose from beautiful templates, customize every detail, and download instantly — completely free.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/builder')}
              className="gradient-primary px-8 py-4 rounded-xl font-semibold text-primary-foreground flex items-center gap-2 shadow-lg shadow-primary/25"
            >
              <Zap size={18} />
              Start Building
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/builder')}
              className="glass glow-border px-8 py-4 rounded-xl font-semibold text-foreground"
            >
              View Templates
            </motion.button>
          </div>

          <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Free Forever</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> Instant PDF</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary" /> ATS-Ready</span>
          </div>
        </motion.div>

        {/* Right: Floating Templates */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="hidden lg:block"
        >
          <FloatingTemplates />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
