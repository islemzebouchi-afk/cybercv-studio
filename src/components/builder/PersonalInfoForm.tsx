import { User, Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import type { ResumeData } from '@/types/resume';

interface Props {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const Field = ({ icon: Icon, label, value, onChange, multiline }: {
  icon: any; label: string; value: string; onChange: (v: string) => void; multiline?: boolean;
}) => (
  <div className="space-y-1.5">
    <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
      <Icon size={14} /> {label}
    </label>
    {multiline ? (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
      />
    ) : (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
      />
    )}
  </div>
);

const PersonalInfoForm = ({ data, setData }: Props) => {
  const update = (key: keyof typeof data.personalInfo, value: string) => {
    setData((prev) => ({ ...prev, personalInfo: { ...prev.personalInfo, [key]: value } }));
  };

  return (
    <div className="space-y-4">
      <Field icon={User} label="Full Name" value={data.personalInfo.fullName} onChange={(v) => update('fullName', v)} />
      <Field icon={User} label="Job Title" value={data.personalInfo.title} onChange={(v) => update('title', v)} />
      <div className="grid grid-cols-2 gap-4">
        <Field icon={Mail} label="Email" value={data.personalInfo.email} onChange={(v) => update('email', v)} />
        <Field icon={Phone} label="Phone" value={data.personalInfo.phone} onChange={(v) => update('phone', v)} />
      </div>
      <Field icon={MapPin} label="Location" value={data.personalInfo.location} onChange={(v) => update('location', v)} />
      <Field icon={User} label="Summary" value={data.personalInfo.summary} onChange={(v) => update('summary', v)} multiline />
      <div className="grid grid-cols-2 gap-4">
        <Field icon={Linkedin} label="LinkedIn" value={data.personalInfo.linkedin} onChange={(v) => update('linkedin', v)} />
        <Field icon={Globe} label="Website" value={data.personalInfo.website} onChange={(v) => update('website', v)} />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
