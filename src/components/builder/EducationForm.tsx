import { Plus, Trash2 } from 'lucide-react';
import type { ResumeData, Education } from '@/types/resume';

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const EducationForm = ({ data, setData }: Props) => {
  const add = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
    };
    setData((prev) => ({ ...prev, education: [...prev.education, newEdu] }));
  };

  const remove = (id: string) => {
    setData((prev) => ({ ...prev, education: prev.education.filter((e) => e.id !== id) }));
  };

  const update = (id: string, key: keyof Education, value: string) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.map((e) => (e.id === id ? { ...e, [key]: value } : e)),
    }));
  };

  const inputCls = "w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition";

  return (
    <div className="space-y-6">
      {data.education.map((edu) => (
        <div key={edu.id} className="glass p-4 space-y-3 relative group">
          <button onClick={() => remove(edu.id)} className="absolute top-3 right-3 text-destructive opacity-0 group-hover:opacity-100 transition">
            <Trash2 size={16} />
          </button>
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">Institution</label>
            <input value={edu.institution} onChange={(e) => update(edu.id, 'institution', e.target.value)} className={inputCls} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Degree</label>
              <input value={edu.degree} onChange={(e) => update(edu.id, 'degree', e.target.value)} className={inputCls} />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Field of Study</label>
              <input value={edu.field} onChange={(e) => update(edu.id, 'field', e.target.value)} className={inputCls} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">Start Date</label>
              <input type="month" value={edu.startDate} onChange={(e) => update(edu.id, 'startDate', e.target.value)} className={inputCls} />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-muted-foreground">End Date</label>
              <input type="month" value={edu.endDate} onChange={(e) => update(edu.id, 'endDate', e.target.value)} className={inputCls} />
            </div>
          </div>
        </div>
      ))}
      <button onClick={add} className="w-full glass glow-border py-3 flex items-center justify-center gap-2 text-sm font-medium text-primary hover:bg-primary/5 transition rounded-xl">
        <Plus size={16} /> Add Education
      </button>
    </div>
  );
};

export default EducationForm;
