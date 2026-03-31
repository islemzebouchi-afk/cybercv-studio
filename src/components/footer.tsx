import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-sm">
            © 2026 CyberCV Studio. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <Link to="/about" className="text-slate-300 hover:text-blue-400 transition">About Us</Link>
            <Link to="/contact" className="text-slate-300 hover:text-blue-400 transition">Contact Us</Link>
            <Link to="/privacy" className="text-slate-300 hover:text-blue-400 transition">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;