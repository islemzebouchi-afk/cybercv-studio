import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import type { ResumeData } from '@/types/resume';

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const SkillsForm = ({ data, setData }: Props) => {
  const [input, setInput] = useState('');

  const add = () => {
    const skill = input.trim();
    if (skill && !data.skills.includes(skill)) {
      setData((prev) => ({ ...prev, skills: [...prev.skills, skill] }));
      setInput('');
    }
  };

  const remove = (skill: string) => {
    setData((prev) => ({ ...prev, skills: prev.skills.filter((s) => s !== skill) }));
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), add())}
          placeholder="Type a skill and press Enter..."
          className="flex-1 bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
        />
        <button onClick={add} className="gradient-primary px-4 rounded-lg text-primary-foreground">
          <Plus size={18} />
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <span key={skill} className="glass glow-border px-3 py-1.5 text-sm font-medium text-foreground flex items-center gap-2 group">
            {skill}
            <button onClick={() => remove(skill)} className="text-muted-foreground hover:text-destructive transition">
              <X size={14} />
            </button>
          </span>
        ))}
      </div>

      {data.skills.length === 0 && (
        <p className="text-center text-muted-foreground text-sm py-8">Add your skills above to see them on your resume</p>
      )}
    </div>
  );
};

export default SkillsForm;
