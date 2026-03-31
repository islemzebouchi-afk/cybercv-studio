import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ArrowLeft, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { defaultResumeData } from '@/types/resume';
import type { ResumeData, TemplateStyle } from '@/types/resume';
import FormSteps from '@/components/builder/FormSteps';
import ResumePreview from '@/components/builder/ResumePreview';
import TemplateSelector from '@/components/builder/TemplateSelector';

const BuilderPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<ResumeData>(defaultResumeData);
  const [template, setTemplate] = useState<TemplateStyle>('minimalist');
  const [currentStep, setCurrentStep] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!previewRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${data.personalInfo.fullName || 'resume'}.pdf`);
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top bar */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-strong border-b border-border px-4 py-3 flex items-center justify-between shrink-0 z-10"
      >
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className="text-muted-foreground hover:text-foreground transition">
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2 font-bold">
            <div className="w-7 h-7 gradient-primary rounded-lg flex items-center justify-center">
              <FileText size={14} className="text-primary-foreground" />
            </div>
            <span className="gradient-text text-sm">ResumeForge</span>
          </div>
        </div>

        <TemplateSelector selected={template} onSelect={setTemplate} />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleDownload}
          disabled={downloading}
          className="gradient-primary px-5 py-2.5 rounded-xl font-semibold text-sm text-primary-foreground flex items-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-60"
        >
          {downloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
          {downloading ? 'Generating...' : 'Download PDF'}
        </motion.button>
      </motion.header>

      {/* Editor */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-y-auto">
        {/* Form panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-[420px] xl:w-[480px] border-r border-border p-6 overflow-y-auto scrollbar-hidden shrink-0"
        >
          <FormSteps currentStep={currentStep} setCurrentStep={setCurrentStep} data={data} setData={setData} />
        </motion.div>

        {/* Preview panel */}
        <div className="flex flex-1 items-start justify-center p-4 lg:p-8 overflow-y-auto overflow-x-hidden bg-muted/30 cyber-grid">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-[210mm] max-w-full scale-[0.4] xs:scale-[0.5] sm:scale-100 origin-top shadow-2xl mb-20"
            style={{ maxWidth: '100%' }}
          >
            <ResumePreview ref={previewRef} data={data} template={template} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
