import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">Privacy Policy</h1>
        <p className="text-slate-400 mb-4">Welcome to CyberCV Studio. We are committed to protecting your personal information.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Data Safety</h2>
        <p className="text-slate-400">All resume data is processed locally. We do not store your information on our servers.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Google AdSense</h2>
        <p className="text-slate-400">This website uses Google AdSense to display ads. Google may use cookies to serve ads based on your interests.</p>
        <button onClick={() => window.history.back()} className="mt-10 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">Back to Home</button>
      </div>
    </div>
  );
};

export default Privacy;