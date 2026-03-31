import { motion } from 'framer-motion';
import type { TemplateStyle } from '@/types/resume';

interface Props {
  selected: TemplateStyle;
  onSelect: (t: TemplateStyle) => void;
}

const templates: { id: TemplateStyle; name: string; colors: string }[] = [
  { id: 'minimalist', name: 'Minimalist White', colors: 'from-gray-100 to-white' },
  { id: 'modern-dark', name: 'Modern Dark', colors: 'from-gray-900 to-gray-800' },
  { id: 'creative-blue', name: 'Creative Blue', colors: 'from-blue-600 to-blue-400' },
];

const TemplateSelector = ({ selected, onSelect }: Props) => (
  <div className="flex gap-2">
    {templates.map((t) => (
      <motion.button
        key={t.id}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect(t.id)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
          selected === t.id
            ? 'glass glow-border text-primary'
            : 'glass text-muted-foreground hover:text-foreground'
        }`}
      >
        <div className={`w-4 h-4 rounded bg-gradient-to-br ${t.colors} border border-border`} />
        {t.name}
      </motion.button>
    ))}
  </div>
);

export default TemplateSelector;
