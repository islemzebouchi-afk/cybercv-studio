import { useRef } from 'react';
import { User, Mail, Phone, MapPin, Linkedin, Globe, Camera, X } from 'lucide-react';
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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const update = (key: keyof typeof data.personalInfo, value: string) => {
    setData((prev) => ({ ...prev, personalInfo: { ...prev.personalInfo, [key]: value } }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      update('photo', ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    update('photo', '');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-4">
      {/* Photo upload */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <Camera size={14} /> Profile Photo
        </label>
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-border bg-muted/50 flex items-center justify-center shrink-0">
            {data.personalInfo.photo ? (
              <>
                <img src={data.personalInfo.photo} alt="Profile" className="w-full h-full object-cover" />
                <button
                  onClick={removePhoto}
                  className="absolute top-0 right-0 w-5 h-5 bg-destructive rounded-full flex items-center justify-center text-destructive-foreground"
                >
                  <X size={10} />
                </button>
              </>
            ) : (
              <User size={28} className="text-muted-foreground" />
            )}
          </div>
          <div className="flex-1">
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="glass glow-border px-4 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/5 transition flex items-center gap-2"
            >
              <Camera size={14} />
              {data.personalInfo.photo ? 'Change Photo' : 'Upload Photo'}
            </button>
            <p className="text-xs text-muted-foreground mt-1">JPG, PNG. Best with square images.</p>
          </div>
        </div>
      </div>

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
