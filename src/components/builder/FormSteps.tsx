import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Star, GraduationCap } from 'lucide-react';
import type { ResumeData } from '@/types/resume';
import PersonalInfoForm from './PersonalInfoForm';
import ExperienceForm from './ExperienceForm';
import SkillsForm from './SkillsForm';
import EducationForm from './EducationForm';

const steps = [
  { id: 0, label: 'Personal', icon: User },
  { id: 1, label: 'Experience', icon: Briefcase },
  { id: 2, label: 'Skills', icon: Star },
  { id: 3, label: 'Education', icon: GraduationCap },
];

interface FormStepsProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const FormSteps = ({ currentStep, setCurrentStep, data, setData }: FormStepsProps) => {
  return (
    <div className="h-full flex flex-col">
      {/* Step tabs */}
      <div className="flex gap-1 p-1 glass-strong rounded-xl mb-6">
        {steps.map((s) => (
          <button
            key={s.id}
            onClick={() => setCurrentStep(s.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
              currentStep === s.id
                ? 'gradient-primary text-primary-foreground shadow-lg shadow-primary/20'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <s.icon size={16} />
            <span className="hidden sm:inline">{s.label}</span>
          </button>
        ))}
      </div>

      {/* Step content */}
      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            {currentStep === 0 && <PersonalInfoForm data={data} setData={setData} />}
            {currentStep === 1 && <ExperienceForm data={data} setData={setData} />}
            {currentStep === 2 && <SkillsForm data={data} setData={setData} />}
            {currentStep === 3 && <EducationForm data={data} setData={setData} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FormSteps;
