import { forwardRef } from 'react';
import type { ResumeData, TemplateStyle } from '@/types/resume';

interface Props {
  data: ResumeData;
  template: TemplateStyle;
}

const formatDate = (d: string) => {
  if (!d) return '';
  const [y, m] = d.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[parseInt(m) - 1]} ${y}`;
};

const MinimalistTemplate = ({ data }: { data: ResumeData }) => (
  <div className="bg-white text-gray-900 p-8 min-h-[297mm] w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="border-b-2 border-gray-900 pb-4 mb-6">
      <h1 className="text-3xl font-bold tracking-tight">{data.personalInfo.fullName || 'Your Name'}</h1>
      <p className="text-lg text-gray-600 mt-1">{data.personalInfo.title}</p>
      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
        {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
        {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
        {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
      </div>
    </div>

    {data.personalInfo.summary && (
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Summary</h2>
        <p className="text-sm leading-relaxed text-gray-700">{data.personalInfo.summary}</p>
      </div>
    )}

    {data.experiences.length > 0 && (
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Experience</h2>
        <div className="space-y-4">
          {data.experiences.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-sm">{exp.position}</h3>
                  <p className="text-sm text-gray-500">{exp.company}</p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {formatDate(exp.startDate)} — {exp.current ? 'Present' : formatDate(exp.endDate)}
                </span>
              </div>
              {exp.description && <p className="text-sm text-gray-600 mt-1 leading-relaxed">{exp.description}</p>}
            </div>
          ))}
        </div>
      </div>
    )}

    {data.skills.length > 0 && (
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((s) => (
            <span key={s} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded">{s}</span>
          ))}
        </div>
      </div>
    )}

    {data.education.length > 0 && (
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Education</h2>
        {data.education.map((edu) => (
          <div key={edu.id} className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-sm">{edu.degree} in {edu.field}</h3>
              <p className="text-sm text-gray-500">{edu.institution}</p>
              <p className="mt-2 text-sm text-gray-600 whitespace-pre-wrap break-words max-w-[150mm]">
  {(edu as any).description}
</p>
            </div>
            <span className="text-xs text-gray-400">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

const ModernDarkTemplate = ({ data }: { data: ResumeData }) => (
  <div className="bg-gray-950 text-gray-100 p-8 min-h-[297mm] w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-6 mb-6 border border-cyan-500/20">
      <h1 className="text-3xl font-bold">{data.personalInfo.fullName || 'Your Name'}</h1>
      <p className="text-cyan-400 mt-1 font-medium">{data.personalInfo.title}</p>
      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
        {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
        {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
        {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
      </div>
    </div>

    {data.personalInfo.summary && (
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Summary</h2>
        <p className="text-sm leading-relaxed text-gray-300">{data.personalInfo.summary}</p>
      </div>
    )}

    {data.experiences.length > 0 && (
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Experience</h2>
        <div className="space-y-4">
          {data.experiences.map((exp) => (
            <div key={exp.id} className="border-l-2 border-cyan-500/30 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-sm">{exp.position}</h3>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                </div>
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {formatDate(exp.startDate)} — {exp.current ? 'Present' : formatDate(exp.endDate)}
                </span>
              </div>
              {exp.description && <p className="text-sm text-gray-400 mt-1">{exp.description}</p>}
            </div>
          ))}
        </div>
      </div>
    )}

    {data.skills.length > 0 && (
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((s) => (
            <span key={s} className="text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2.5 py-1 rounded">{s}</span>
          ))}
        </div>
      </div>
    )}

    {data.education.length > 0 && (
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Education</h2>
        {data.education.map((edu) => (
          <div key={edu.id} className="flex justify-between items-start border-l-2 border-cyan-500/30 pl-4">
            <div>
              <h3 className="font-semibold text-sm">{edu.degree} in {edu.field}</h3>
              <p className="text-sm text-gray-400">{edu.institution}</p>
            </div>
            <span className="text-xs text-gray-500">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

const CreativeBlueTemplate = ({ data }: { data: ResumeData }) => (
  <div className="bg-white text-gray-900 min-h-[297mm] w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
    <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-8 text-white">
      <h1 className="text-3xl font-bold">{data.personalInfo.fullName || 'Your Name'}</h1>
      <p className="text-blue-100 mt-1 text-lg">{data.personalInfo.title}</p>
      <div className="flex flex-wrap gap-4 mt-3 text-sm text-blue-200">
        {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
        {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
        {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
      </div>
    </div>

    <div className="p-8">
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Summary</h2>
          <p className="text-sm leading-relaxed text-gray-600">{data.personalInfo.summary}</p>
        </div>
      )}

      {data.experiences.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Experience</h2>
          <div className="space-y-4">
            {data.experiences.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-sm">{exp.position}</h3>
                    <p className="text-sm text-blue-500">{exp.company}</p>
                  </div>
                  <span className="text-xs text-gray-400 bg-blue-50 px-2 py-0.5 rounded whitespace-nowrap">
                    {formatDate(exp.startDate)} — {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </span>
                </div>
                {exp.description && <p className="text-sm text-gray-600 mt-1">{exp.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((s) => (
              <span key={s} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">{s}</span>
            ))}
          </div>
        </div>
      )}

      {data.education.length > 0 && (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Education</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-sm">{edu.degree} in {edu.field}</h3>
                <p className="text-sm text-blue-500">{edu.institution}</p>
              </div>
              <span className="text-xs text-gray-400">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const ProfessionalPhotoTemplate = ({ data }: { data: ResumeData }) => (
  <div className="bg-white text-gray-900 min-h-[297mm] w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
    {/* Header with photo */}
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 p-8">
      <div className="flex items-center gap-6">
        {/* Photo */}
        <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-emerald-400/40 shadow-lg shadow-emerald-500/20 shrink-0 bg-gray-700 flex items-center justify-center">
          {data.personalInfo.photo ? (
            <img src={data.personalInfo.photo} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          )}
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white tracking-tight">{data.personalInfo.fullName || 'Your Name'}</h1>
          <p className="text-emerald-400 mt-1 text-lg font-medium">{data.personalInfo.title}</p>
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-300">
            {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
            {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
            {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
          </div>
          <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-400">
            {data.personalInfo.linkedin && <span>{data.personalInfo.linkedin}</span>}
            {data.personalInfo.website && <span>{data.personalInfo.website}</span>}
          </div>
        </div>
      </div>
    </div>

    {/* Body */}
    <div className="p-8 grid grid-cols-3 gap-8">
      {/* Main column */}
      <div className="col-span-2 space-y-6">
        {data.personalInfo.summary && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2 pb-1 border-b border-emerald-200">Summary</h2>
            <p className="text-sm leading-relaxed text-gray-600">{data.personalInfo.summary}</p>
          </div>
        )}

        {data.experiences.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3 pb-1 border-b border-emerald-200">Experience</h2>
            <div className="space-y-4">
              {data.experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-sm">{exp.position}</h3>
                      <p className="text-sm text-emerald-600">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap bg-emerald-50 px-2 py-0.5 rounded">
                      {formatDate(exp.startDate)} — {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </span>
                  </div>
                  {exp.description && <p className="text-sm text-gray-600 mt-1 leading-relaxed">{exp.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {data.education.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3 pb-1 border-b border-emerald-200">Education</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-sm">{edu.degree} in {edu.field}</h3>
                  <p className="text-sm text-emerald-600">{edu.institution}</p>
                </div>
                <span className="text-xs text-gray-400">{formatDate(edu.startDate)} — {formatDate(edu.endDate)}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2 pb-1 border-b border-emerald-200">Skills</h2>
            <div className="flex flex-wrap gap-1.5">
              {data.skills.map((s) => (
                <span key={s} className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md font-medium border border-emerald-100">{s}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const ResumePreview = forwardRef<HTMLDivElement, Props>(({ data, template }, ref) => {
  return (
    <div ref={ref} className="resume-preview">
      {template === 'minimalist' && <MinimalistTemplate data={data} />}
      {template === 'modern-dark' && <ModernDarkTemplate data={data} />}
      {template === 'creative-blue' && <CreativeBlueTemplate data={data} />}
      {template === 'professional-photo' && <ProfessionalPhotoTemplate data={data} />}
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;
