import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#020817] text-white p-10 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-8">About CyberCV Studio</h1>
        <p className="text-lg text-slate-300 mb-6 leading-relaxed">
          Welcome to **CyberCV Studio**, the ultimate destination for modern job seekers. Our mission is to empower professionals by providing them with high-tech, aesthetically pleasing, and effective resume-building tools.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-100">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-slate-400 space-y-3">
          <li>**Modern Templates:** Designed with the latest web technologies.</li>
          <li>**Privacy First:** Your data never leaves your browser.</li>
          <li>**Ease of Use:** Build a professional CV in minutes, not hours.</li>
        </ul>
        <p className="mt-8 text-slate-400">
          We believe that a great career starts with a great first impression. Let us help you land your dream job.
        </p>
        <button onClick={() => window.history.back()} className="mt-12 px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all">Back to Home</button>
      </div>
    </div>
  );
};

export default About;