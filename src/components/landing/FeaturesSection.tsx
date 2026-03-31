import { motion } from 'framer-motion';
import { FileText, Download, Palette, Shield } from 'lucide-react';

const features = [
  { icon: FileText, title: 'Smart Templates', desc: '3 premium, ATS-optimized templates crafted by designers.' },
  { icon: Download, title: 'Instant PDF', desc: 'One-click export to high-quality PDF. No signup required.' },
  { icon: Palette, title: 'Live Preview', desc: 'See changes in real-time as you type. WYSIWYG editing.' },
  { icon: Shield, title: '100% Free', desc: 'No hidden fees, no watermarks, no limits. Yours forever.' },
];

const FeaturesSection = () => (
  <section className="py-24 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Everything You Need to <span className="gradient-text">Stand Out</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Professional tools to create the perfect resume, completely free.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass glow-border p-6 text-center group"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground">
              <f.icon size={22} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
