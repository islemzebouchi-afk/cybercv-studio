import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#020817] text-white p-10 font-sans text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-6">Contact Us</h1>
        <p className="text-slate-300 mb-10 text-lg">
          Have a question or need support? We are here to help you.
        </p>
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h2 className="text-2xl font-medium mb-4">Email Support</h2>
          <p className="text-blue-400 text-xl font-mono mb-6">islemzebouchi@gmail.com</p> 
          <p className="text-slate-500 text-sm italic">
            *Replace the email above with your actual email address.
          </p>
        </div>
        <div className="mt-12">
          <p className="text-slate-400 mb-6">You can also reach out via our social media channels.</p>
          <button onClick={() => window.history.back()} className="px-8 py-3 bg-slate-800 rounded-full hover:bg-slate-700 transition">Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;