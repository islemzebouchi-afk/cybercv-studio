import { Plus, Trash2 } from 'lucide-react';
import type { ResumeData, Experience } from '@/types/resume';

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const ExperienceForm = ({ data, setData }: Props) => {
  const add = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    setData((prev) => ({ ...prev, experiences: [...prev.experiences, newExp] }));
  };

  const remove = (id: string) => {
    setData((prev) => ({ ...prev, experiences: prev.experiences.filter((e) => e.id !== id) }));
  };

  const update = (id: string, key: keyof Experience, value: any) => {
    setData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((e) => (e.id === id ? { ...e, [key]: value } : e)),
    }));
  };

  const inputCls = "w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition";

  return (
    <div className="space-y-6">
      {data.experiences.map((exp) => (
        <div key={exp.id} className="glass p-4 space-y-3 relative group">
          <button onClick={() => remove(exp.id)} className="absolute top-3 right-3 text-destructive opacity-0 group-hover:opacity-100 transition">
            <Trash2 size={16} />
          </button>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Company</label>
              <input value={exp.company} onChange={(e) => update(exp.id, 'company', e.target.value)} className={inputCls} />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Position</label>
              <input value={exp.position} onChange={(e) => update(exp.id, 'position', e.target.value)} className={inputCls} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Start Date</label>
              <input type="month" value={exp.startDate} onChange={(e) => update(exp.id, 'startDate', e.target.value)} className={inputCls} />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">End Date</label>
              <input type="month" value={exp.endDate} disabled={exp.current} onChange={(e) => update(exp.id, 'endDate', e.target.value)} className={inputCls + (exp.current ? ' opacity-50' : '')} />
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
            <input type="checkbox" checked={exp.current} onChange={(e) => update(exp.id, 'current', e.target.checked)} className="accent-primary" />
            Currently working here
          </label>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Description</label>
            <textarea value={exp.description} onChange={(e) => update(exp.id, 'description', e.target.value)} rows={3} className={inputCls + ' resize-none'} />
          </div>
        </div>
      ))}
      <button onClick={add} className="w-full glass glow-border py-3 flex items-center justify-center gap-2 text-sm font-medium text-primary hover:bg-primary/5 transition rounded-xl">
        <Plus size={16} /> Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
